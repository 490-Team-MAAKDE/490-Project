import os
import base64
from flask import Flask, request, jsonify
from PIL import Image
import numpy as np
from keras.models import load_model
from flask_cors import CORS
from werkzeug.utils import secure_filename

# Load the model outside the predict function
model = load_model('clothing_classifier_model_v2.h5')

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

CORS(app, origins="*", allow_headers=["Content-Type"])

UPLOAD_FOLDER = 'static/images'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Create the UPLOAD_FOLDER if it doesn't exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def allowed_files(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and allowed_files(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        img = Image.open(file_path).convert('L')
        img = img.resize((28, 28), Image.ANTIALIAS)
        img = np.array(img)
        img = (255 - img) / 255.0
        img = np.expand_dims(img, axis=0)
        img = np.expand_dims(img, axis=-1)

        class_prediction = model.predict(img)
        predicted_label = int(np.argmax(class_prediction))

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

        with open(file_path, "rb") as f:
            user_image = base64.b64encode(f.read()).decode("utf-8")

        os.remove(file_path)

        return jsonify({
            'product': product,
            'user_image': f"data:image/jpeg;base64,{user_image}",
        })

    return jsonify({'error': 'Invalid file extension'}), 400

if __name__ == '__main__':
    app.run(debug=True)
