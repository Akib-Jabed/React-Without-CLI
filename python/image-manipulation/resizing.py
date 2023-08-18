from PIL import Image

##################################
##        Croping Image         ##
##################################
with Image.open('images/buildings.jpg') as image:
    image.load()
cropping_size = (300, 150, 700, 1000)
cropped_img = image.crop(cropping_size)
cropped_img.show()
print(cropped_img.size)

##################################
##         Resize Image         ##
##################################
resized_img = cropped_img.resize((int(cropped_img.width * 1.4), int(cropped_img.height * 1.2)))
resized_img.show()
