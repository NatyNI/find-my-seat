from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import re
import logging

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
    imageUrl = f'https://findmyseat.website/static/images/{nrTable}.png'
    logging.info("✅ Am intrat în funcția sendImage")
    return jsonify({
        'imageUrl': imageUrl,
        'message': '✅ Funcția sendImage a fost apelată'
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=False)
