import asyncio
import sys
from PIL import Image, ImageDraw, ImageFont
from bleak import BleakClient, BleakScanner

# UUIDs for the FunnyPrint protocol (LX-D02 / Xiqi / DOLEWA)
WRITE_UUID = "0000ffe1-0000-1000-8000-00805f9b34fb"
NOTIFY_UUID = "0000ffe2-0000-1000-8000-00805f9b34fb"
PRINTER_WIDTH = 384

def _crc16(data: bytes) -> int:
    crc = 0
    for b in data:
        for i in range(8):
            bit = (b >> (7 - i)) & 1
            c15 = (crc >> 15) & 1
            crc = (crc << 1) & 0xFFFF
            if c15 ^ bit:
                crc ^= 0x1021
    return crc

def calculate_r_from_mac_bytes(mac_bytes: bytes) -> int:
    payload = b"\x00" + mac_bytes
    return (_crc16(payload) >> 8) & 0xFF

def pil_to_funny_lines(img_1bit):
    raw = img_1bit.tobytes()
    bpl = PRINTER_WIDTH // 8  # 48 bytes per line
    lines = [bytes([b ^ 0xFF for b in raw[i:i + bpl]])
             for i in range(0, len(raw), bpl)]
    result = []
    
    # Pair consecutive lines into 96-byte print packets
    it = iter(lines)
    while True:
        try:
            line1 = next(it)
        except StopIteration:
            break
        try:
            line2 = next(it)
        except StopIteration:
            line2 = bytes(48)
            
        combined = bytearray(96)
        combined[:48] = line1
        combined[48:] = line2
        result.append(bytes(combined))
    return result

class BLEPrinter:
    def __init__(self, client: BleakClient):
        self.client = client
        self.hs_q = asyncio.Queue()
        self.ctrl_q = asyncio.Queue()
        self.battery = "?"

    def _notification_handler(self, sender, data):
        pt = data[0:2]
        if pt in (b"\x5a\x0a", b"\x5a\x0b", b"\x5a\x01"):
            self.hs_q.put_nowait(data)
        elif pt == b"\x5a\x05": # Lost packet
            line_no = int.from_bytes(data[2:4], "big")
            self.ctrl_q.put_nowait(("lost", line_no))
        elif pt == b"\x5a\x06": # Finished
            self.ctrl_q.put_nowait(("done", 0))
        elif pt == b"\x5a\x08": # Pause
            self.ctrl_q.put_nowait(("pause", 0))
        elif pt == b"\x5a\x02": # Status
            self.battery = data[2]

    async def handshake(self):
        print("Subscribing to notifications...")
        await self.client.start_notify(NOTIFY_UUID, self._notification_handler)
        
        # Step 1: Send hardware info request to get the MAC address
        print("Requesting printer MAC address...")
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x01" + b"\x00" * 10, response=False)
        
        # Wait for hardware response
        mac_bytes = None
        for _ in range(5):
            try:
                data = await asyncio.wait_for(self.hs_q.get(), timeout=2.0)
                if data.startswith(b"\x5a\x01") and len(data) >= 10:
                    mac_bytes = data[4:10]
                    break
            except asyncio.TimeoutError:
                continue

        if not mac_bytes:
            raise RuntimeError("Could not retrieve MAC address from printer!")

        mac_str = ":".join(f"{b:02x}" for b in mac_bytes).upper()
        print(f"Retrieved Printer MAC: {mac_str}")
        r = calculate_r_from_mac_bytes(mac_bytes)

        # Step 2: Send client challenge
        print("Sending challenge...")
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x0a" + b"\x00" * 10, response=False)
        
        # Wait for printer challenge reply
        challenge_replied = False
        for _ in range(5):
            try:
                data = await asyncio.wait_for(self.hs_q.get(), timeout=2.0)
                if data.startswith(b"\x5a\x0a"):
                    challenge_replied = True
                    break
            except asyncio.TimeoutError:
                continue
        
        if not challenge_replied:
            raise RuntimeError("Challenge reply timeout!")

        # Step 3: Send challenge response
        print("Sending challenge response...")
        response_packet = b"\x5a\x0b" + bytes([r]) * 10
        await self.client.write_gatt_char(WRITE_UUID, response_packet, response=False)

        # Wait for handshake success confirmation
        success = False
        for _ in range(5):
            try:
                data = await asyncio.wait_for(self.hs_q.get(), timeout=2.0)
                if data.startswith(b"\x5a\x0b") and len(data) > 2 and data[2] == 0x01:
                    success = True
                    break
            except asyncio.TimeoutError:
                continue

        if not success:
            raise RuntimeError("Handshake failed! Printer rejected response.")
            
        print("🤝 Handshake successful!")

    async def print_image(self, img_1bit):
        lines = pil_to_funny_lines(img_1bit)
        
        # Append 80 blank padding packets (160 lines) at the end of the image lines.
        # This pushes the final border past the printhead heater elements and allows
        # it to be fully printed and visible before the print session terminates.
        for _ in range(80):
            lines.append(bytes(96))
        
        total = len(lines)
        print(f"Streaming {total} print packets...")
        
        # Set print density to max (7)
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x0c\x07", response=False)
        await asyncio.sleep(0.3)

        # Start print session
        start_packet = b"\x5a\x04" + total.to_bytes(2, "big") + b"\x00\x00"
        await self.client.write_gatt_char(WRITE_UUID, start_packet, response=False)
        await asyncio.sleep(0.1)

        # Flush control queue
        while not self.ctrl_q.empty():
            self.ctrl_q.get_nowait()

        cur = 0
        state = "SENDING"
        
        while state != "DONE":
            # Check control queue events
            while not self.ctrl_q.empty():
                event_type, val = self.ctrl_q.get_nowait()
                if event_type == "done":
                    state = "DONE"
                elif event_type == "lost":
                    cur = max(0, val - 1)
                    print(f"--> Re-sending from packet index {cur}...")
                    state = "SENDING"
                elif event_type == "pause":
                    state = "PAUSED"
                    print(f"--> Printer busy, pausing at index {cur}...")

            if state == "DONE":
                break

            if state == "PAUSED":
                try:
                    event_type, val = await asyncio.wait_for(self.ctrl_q.get(), timeout=5.0)
                    if event_type == "done":
                        state = "DONE"
                    elif event_type == "lost":
                        cur = max(0, val - 1)
                        state = "SENDING"
                    elif event_type == "pause":
                        continue
                except asyncio.TimeoutError:
                    state = "SENDING"
                continue

            # SENDING
            if cur < total:
                packet = b"\x55" + cur.to_bytes(2, "big") + lines[cur] + b"\x00"
                await self.client.write_gatt_char(WRITE_UUID, packet, response=False)
                cur += 1
                # Decreased sleep to 25ms to increase printing speed by another ~10%
                await asyncio.sleep(0.025)
            else:
                try:
                    event_type, val = await asyncio.wait_for(self.ctrl_q.get(), timeout=5.0)
                    if event_type == "done":
                        state = "DONE"
                    elif event_type == "lost":
                        cur = max(0, val - 1)
                        state = "SENDING"
                except asyncio.TimeoutError:
                    break

        # End print session
        end_packet = b"\x5a\x04" + total.to_bytes(2, "big") + b"\x01\x00"
        await self.client.write_gatt_char(WRITE_UUID, end_packet, response=False)
        await asyncio.sleep(0.5)

    async def feed_paper(self, blank_lines=40):
        blank = bytes(96)
        print(f"Feeding paper ({blank_lines} lines)...")
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x04" + blank_lines.to_bytes(2, "big") + b"\x00\x00", response=False)
        for i in range(blank_lines):
            packet = b"\x55" + i.to_bytes(2, "big") + blank + b"\x00"
            await self.client.write_gatt_char(WRITE_UUID, packet, response=False)
            await asyncio.sleep(0.02)
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x04" + blank_lines.to_bytes(2, "big") + b"\x01\x00", response=False)
        await asyncio.sleep(0.5)

