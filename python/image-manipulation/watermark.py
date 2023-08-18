from PIL import Image, ImageFilter

logo = Image.open('images/realpython-logo.png')
logo_gray = logo.convert('L')
threshold = 50
img_logo = logo_gray.point(lambda x: 255 if x > threshold else 0)
img_logo = img_logo.resize((img_logo.width // 2, img_logo.height // 2))
img_logo = img_logo.filter(ImageFilter.CONTOUR)
img_logo.show()

# to create watermark outlines must be white with black background
logo_watermark = img_logo.point(lambda x: 0 if x == 255 else 255)
logo_watermark.show()

filename = 'images/monastery.jpg'
with Image.open(filename) as background_img:
    background_img.paste(logo_watermark, (480, 160), logo_watermark)
    background_img.show()