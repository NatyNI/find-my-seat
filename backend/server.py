from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  

@app.route("/search", methods=["GET"])
def searchInputValue():
    search_term = request.args.get('q')
    with open("names.json") as f:
        data = json.load(f)
    return jsonify(data);

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=False)
