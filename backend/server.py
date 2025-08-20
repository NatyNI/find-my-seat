from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # permite accesul din frontend

@app.route("/")
def hello():
    return jsonify({"message": "Salut din Flask!"})

if __name__ == "__main__":
    app.run(debug=True, port=8000)
