from rembg import remove
from PIL import Image

cat_img = cat_img_copy = Image.open('images/cat.jpg')
img_monastery = Image.open('images/monastery.jpg');


# Example 01
img_python = Image.open('images/realpython-logo.png').crop((1250, 550, 1650, 925))
img_logo = remove(img_python)
cat_img.paste(img_logo, (100, 100), mask=img_logo)
cat_img.show()

# Example 02
img_cat = remove(cat_img_copy)
img_cat = img_cat.crop((800, 200, 1700, 1200))
img_cat = img_cat.resize((img_cat.width // 4, img_cat.height // 4))
img_monastery.paste(img_cat, (1300, 750), mask=img_cat)
img_monastery.show()
