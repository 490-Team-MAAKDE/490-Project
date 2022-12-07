import torchvision
from torchvision.models.detection.faster_rcnn import FastRCNNPredictor
from torchvision.models.detection.mask_rcnn import MaskRCNNPredictor



# uses pre-trained models on COCO and changes it for clothing segmentation
def get_prev_model_instance(num_of_classes, hidden_layer = 256, pretrained_model = True):
# loads in a pre-trained instance of a segementation model on COCO
    model = torchvision.models.detection.maskrcnn_resnet50_fpn(pretrained = pretrained_model)

    # gets # of input features for the classifier to see
    in_features = model.roi_heads.box_predictor.cls_score.in_features

    #replaces the pre-trained head with a new one
    model.roi_heads.box_predictor = FastRCNNPredictor(in_features, num_of_classes)

    # gets the number of input features for the mask classifer
    in_features_mask = model.roi_heads.mask_predictor.conv5_mask.in_channels

    # replaces the mask predictor is with a brand new one
    model.roi_heads.mask_predictor = MaskRCNNPredictor(in_features_mask, hidden_layer, num_of_classes)


    #returns the new model
    return model