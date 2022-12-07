import torchvision
from torchvision.models.detection.faster_rcnn import FastRCNNPredictor
from torchvision.models.detection.mask_rcnn import MaskRCNNPredictor



# uses pre-trained models on COCO and changes it for clothing segmentation

# loads in a pre-trained instance of a segemtationton model