
import sys
from PIL import Image

Image.MAX_IMAGE_PIXELS = None

def optimize_image(input_path, output_path):
    try:
        with Image.open(input_path) as img:
            img.thumbnail((220, 90))
            img.save(output_path, 'webp', quality=80)
        print(f"Optimized {input_path} and saved to {output_path}")
    except Exception as e:
        print(f"Error optimizing {input_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python optimize_image.py <input_path> <output_path>")
    else:
        optimize_image(sys.argv[1], sys.argv[2])
