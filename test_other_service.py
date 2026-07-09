import asyncio
import binascii
from bleak import BleakClient

# UUIDs for the second BLE service (HopeRF serial write with response)
WRITE_UUID = "5833ff02-9b8b-5191-6142-22a4536ef123"
NOTIFY_UUID = "5833ff03-9b8b-5191-6142-22a4536ef123"
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
        print(f"  [Notify] Received on 5833ff03: {data.hex()}")
        if data.startswith(b"\x5a\x0a") or data.startswith(b"\x5a\x0b"):
            if self.hs_future and not self.hs_future.done():
                self.hs_future.set_result(data)

    async def handshake(self):
        print("Subscribing to notifications on 5833ff03...")
        await self.client.start_notify(NOTIFY_UUID, self._notification_handler)
        r = calculate_r_from_mac(self.mac)
        
        print("Sending hardware request...")
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x01" + b"\x00" * 10, response=True)
        await asyncio.sleep(0.5)

        print("Sending challenge...")
        self.hs_future = asyncio.get_event_loop().create_future()
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x0a" + b"\x00" * 10, response=True)
        await asyncio.wait_for(self.hs_future, timeout=5.0)

        print("Sending challenge response...")
        self.hs_future = asyncio.get_event_loop().create_future()
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x0b" + bytes([r]) * 10, response=True)
        await asyncio.wait_for(self.hs_future, timeout=5.0)
        print("Handshake success on second service!")

    async def print_patterns(self):
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x0c\x07", response=True)
        await asyncio.sleep(0.3)

        total_packets = 45
        start_packet = b"\x5a\x04" + total_packets.to_bytes(2, "big") + b"\x00\x00"
        await self.client.write_gatt_char(WRITE_UUID, start_packet, response=True)
        await asyncio.sleep(0.1)

        print("Sending Block 1 (no nulls)...")
        block1_line = bytes([0x55] * 96)
        for i in range(15):
            packet = b"\x55" + i.to_bytes(2, "big") + block1_line + b"\x00"
            await self.client.write_gatt_char(WRITE_UUID, packet, response=True)
            await asyncio.sleep(0.04)

        print("Sending Block 2 (Half 0x55, Half 0x00)...")
        block2_line = bytes([0x55] * 48 + [0x00] * 48)
        for i in range(15, 30):
            packet = b"\x55" + i.to_bytes(2, "big") + block2_line + b"\x00"
            await self.client.write_gatt_char(WRITE_UUID, packet, response=True)
            await asyncio.sleep(0.04)

        print("Sending Block 3 (Borders at edges, nulls in middle)...")
        block3_line = bytes([0xFF] * 2 + [0x00] * 92 + [0xFF] * 2)
        for i in range(30, 45):
            packet = b"\x55" + i.to_bytes(2, "big") + block3_line + b"\x00"
            await self.client.write_gatt_char(WRITE_UUID, packet, response=True)
            await asyncio.sleep(0.04)

        end_packet = b"\x5a\x04" + total_packets.to_bytes(2, "big") + b"\x01\x00"
        await self.client.write_gatt_char(WRITE_UUID, end_packet, response=True)
        await asyncio.sleep(0.5)

    async def feed_paper(self, blank_lines=40):
        blank = bytes(96)
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x04" + blank_lines.to_bytes(2, "big") + b"\x00\x00", response=True)
        for i in range(blank_lines):
            packet = b"\x55" + i.to_bytes(2, "big") + blank + b"\x00"
            await self.client.write_gatt_char(WRITE_UUID, packet, response=True)
            await asyncio.sleep(0.02)
        await self.client.write_gatt_char(WRITE_UUID, b"\x5a\x04" + blank_lines.to_bytes(2, "big") + b"\x01\x00", response=True)
        await asyncio.sleep(0.5)

async def run():
    print(f"Connecting to LX-D02 ({ADDRESS})...")
    async with BleakClient(ADDRESS) as client:
        printer = BLEPrinter(client, MAC)
        await printer.handshake()
        await printer.print_patterns()
        await printer.feed_paper(40)
        print("Done!")

if __name__ == "__main__":
    asyncio.run(run())
