import sys
from PIL import Image
import os

def extract_ink(input_path, output_path):
    if not os.path.exists(input_path):
        print(f"File not found: {input_path}")
        return
        
    img = Image.open(input_path).convert("L")
    new_img = Image.new("RGBA", img.size, (0, 0, 0, 0))
    L_data = img.getdata()
    new_data = []
    
    for val in L_data:
        # thresholding to remove the paper texture completely
        if val > 230:
            alpha = 0
        else:
            alpha = int(255 * (1 - val/230.0))
        # Use #1a1a1a as ink color
        new_data.append((26, 26, 26, alpha))
        
    new_img.putdata(new_data)
    new_img.save(output_path, "PNG")
    print(f"Saved {output_path}")

extract_ink("public/images/falaises_lavis.jpg", "public/images/falaises_lavis.png")
extract_ink("public/images/bonhomme.jpg", "public/images/bonhomme.png")
