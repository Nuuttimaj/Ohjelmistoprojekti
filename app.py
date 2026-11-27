import os
from flask import Flask, send_from_directory

app = Flask(__name__)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))


@app.route("/")
def home():
  return send_from_directory(os.path.join(BASE_DIR, "Menu"), "menu.html")

@app.route("/<folder>/<path:filename>")
def serve_menu(folder, filename):
  return send_from_directory(os.path.join(BASE_DIR, folder), filename)

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=10000, debug=True)