def load_bold_font(font_size: int):
    # Try different font paths to find a bold Arial or Helvetica font on macOS
    font_paths = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/Library/Fonts/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/Helvetica.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "Arial Bold.ttf",
        "Arial-Bold",
        "Helvetica-Bold"
    ]
    for path in font_paths:
        try:
            return ImageFont.truetype(path, font_size)
        except Exception:
            continue
    try:
        return ImageFont.load_default()
    except Exception:
        return None

def render_hello(text_to_print: str) -> Image:
    # Increased height to 240 to fit thicker borders and larger text comfortably
    img = Image.new("1", (PRINTER_WIDTH, 240), color=1)
    d = ImageDraw.Draw(img)
    
    # Outer border is 12 pixels wide, inner border is 5 pixels wide
    d.rectangle([(4, 4), (PRINTER_WIDTH - 5, 235)], outline=0, width=12)
    d.rectangle([(22, 22), (PRINTER_WIDTH - 23, 217)], outline=0, width=5)
    
    # Load fonts
    font_huge = load_bold_font(42)
    font_large = load_bold_font(26)
    font_small = load_bold_font(18)

    # Draw Text centered inside the inner borders
    d.text((PRINTER_WIDTH // 2, 72), "HELLO WORLD!", fill=0, font=font_huge, anchor="ms")
    d.text((PRINTER_WIDTH // 2, 125), text_to_print, fill=0, font=font_large, anchor="ms")
    d.text((PRINTER_WIDTH // 2, 165), "Automatic Handshake Test", fill=0, font=font_small, anchor="ms")
    d.text((PRINTER_WIDTH // 2, 195), "via macOS BLE Link", fill=0, font=font_small, anchor="ms")
    return img

async def run(text_to_print: str):
    print("Searching for printer (LX-D02)...")
    devices = await BleakScanner.discover(timeout=5.0)
    target_address = None
    for d in devices:
        name = d.name or ""
        if "lx" in name.lower() or "d02" in name.lower():
            target_address = d.address
            break
            
    if not target_address:
        print("\n[ERROR] Printer 'lx d02' not found. Make sure it is turned ON.")
        return

    print(f"Connecting to device at {target_address}...")
    async with BleakClient(target_address) as client:
        print("Connected!")
        printer = BLEPrinter(client)
        await printer.handshake()
        
        img = render_hello(text_to_print)
        print("Printing...")
        await printer.print_image(img)
        
        # Generous feed so it rolls out fully and can be torn off cleanly.
        # Since we already padded 160 lines (80 packets) inside print_image,
        # we only need a smaller feed here to pass the tear bar completely.
        await printer.feed_paper(20)
        print("\n🎉 Print job completed successfully!")

if __name__ == "__main__":
    text = "Mini Thermal Printer Test"
    if len(sys.argv) > 1:
        text = " ".join(sys.argv[1:])
    asyncio.run(run(text))
