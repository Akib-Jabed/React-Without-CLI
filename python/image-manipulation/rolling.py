from PIL import Image, ImageColor

##################################
##        Fliping Image         ##
##################################
with Image.open('images/sample.jpg') as image:
    image.load()

# flipped_img = image.transpose(Image.FLIP_TOP_BOTTOM)
# flipped_img = image.transpose(Image.FLIP_LEFT_RIGHT) 
# flipped_img = image.transpose(Image.ROTATE_90)
# flipped_img = image.transpose(Image.TRANSPOSE)
flipped_img = image.transpose(Image.TRANSVERSE)
flipped_img.show()

##################################
##        Rotating Image        ##
##################################
rotated_img = image.rotate(45, expand=True, fillcolor='red')
# rotated_img = image.rotate(45, expand=True, fillcolor=ImageColor.getcolor('red', 'RGB'))
rotated_img.show()