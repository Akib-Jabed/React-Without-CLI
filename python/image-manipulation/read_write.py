from PIL import Image

##################################
##         Reading Image        ##
##################################
with Image.open('images/sample.jpg') as image:
    image.load()
print(image.format, image.size, image.mode)
image.show()

##################################
##       Create Thumbnail       ##
##################################
size = (200, 200)
image.thumbnail(size)
image.save('images/sample-thumb.jpg') 