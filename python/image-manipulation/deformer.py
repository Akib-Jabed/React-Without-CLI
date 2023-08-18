from PIL import Image, ImageOps

class Deformer:
    def getmesh(self, img):
        w, h = img.size
        # left, bottom, right, top 
        """
        source_shape = (0, 0, 0, h, w, h, w, 0)
        target_shape = (0, 0, 300, 300) 
        return [(target_shape, source_shape)]
        """
        
        # Mirroring
        left = ((0, 0, w // 2, h), (0, 0, 0, h, w // 2, h, w // 2, 0))
        right = ((w // 2, 0, w, h), (w // 2, 0, w // 2, h, 0, h, 0, 0))
        return [left, right]
        
        
img = Image.open('images/buildings.jpg')
deform = ImageOps.deform(img, Deformer())
deform.show()