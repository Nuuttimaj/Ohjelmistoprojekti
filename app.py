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

@app.route("/Gratos/<path:filename>")
def serve_Gratos(filename):
  return send_from_directory(os.path.join(BASE_DIR, "Gratos"), filename)


if __name__ == "__main__":
  app.run(debug=True)