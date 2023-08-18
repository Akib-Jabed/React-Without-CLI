from PIL import Image

with Image.open('images/strawberry.jpg') as image:
    image.load()

cmyk_img = image.convert('CMYK')
gray_img = image.convert('L')   # Grayscale

print(image.getbands())
print(cmyk_img.getbands())
print(gray_img.getbands())

cmyk_img.show()
gray_img.show()

r, g, b = image.split()
zero_band = r.point(lambda _: 0)
red_band = Image.merge("RGB", (r, zero_band, zero_band))
green_band = Image.merge("RGB", (zero_band, g, zero_band))
blue_band = Image.merge("RGB", (zero_band, zero_band, b))
# red_band.show()
# green_band.show()
# blue_band.show()

def tile(*images, vertical=False):
    width, height = images[0].width, images[0].height
    tiled_size = ((width, height * len(images)) if vertical else (width * len(images), height))
    tiled_img = Image.new(images[0].mode, tiled_size)
    row, col = 0, 0
    for img in images:
        tiled_img.paste(img, (row, col))
        if vertical:
            col += height
        else:
            row += width
    
    return tiled_img 

band_img = tile(red_band, green_band, blue_band)
band_img.show()