# Needed imports based on pip installs
from flask import Flask, request, jsonify
from PIL import Image
import tensorflow as tf
from keras.models import load_model
import numpy as np
from flask_cors import CORS
import os
import base64
from werkzeug.utils import secure_filename

# Commiting a test piece of code
print('Hello World')
import logging
logging.basicConfig(level=logging.DEBUG)

# Load the model outside the predict function
model = load_model('clothing_classifier_model_v2.h5')

# This will start our instance
app = Flask(__name__)

# This will enable cors that allows us to connect our flask to react
CORS(app, resources={r"/predict": {"origins": "http://localhost:3000"}})

# We are setting max size of file as 10mb
app.config['MAX_CONTENT_LENGTH'] = 10 * 1024 * 1024

# Our upload folder will be designated here and the allowed extensions as well
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'static', 'Test Images')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# This function checks if the file uploaded is valid
def allowed_files(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# This function will pull the model and predict based on different classes
@app.route('/predict', methods=['POST'])
def predict():
    try:
        print("Entered predict function")
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

            print(f"Attempting to open file: {file_path}")
            # They will convert to 28x28 grayscale images
            img = Image.open(file_path).convert('L')
            img = img.resize((28, 28), Image.ANTIALIAS)
            img = np.array(img)
            img = (255 - img) / 255.0
            img = np.expand_dims(img, axis=0)
            img = np.expand_dims(img, axis=-1)

            class_prediction = model.predict(img)
            predicted_label = int(np.argmax(class_prediction))

            # These are the classes that will be used to determine the items uploaded
            if predicted_label == 0:
                product = "TShirt/top"
            elif predicted_label == 1:
                product = "Trouser"
            elif predicted_label == 2:
                product = "Pullover"
            elif predicted_label == 3:
                product = "Dress"
            elif predicted_label == 4:
                product = "Coat"
            elif predicted_label == 5:
                product = "Sandal"
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
            })

        # Outputs error messages if something is input, uploaded, or mismatched wrong
        return jsonify({'error': 'Invalid file extension'}), 400
    except Exception as e:
        # Log the error and return a 500 response
        app.logger.error(str(e))
        return jsonify({'error': 'Internal Server Error'}), 500
    
# The way our flask app runs, runs with NPM RUN START:BOTH
if __name__ == '__main__':
    app.run(debug=True)