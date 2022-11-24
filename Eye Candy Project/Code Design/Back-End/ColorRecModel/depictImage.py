# https://www.learnopencv.com/mask-r-cnn-instance-segmentation-with-pytorch/

import numpy as np
from PIL import Image, ImageChops
import torchvision.transforms as T #consists of popular datasets, model architectures, and common image transformations for computer vision
import random
import cv2 #  allows you to perform image processing and computer vision tasks
import torch # open source machine learning (ML) framework based on the Python programming language and the Torch library

