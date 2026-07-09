import asyncio
import binascii
import sys
from PIL import Image, ImageDraw, ImageFont
from bleak import BleakClient, BleakScanner

# UUIDs for the FunnyPrint protocol (LX-D02 / Xiqi / DOLEWA)
WRITE_UUID = "0000ffe1-0000-1000-8000-00805f9b34fb"
NOTIFY_UUID = "0000ffe2-0000-1000-8000-00805f9b34fb"

# 384 pixels width is standard for 58mm thermal printers
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
    if len(mac_hex) != 12:
        raise ValueError(f"Invalid MAC address: {mac}")
    payload = b"\x00" + binascii.unhexlify(mac_hex)
    return (_crc16(payload) >> 8) & 0xFF

def pil_to_funny_lines(img_1bit):
    raw = img_1bit.tobytes()
    bpl = PRINTER_WIDTH // 8  # 48 bytes per line
    lines = [bytes([b ^ 0xFF for b in raw[i:i + bpl]])
             for i in range(0, len(raw), bpl)]
    result = []
    
    # Process lines in pairs of two (96 bytes per packet)
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
    def __init__(self, client: BleakClient, mac_address: str):
        self.client = client
        self.mac = mac_address
        self.hs_future = None

    def _notification_handler(self, sender, data):
        if data.startswith(b"\x5a\x0a") or data.startswith(b"\x5a\x0b"):
            if self.hs_future and not self.hs_future.done():
                self.hs_future.set_result(data)

    async def handshake(self):
        print("Starting notification subscription...")
        await self.client.start_notify(NOTIFY_UUID, self._notification_handler)
        
        # Calculate expected response byte
        r = calculate_r_from_mac(self.mac)
        print(f"Calculated handshake response byte: {hex(r)} (from MAC {self.mac})")

        # Step 1: Send hardware info request
        print("Sending hardware request...")
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x01" + b"\x00" * 10, response=False)
        await asyncio.sleep(0.5)

        # Step 2: Send client challenge
        print("Sending challenge...")
        self.hs_future = asyncio.get_event_loop().create_future()
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x0a" + b"\x00" * 10, response=False)
        
        # Wait for printer challenge
        print("Waiting for printer challenge response...")
        try:
            await asyncio.wait_for(self.hs_future, timeout=5.0)
        except asyncio.TimeoutError:
            raise RuntimeError("Printer challenge timeout!")

        # Step 3: Send challenge response
        print("Sending challenge response...")
        self.hs_future = asyncio.get_event_loop().create_future()
        response_packet = b"\x5a\x0b" + bytes([r]) * 10
        await self.client.write_gatt_char(WRITE_UUID, response_packet, response=False)

        # Wait for handshake success confirmation
        print("Waiting for handshake success confirmation...")
        try:
            result = await asyncio.wait_for(self.hs_future, timeout=5.0)
            if len(result) > 2 and result[2] == 0x01:
                print("🤝 Handshake successful!")
            else:
                print(f"⚠️ Handshake response code: {result.hex()}")
                raise RuntimeError("Handshake failed! Printer rejected response.")
        except asyncio.TimeoutError:
            raise RuntimeError("Handshake confirmation timeout!")

    async def print_image(self, img_1bit):
        lines = pil_to_funny_lines(img_1bit)
        print(f"Prepared {len(lines)} line packets to print.")

        # Set print density to max (7)
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x0c\x07", response=False)
        await asyncio.sleep(0.3)

        # Start print session
        print("Starting print session...")
        total_lines = len(lines)
        start_packet = b"\x5a\x04" + total_lines.to_bytes(2, "big") + b"\x00\x00"
        await self.client.write_gatt_char(WRITE_UUID, start_packet, response=False)
        await asyncio.sleep(0.1)

        # Stream lines
        for idx, line in enumerate(lines):
            packet = b"\x55" + idx.to_bytes(2, "big") + line + b"\x00"
            await self.client.write_gatt_char(WRITE_UUID, packet, response=False)
            await asyncio.sleep(0.03) # Cooldown to avoid buffer overflow

        # End print session
        print("Ending print session...")
        end_packet = b"\x5a\x04" + total_lines.to_bytes(2, "big") + b"\x01\x00"
        await self.client.write_gatt_char(WRITE_UUID, end_packet, response=False)
        await asyncio.sleep(0.5)

    async def feed_paper(self, blank_lines=50):
        # Print blank lines to feed paper
        blank = bytes(96)
        print(f"Feeding paper ({blank_lines} lines)...")
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x04" + blank_lines.to_bytes(2, "big") + b"\x00\x00", response=False)
        for i in range(blank_lines):
            packet = b"\x55" + i.to_bytes(2, "big") + blank + b"\x00"
            await self.client.write_gatt_char(WRITE_UUID, packet, response=False)
            await asyncio.sleep(0.02)
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x04" + blank_lines.to_bytes(2, "big") + b"\x01\x00", response=False)
        await asyncio.sleep(0.5)

def render_hello_world() -> Image:
    # Render a beautiful "Hello World!" image
    img = Image.new("1", (PRINTER_WIDTH, 120), color=1)
    d = ImageDraw.Draw(img)
    
    # Try to load a font, fall back to default
    try:
        font_large = ImageFont.truetype("/Library/Fonts/Arial.ttf", 36)
        font_small = ImageFont.truetype("/Library/Fonts/Arial.ttf", 16)
    except Exception:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # Draw border
    d.rectangle([(2, 2), (PRINTER_WIDTH - 3, 117)], outline=0, width=2)
    
    # Draw Text
    d.text((PRINTER_WIDTH // 2, 25), "HELLO WORLD!", font=font_large, fill=0, anchor="ms")
    d.text((PRINTER_WIDTH // 2, 65), "Thermal Printer Test", font=font_small, fill=0, anchor="ms")
    d.text((PRINTER_WIDTH // 2, 85), "via Bluetooth Low Energy", font=font_small, fill=0, anchor="ms")
    
    return img

async def run_print(mac_address: str):
    print("Scanning for printer...")
    devices = await BleakScanner.discover(timeout=5.0)
    target_device = None
    for d in devices:
        name = d.name or ""
        if "lx" in name.lower() or "d02" in name.lower():
            target_device = d
            break
            
    if not target_device:
        print("\n[ERROR] Could not find printer 'lx d02' in range!")
        print("Devices found during scan:")
        for d in devices:
            print(f" - {d.name or 'Unknown'} ({d.address})")
        return

    print(f"Found printer: {target_device.name} at Bluetooth address: {target_device.address}")
    
    print("Connecting...")
    async with BleakClient(target_device.address) as client:
        print("Connected!")
        printer = BLEPrinter(client, mac_address)
        
        # Perform security handshake
        await printer.handshake()
        
        # Render the bitmap image
        print("Rendering Hello World bitmap...")
        img = render_hello_world()
        
        # Print
        print("Printing...")
        await printer.print_image(img)
        
        # Feed paper so it can be torn off cleanly
        await printer.feed_paper(40)
        
        print("\n🎉 Print job completed successfully!")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 print_ble_hello.py <PRINTER_REAL_MAC_ADDRESS>")
        print("Example: python3 print_ble_hello.py C0:00:00:00:07:35")
        print("\nNote: You can get the printer's MAC address from your phone's Bluetooth settings or a BLE scanner app (e.g. LightBlue).")
        sys.exit(1)
        
    mac = sys.argv[1]
    asyncio.run(run_print(mac))
