from PIL import Image, ImageDraw, ImageFont

PRINTER_WIDTH = 384

def render_hello(text_to_print: str) -> Image:
    img = Image.new("1", (PRINTER_WIDTH, 140), color=1)
    d = ImageDraw.Draw(img)
    d.rectangle([(2, 2), (PRINTER_WIDTH - 3, 137)], outline=0, width=2)
    
    # Try to load a font, fall back to default
    try:
        font_large = ImageFont.truetype("/Library/Fonts/Arial.ttf", 36)
        font_small = ImageFont.truetype("/Library/Fonts/Arial.ttf", 16)
    except Exception:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

    d.text((PRINTER_WIDTH // 2, 35), "HELLO WORLD!", fill=0, font=font_large, anchor="ms")
    d.text((PRINTER_WIDTH // 2, 70), text_to_print, fill=0, font=font_small, anchor="ms")
    d.text((PRINTER_WIDTH // 2, 95), "Automatic Handshake Test", fill=0, font=font_small, anchor="ms")
    d.text((PRINTER_WIDTH // 2, 115), "via macOS BLE Link", fill=0, font=font_small, anchor="ms")
    return img

if __name__ == "__main__":
    img = render_hello("Mini Thermal Printer Test")
    img.save("/Users/aadilsp/Desktop/Antigravity/Hiba's exam/test_render.png")
    print("Saved test_render.png")
