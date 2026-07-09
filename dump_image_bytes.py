from test_render import render_hello
from print_hello import pil_to_funny_lines

img = render_hello("Mini Thermal Printer Test")
lines = pil_to_funny_lines(img)

print(f"Total line packets: {len(lines)}")
# Each packet has 96 bytes, which is 2 lines (48 bytes each)
for i in [0, 1, 2, 3, 5, 10, 15, 20]:
    if i < len(lines):
        line = lines[i]
        # Count non-zero bytes
        non_zero = sum(1 for b in line if b != 0)
        print(f"Packet {i}: {non_zero} non-zero bytes | Hex snippet: {line[:10].hex()}...{line[-10:].hex()}")
