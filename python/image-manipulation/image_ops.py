from PIL import Image, ImageOps

image = Image.open('images/sample.jpg')

# ============= color changes =============
img_contrast = ImageOps.autocontrast(image, cutoff=5)
img_inverted = ImageOps.invert(image)
img_solarize = ImageOps.solarize(image, threshold=50)
img_posterize = ImageOps.posterize(image, bits=1)
img_grayscale = ImageOps.grayscale(image)
img_colorize = ImageOps.colorize(image.convert('L'), black='red', white='blue')

# ============= dimension changes =============
img_mirror = ImageOps.mirror(image)
img_flip = ImageOps.flip(image)
img_scale = ImageOps.scale(image, factor=.2)
img_contain = ImageOps.contain(image, size=(5000, 2000))

# ============= add and remove =============
img_border = ImageOps.expand(image, border=10, fill=(255, 255, 0))
img_pad = ImageOps.pad(image, size=(5000, 2000))
img_fit = ImageOps.fit(image, size=(5000, 2000))
img_crop = ImageOps.crop(image, border=500)

# img_crop.show()