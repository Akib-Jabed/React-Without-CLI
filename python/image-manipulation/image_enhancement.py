from PIL import Image, ImageFilter, ImageEnhance

with Image.open('images/buildings.jpg') as img:
    img.load()
    
blur_img = img.filter(ImageFilter.BLUR)
img.filter(ImageFilter.BoxBlur(5)).show()
img.filter(ImageFilter.BoxBlur(20)).show()
img.filter(ImageFilter.GaussianBlur(5)).show()
img.filter(ImageFilter.GaussianBlur(20)).show()

img_gray = img.convert('L')
# img_gray.show()
# img_gray.filter(ImageFilter.FIND_EDGES).show()
# img_gray.filter(ImageFilter.SMOOTH).filter(ImageFilter.EDGE_ENHANCE) .show()
img_gray.filter(ImageFilter.SMOOTH).filter(ImageFilter.EMBOSS).show()

img.filter(ImageFilter.SHARPEN).show()
img.filter(ImageFilter.SMOOTH).show()


color_enhancer = ImageEnhance.Color(img)
contrast_enhancer = ImageEnhance.Contrast(img)
brightness_enhancer = ImageEnhance.Brightness(img)
sharpness_enhancer = ImageEnhance.Sharpness(img)

color_enhancer.enhance(5).show()
contrast_enhancer.enhance(15).show()
brightness_enhancer.enhance(2).show()
sharpness_enhancer.enhance(100).show()
