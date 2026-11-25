import os
from flask import Flask, send_from_directory

app = Flask(__name__)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))


@app.route("/")
def home():
  return send_from_directory(os.path.join(BASE_DIR, "Menu"), "menu.html")

# Jos halutaan pitää HTML tiedostot eri kansioissa niin tämä koodinpätkä tehdään jokaiselle HTML tiedostolle
@app.route("/Menu/<path:filename>")
def serve_menu(filename):
  return send_from_directory(os.path.join(BASE_DIR, "Menu"), filename)

@app.route("/Prologue/<path:filename>")
def serve_prologue(filename):
  return send_from_directory(os.path.join(BASE_DIR, "Prologue"), filename)

@app.route("/Combat/<path:filename>")
def serve_Combat(filename):
  return send_from_directory(os.path.join(BASE_DIR, "Combat"), filename)

@app.route("/Generator/<path:filename>")
def serve_Generator(filename):
  return send_from_directory(os.path.join(BASE_DIR, "Generator"), filename)

@app.route("/Navigation/<path:filename>")
def serve_Navigation(filename):
  return send_from_directory(os.path.join(BASE_DIR, "Navigation"), filename)

@app.route("/Pohjat/<path:filename>")
def serve_Pohjat(filename):
  return send_from_directory(os.path.join(BASE_DIR, "Pohjat"), filename)

@app.route("/Winner/<path:filename>")
def serve_Winner(filename):
  return send_from_directory(os.path.join(BASE_DIR, "Winner"), filename)


if __name__ == "__main__":
  app.run(host='0.0.0.0', port=10000, debug=True)