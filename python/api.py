from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import cv2
from inference_classifier import detect_sign
import base64

PORT = 5000
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/verify', methods=['POST'])
def verify():
    print(request.files)
    if 'file' not in request.files:
        print("No file provided")
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    
    img_bytes = file.read()

    # Convert the image bytes to a NumPy array
    nparr = np.frombuffer(img_bytes, np.uint8)

    # Decode the NumPy array to an OpenCV image
    img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    print("image recieved!")

    return detect_sign(img)

if __name__ == '__main__':
    app.run(debug=True)