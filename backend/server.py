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

@app.route("/images", methods=["GET"])
def sendImage():
    nrTable = request.args.get('nrTable')
    app.logger.info(f"Primit nrTable = {nrTable}")
    print(nrTable)
    imageUrl = f'static/images/{nrTable}.png'
    print(imageUrl)
    return send_file(imageUrl)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=False)
