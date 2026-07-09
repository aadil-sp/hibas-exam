import asyncio
import binascii
from PIL import Image, ImageDraw, ImageFont
from bleak import BleakClient, BleakScanner

WRITE_UUID = "0000ffe1-0000-1000-8000-00805f9b34fb"
NOTIFY_UUID = "0000ffe2-0000-1000-8000-00805f9b34fb"
ADDRESS = "83C3047E-31E5-410F-B2B7-E1D82B6336BB"
MAC = "C0:00:00:00:06:00"
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

def calculate_r_from_mac(mac: str) -> int:
    mac_hex = mac.replace(":", "").replace("-", "")
    payload = b"\x00" + binascii.unhexlify(mac_hex)
    return (_crc16(payload) >> 8) & 0xFF

def pil_to_funny_lines(img_1bit):
    raw = img_1bit.tobytes()
    bpl = PRINTER_WIDTH // 8
    lines = [bytes([b ^ 0xFF for b in raw[i:i + bpl]])
             for i in range(0, len(raw), bpl)]
    result = []
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

class RobustPrinter:
    def __init__(self, client: BleakClient, mac_address: str):
        self.client = client
        self.mac = mac_address
        self.hs_q = asyncio.Queue()
        self.ctrl_q = asyncio.Queue()
        self.battery = "?"

    def _notification_handler(self, sender, data):
        pt = data[0:2]
        print(f"  [Notify] {data.hex()}")
        if pt == b"\x5a\x0a" or pt == b"\x5a\x0b":
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
        await self.client.start_notify(NOTIFY_UUID, self._notification_handler)
        r = calculate_r_from_mac(self.mac)
        
        # Hardware info
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x01" + b"\x00" * 10, response=False)
        await asyncio.sleep(0.5)

        # Challenge
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x0a" + b"\x00" * 10, response=False)
        await asyncio.wait_for(self.hs_q.get(), timeout=5.0)

        # Response
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x0b" + bytes([r]) * 10, response=False)
        res = await asyncio.wait_for(self.hs_q.get(), timeout=5.0)
        if len(res) > 2 and res[2] == 0x01:
            print("Handshake success!")
        else:
            raise RuntimeError("Handshake failed")

    async def print_image(self, img_1bit):
        lines = pil_to_funny_lines(img_1bit)
        total = len(lines)
        print(f"Starting print of {total} packets...")

        # Set density
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x0c\x07", response=False)
        await asyncio.sleep(0.3)

        # Start print event
        start_packet = b"\x5a\x04" + total.to_bytes(2, "big") + b"\x00\x00"
        await self.client.write_gatt_char(WRITE_UUID, start_packet, response=False)
        await asyncio.sleep(0.1)

        # Flush any stray control events
        while not self.ctrl_q.empty():
            self.ctrl_q.get_nowait()

        cur = 0
        state = "SENDING"
        pause_count = 0
        
        while state != "DONE":
            # Check control queue events
            while not self.ctrl_q.empty():
                event_type, val = self.ctrl_q.get_nowait()
                if event_type == "done":
                    state = "DONE"
                elif event_type == "lost":
                    # Retransmit starting from lost packet index - 1
                    cur = max(0, val - 1)
                    print(f"--> Printer reported packet loss. Retransmitting from index {cur}")
                    state = "SENDING"
                elif event_type == "pause":
                    state = "PAUSED"
                    pause_count += 1
                    print(f"--> Printer requested PAUSE at index {cur} (pause count: {pause_count})")

            if state == "DONE":
                break

            if state == "PAUSED":
                # Wait for next event (usually lost or done)
                try:
                    event_type, val = await asyncio.wait_for(self.ctrl_q.get(), timeout=10.0)
                    if event_type == "done":
                        state = "DONE"
                    elif event_type == "lost":
                        cur = max(0, val - 1)
                        print(f"--> Resume: Retransmitting from index {cur}")
                        state = "SENDING"
                    elif event_type == "pause":
                        continue
                except asyncio.TimeoutError:
                    print("--> Pause timeout, trying to resume sending...")
                    state = "SENDING"
                continue

            # SENDING
            if cur < total:
                packet = b"\x55" + cur.to_bytes(2, "big") + lines[cur] + b"\x00"
                await self.client.write_gatt_char(WRITE_UUID, packet, response=False)
                cur += 1
                await asyncio.sleep(0.035) # standard delay
            else:
                # We sent everything, wait for print done confirmation
                try:
                    event_type, val = await asyncio.wait_for(self.ctrl_q.get(), timeout=5.0)
                    if event_type == "done":
                        state = "DONE"
                    elif event_type == "lost":
                        cur = max(0, val - 1)
                        state = "SENDING"
                except asyncio.TimeoutError:
                    print("--> Timeout waiting for final print done confirmation.")
                    break

        # End print event
        end_packet = b"\x5a\x04" + total.to_bytes(2, "big") + b"\x01\x00"
        await self.client.write_gatt_char(WRITE_UUID, end_packet, response=False)
        await asyncio.sleep(0.5)
        print("Print stream complete.")

    async def feed_paper(self, blank_lines=40):
        blank = bytes(96)
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x04" + blank_lines.to_bytes(2, "big") + b"\x00\x00", response=False)
        for i in range(blank_lines):
            packet = b"\x55" + i.to_bytes(2, "big") + blank + b"\x00"
            await self.client.write_gatt_char(WRITE_UUID, packet, response=False)
            await asyncio.sleep(0.02)
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x04" + blank_lines.to_bytes(2, "big") + b"\x01\x00", response=False)
        await asyncio.sleep(0.5)

def render_hello() -> Image:
    # Let's render a very simple image with text and no border to test
    img = Image.new("1", (PRINTER_WIDTH, 140), color=1)
    d = ImageDraw.Draw(img)
    d.rectangle([(2, 2), (PRINTER_WIDTH - 3, 137)], outline=0, width=2)
    d.text((PRINTER_WIDTH // 2, 35), "HELLO WORLD!", fill=0, anchor="ms")
    d.text((PRINTER_WIDTH // 2, 70), "Robust Print Test", fill=0, anchor="ms")
    d.text((PRINTER_WIDTH // 2, 95), "Flow Control Enabled", fill=0, anchor="ms")
    return img

async def run():
    print(f"Connecting to LX-D02 ({ADDRESS})...")
    async with BleakClient(ADDRESS) as client:
        printer = RobustPrinter(client, MAC)
        await printer.handshake()
        img = render_hello()
        await printer.print_image(img)
        await printer.feed_paper(45)
        print("All done!")

if __name__ == "__main__":
    asyncio.run(run())
