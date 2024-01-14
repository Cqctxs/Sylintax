import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from inference_classifier import detect_sign
import base64
from io import BytesIO
from PIL import Image

PORT = 5000
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/verify', methods=['POST'])
def verify():
    if 'file' not in request.form.to_dict():
        print("No file provided")
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.form.to_dict()['file']
    decoded = base64.b64decode(file)
    
    img = Image.open(BytesIO(decoded))
    img = img.save("./image.jpg");
    symbol = detect_sign("./image.jpg")
    os.remove("./image.jpg")
    return symbol

if __name__ == '__main__':
    app.run(debug=True)