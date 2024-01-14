from flask import Flask, jsonify
from flask_cors import CORS
from inference_classifier import detect_sign

app = Flask(__name__)
PORT = 5000

def create_app(test_config=None ):
    # create and configure the app
    app = Flask(__name__)

    @app.route('/verify')
    def return_prediction(image):
        return detect_sign(image)
    
    return app

APP = create_app()

if __name__ == '__main__':
    APP.run(debug = True)