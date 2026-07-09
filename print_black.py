import asyncio
import binascii
from bleak import BleakClient, BleakScanner

WRITE_UUID = "0000ffe1-0000-1000-8000-00805f9b34fb"
NOTIFY_UUID = "0000ffe2-0000-1000-8000-00805f9b34fb"
ADDRESS = "83C3047E-31E5-410F-B2B7-E1D82B6336BB"
MAC = "C0:00:00:00:06:00"

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
        await self.client.start_notify(NOTIFY_UUID, self._notification_handler)
        r = calculate_r_from_mac(self.mac)
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x01" + b"\x00" * 10, response=False)
        await asyncio.sleep(0.5)

        self.hs_future = asyncio.get_event_loop().create_future()
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x0a" + b"\x00" * 10, response=False)
        await asyncio.wait_for(self.hs_future, timeout=5.0)

        self.hs_future = asyncio.get_event_loop().create_future()
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x0b" + bytes([r]) * 10, response=False)
        await asyncio.wait_for(self.hs_future, timeout=5.0)
        print("Handshake success!")

    async def print_solid_black(self, num_packets=60):
        # Set print density to max (7)
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x0c\x07", response=False)
        await asyncio.sleep(0.3)

        # Start print event
        start_packet = b"\x5a\x04" + num_packets.to_bytes(2, "big") + b"\x00\x00"
        await self.client.write_gatt_char(WRITE_UUID, start_packet, response=False)
        await asyncio.sleep(0.1)

        # 96 bytes of 0xFF (solid black)
        solid_black_line = bytes([0xFF] * 96)

        print(f"Streaming {num_packets} solid black packets...")
        for idx in range(num_packets):
            packet = b"\x55" + idx.to_bytes(2, "big") + solid_black_line + b"\x00"
            await self.client.write_gatt_char(WRITE_UUID, packet, response=False)
            await asyncio.sleep(0.04)

        # End print event
        end_packet = b"\x5a\x04" + num_packets.to_bytes(2, "big") + b"\x01\x00"
        await self.client.write_gatt_char(WRITE_UUID, end_packet, response=False)
        await asyncio.sleep(0.5)

    async def feed_paper(self, blank_lines=40):
        blank = bytes(96)
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x04" + blank_lines.to_bytes(2, "big") + b"\x00\x00", response=False)
        for i in range(blank_lines):
            packet = b"\x55" + i.to_bytes(2, "big") + blank + b"\x00"
            await self.client.write_gatt_char(WRITE_UUID, packet, response=False)
            await asyncio.sleep(0.02)
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x04" + blank_lines.to_bytes(2, "big") + b"\x01\x00", response=False)
        await asyncio.sleep(0.5)

async def run():
    print(f"Connecting to LX-D02 ({ADDRESS})...")
    async with BleakClient(ADDRESS) as client:
        printer = BLEPrinter(client, MAC)
        await printer.handshake()
        
        # Print a solid black block of 60 packets
        await printer.print_solid_black(60)
        await printer.feed_paper(40)
        print("Done!")

if __name__ == "__main__":
    asyncio.run(run())
