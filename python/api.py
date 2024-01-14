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
    if 'file' not in request.form.to_dict():
        print("No file provided")
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.form.to_dict()['file']
    toDecode = file.tobytes()
    decoded = base64.b64decode(toDecode)

    with open("imageToSave.png", "wb") as fh:
        fh.write(base64.decodebytes(decoded))
    
    # file = base64.b64decode(file);
    
    # img = file.decode(errors="ignore")
    
    
    
    # return detect_sign(img)
    return 0;

if __name__ == '__main__':
    app.run(debug=True)