# https://www.learnopencv.com/mask-r-cnn-instance-segmentation-with-pytorch/

import numpy as np
from PIL import Image, ImageChops
import torchvision.transforms as T #consists of popular datasets, model architectures, and common image transformations for computer vision
import random
import cv2 #  allows you to perform image processing and computer vision tasks
import torch # open source machine learning (ML) framework based on the Python programming language and the Torch library








# saving segmented cloths
def save_masks_as_images(image_name, masks, path, file_name, labels):
    # opens image in an external viewer
    img = Image.open(image_name)
    for i in range(len(masks)):
        imageA = ImageChops.multiply(img, Image.fromarray(225*masks[i]).convert('RGB') )
        imageA.save(path+file_name + labels[i] + '.png')



def get_prediction(model, img, threshold, device, INSTANCE_CATEGORY_NAMES):
    #converts a PIL Image to a torch
    img = T.ToTensor()(img).to(device)
    img = img.unsqueeze(dim = 0)

    with torch.no_grad():
        pred = model(img)
    pred_score = list(pred[0]['scores'].cpu().numpy())
    pred_t = [pred_score.index(x) for x in pred_score if x > threshold][-1]
    masks = (pred[0]['masks']>0.5).squeeze().cpu().numpy()
    pred_class = [INSTANCE_CATEGORY_NAMES[i] for i in list(pred[0]['labels'].cpu().numpy())]
    pred_boxes = [[(i[0], i[1]), (i[2], i[3])] for i in list(pred[0]['boxes'].cpu().numpy())]
    masks = masks[:pred_t+1]
    pred_boxes = pred_boxes[:pred_t+1]
    pred_class = pred_class[:pred_t+1]
    return masks, pred_boxes, pred_class