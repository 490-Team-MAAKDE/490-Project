from flask import Flask, request, render_template, jsonify, url_for
from PIL import Image
import tensorflow as tf
from keras.models import load_model
import numpy as np
import os

# Load the model outside the predict function
model = load_model('clothing_classifier_model_v2.h5')

app = Flask(__name__)

# We are setting max size of file as 10mb
app.config['MAX_CONTENT_LENGTH'] = 10 * 1024 * 1024

# This will allow files with extensions such as png, jpg, and jpeg
ALLOWED_EXTENSIONS = ['png', 'jpg', 'jpeg']
def allowed_files(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[-1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/predict", methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        try:
            if file and allowed_files(file.filename):
                filename = file.filename
                file_path = os.path.join('static/images', filename)
                file.save(file_path)
                img = Image.open(file_path).convert('L')
                img = img.resize((28, 28), Image.ANTIALIAS)
                img = np.array(img)
                img = (255 - img) / 255.0
                img = np.expand_dims(img, axis=0)
                img = np.expand_dims(img, axis=-1)

                
                class_prediction = model.predict(img)
                predicted_label = int(np.argmax(class_prediction))
                    
                # We will map apparel category with numerical classes
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

                response = {
                    "product": product,
                    "user_image": file_path
                }
                return jsonify(response)

            else:
                return f"File type not allowed: {file.filename}"

        except Exception as e:
            print("Error:", str(e))
            return jsonify({"error": str(e)}), 400




if __name__ == '__main__':
    app.run(debug=True)
