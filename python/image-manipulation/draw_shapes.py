from PIL import Image, ImageDraw, ImageFont

img = Image.open('images/monastery.jpg')
draw = ImageDraw.Draw(img)

draw.rectangle((700, 1000, 1300, 1200), outline='red', width=4, fill=(150, 10, 0))
draw.ellipse((700, 1000, 1300, 1200), width=4, fill=(0, 200, 0))
draw.arc((900, 1000, 1100, 1200), start=0, end=360, width=4, fill=(0, 0, 0))

font = ImageFont.truetype('DancingScript.ttf', size=48)
draw.text((1000, 1100), text="HELLO", font=font, anchor='mm')


img.show()

