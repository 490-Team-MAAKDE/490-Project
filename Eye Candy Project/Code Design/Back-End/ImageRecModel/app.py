# Needed imports for image recognition
from flask import Flask, request, jsonify
from keras.models import load_model
from flask_cors import CORS
from werkzeug.utils import secure_filename

# Needed imports for color recognition
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.patches as patches
import matplotlib.image as mpimg
from matplotlib.offsetbox import OffsetImage, AnnotationBbox
import extcolors
from colormap import rgb2hex

# Needed imports for regular python use
import cv2
import os
import base64
import numpy as np
import tensorflow as tf
from PIL import Image


# Load the model outside the predict function
model = load_model('clothing_classifier_model_v2.h5')

# This will start our instance
app = Flask(__name__)

# This will enable cors that allows us to connect our flask to react
CORS(app)

# We are setting max size of file as 10mb
app.config['MAX_CONTENT_LENGTH'] = 10 * 1024 * 1024

# Our upload folder will be designated here and the allowed extensions as well
UPLOAD_FOLDER = 'static/images'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# This function checks if the file uploaded is valid
def allowed_files(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Function to convert color extraction output to a DataFrame
def color_to_df(input):
    colors_pre_list = str(input).replace('([(','').split(', (')[0:-1]
    df_rgb = [i.split('), ')[0] + ')' for i in colors_pre_list]
    df_percent = [i.split('), ')[1].replace(')','') for i in colors_pre_list]
    
    # Convert RGB to HEX code
    df_color_up = [rgb2hex(int(i.split(", ")[0].replace("(","")),
                        int(i.split(", ")[1]),
                        int(i.split(", ")[2].replace(")",""))) for i in df_rgb]
    
    df = pd.DataFrame(zip(df_color_up, df_percent), columns = ['c_code','occurence'])
    return df


# This function will pull the model and predict based on different classes
@app.route('/predict', methods=['POST'])
def predict():
    # This ensure file path is not empty
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # So once the file path is determined -- We will convert images
    if file and allowed_files(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        # They will convert to 28x28 grayscale images
        img = Image.open(file_path).convert('L')
        img = img.resize((28, 28), Image.ANTIALIAS)
        img = np.array(img)
        img = (255 - img) / 255.0
        img = np.expand_dims(img, axis=0)
        img = np.expand_dims(img, axis=-1)

        class_prediction = model.predict(img)
        predicted_label = int(np.argmax(class_prediction))

        # Extract colors
        colors_x = extcolors.extract_from_path(file_path, tolerance=12, limit=12)
        df_color = color_to_df(colors_x)

        # Get color codes and percentages
        color_codes = list(df_color['c_code'])
        color_percentages = [str(round(int(occurrence) * 100 / sum([int(occ) for occ in df_color['occurence']]), 1)) + '%' for occurrence in df_color['occurence']]

        color_dict = [{"color_code": code, "percentage": percentage} for code, percentage in zip(color_codes, color_percentages)]
        
        # These are the classes that will be used to determine the items uploaded
        if predicted_label == 0:
            product = "TShirt"
        elif predicted_label == 1:
            product = "Pants"
        elif predicted_label == 2:
            product = "T-Shirt Loose"
        elif predicted_label == 3:
            product = "Dress"
        elif predicted_label == 4:
            product = "Coat"
        elif predicted_label == 5:
            product = "Shoes"
        elif predicted_label == 6:
            product = "Shirt"
        elif predicted_label == 7:
            product = "Sneaker"
        elif predicted_label == 8:
            product = "Bag"
        else:
            product = "Ankle Boot"

        # This will allow us to upload images and show them properly on the front end page using base64 string formatting
        with open(file_path, "rb") as f:
            user_image = base64.b64encode(f.read()).decode("utf-8")

        os.remove(file_path)

        # This will use JSONIFY to generate our output and the image, the same that we will use with our color model
        return jsonify({
            'product': product,
            'user_image': f"data:image/jpeg;base64,{user_image}",
            'colors': color_dict,
        })

    # Outputs error messages if something is input, uploaded, or mismatched wrong
    return jsonify({'error': 'Invalid file extension'}), 400

# The way our flask app runs, runs with NPM RUN START:BOTH
if __name__ == '__main__':
    app.run(debug=True)