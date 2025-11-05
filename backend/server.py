from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
import json


app = Flask(__name__)
CORS(app)  

@app.route("/search", methods=["GET"])
def sendNames():
    
    with open("names.json") as f:
        data = json.load(f)
    
    return jsonify(data)

@app.route("/get-image", methods=["GET"])
def get_image():

    image_name = request.args.get("name", "default")
    file_path = f"static/images/{image_name}.png"
    print(f"imaginea: {file_path}")

    return send_file(file_path, mimetype='image/png')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=False)
