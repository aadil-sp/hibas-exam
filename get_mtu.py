import asyncio
from bleak import BleakClient

ADDRESS = "83C3047E-31E5-410F-B2B7-E1D82B6336BB"

async def main():
    async with BleakClient(ADDRESS) as client:
        print(f"Negotiated MTU: {client.mtu_size}")

if __name__ == "__main__":
    asyncio.run(main())
