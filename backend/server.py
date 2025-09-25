from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import re

app = Flask(__name__)
CORS(app)  

@app.route("/search", methods=["GET"])
def sendNames():
    
    with open("names.json") as f:
        data = json.load(f)
    
    return jsonify(data)

@app.route("/images", methods=["GET"])
def sendImage():
    nrTable = request.args.get('nrTable')
    print(nrTable)
    imageUrl = f'http://127.0.0.0:8000/static/images/{nrTable}.png'
    return jsonify({
        'imageUrl': imageUrl
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=False)
