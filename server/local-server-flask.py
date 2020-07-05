import os
import sys
import subprocess
from flask import Flask, jsonify, request, redirect,url_for,render_template,send_from_directory, flash
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import base64


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
CORS(app)


@app.route("/")

def home():
    return jsonify([1,2,3])



@app.route("/img", methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        file = request.form.get('file')
        print(file)
        image_data = bytes(file, encoding="ascii")
        with open('test1.jpg', 'wb') as fh:
            fh.write(base64.decodebytes(image_data))
        xc = os.popen("conda activate tflite && set PYTHONPATH=C:/tflite/models;C:/tflite/models/research;C:/tflite/models/research/slim && cd C:/tflite/models/research/object_detection && python TFLite_image_detection.py").read()
        return xc
    return 'ok'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, threaded=True)
