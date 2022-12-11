# gets Dataset class from Pytorch
from torch.utils.data import Dataset
# PIL (Python Image Library) that will be used to handle images
from PIL import Image 
# torch transform used for computer vision applications (i.e helps computer seen the image)
import torchvision.transforms as transforms 

import torch
import glob

# Class labels by ModaNet
''' 
    0 - background
    1 - bag (purse/etc) 
    2 - belt
    3 - boots
    4 - footwear (sandals/sneakers/etc)
    5 - outerwear (jacket/sweater/vest/coat/etc)
    6 - dress
    7 - sunglasses
    8 - pants (leggings/jeans)
    9 - top (blouse/t-shirt/shirt)
   10 - shorts
   11 - skirt
   12 - headwear
   13 - scarf/tie
'''

def get_class_names_md():
    ModaNet_class_names = ['background', 'bag','belt','boots','footwear','outer',
                            'dress','sunglasses','pants', 'top','shorts','skirts',
                            'headwear','scrtf-tie']
    return ModaNet_class_names

def get_class_names():
    class_names = ['background','accessories','bag','belt','blazer','blouse','bodysuit',
    'boots','bra','bracelet','cape','cardigan','clogs','coat','dress','earrings','flats',
    'glasses','gloves','hair','hat','heels','hoodie','intimate','jacket','jeans','jumper',
    'leggings','loafers','necklace','panties','pants','pumps','purse','ring','romper','sandals',
    'scarf','shirt','shoes','shirt','shoes','shorts','skin','skirt','sneakers','socks','stockings',
    'suit','sunglasses','sweater','sweatshirt','swimswear','t-shirt','tie','tights','top','vest',
    'vest','wallet','watch','wedges']
    return class_names  