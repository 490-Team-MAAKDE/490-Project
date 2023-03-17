import cv2
import pandas as pd



img = cv2.imread("pinkPants.jpg")

# Reading csv file with pandas and giving names to each column
index = ["color", "color_name", "hex", "R", "G", "B"]
csv = pd.read_csv('colors.csv', names=index, header=None)

# function to calculate minimum distance from all colors and get the most matching color
def get_color_name(R, G, B):
    minimum = 10000
    for i in range(len(csv)):
        d = abs(R - int(csv.loc[i, "R"])) + abs(G - int(csv.loc[i, "G"])) + abs(B - int(csv.loc[i, "B"]))
        if d <= minimum:
            minimum = d
            cname = csv.loc[i, "color_name"]
    return cname

# get the center coordinates of the image
height, width, channels = img.shape

centerX = int(width / 2)
centerY = int(height / 2)

# get the color in a 200x200 area centered at the image center

crop_width = 100
crop_height = 100

x_start = centerX - int(crop_width / 2)
y_start = centerY - int(crop_height / 2)

img_crop = img[y_start:y_start + crop_height, x_start:x_start + crop_width]
avg_color_per_row = cv2.mean(img_crop)

b, g, r = avg_color_per_row[:3]

# get the color name
color = get_color_name(r, g, b)

print(color)
