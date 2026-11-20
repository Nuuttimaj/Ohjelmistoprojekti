from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return send_from_directory('Menu', 'menu.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('Menu', filename)

if __name__ == '__main__':
    app.run(debug=True)