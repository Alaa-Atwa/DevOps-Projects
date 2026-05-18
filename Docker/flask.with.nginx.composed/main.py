from flask import Flask, jsonify
from waitress import serve
# waitress for serving the app

app = Flask(__name__)

# html route 
@app.route('/')
def home():
  return "<h1> Welcome, App is running !</h1>"

# json API route
@app.route('/api/status')
def api_status():
  return jsonify({
    "status": "success", 
    "message": "The server is ok!"
    })

if __name__ == "__main__":
  serve(app, host="0.0.0.0", port=4000)