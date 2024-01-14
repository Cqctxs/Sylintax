from flask import Flask

from inference_classifier import detect_sign

app = Flask(__name__)

@app.route('/verify')
def return_prediction(image):
    return detect_sign(image)