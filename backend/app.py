from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os


load_dotenv()

app = Flask(__name__)
CORS(app)

from middleware.error_handler import register_error_handlers
register_error_handlers(app)

from routes.assist import assistant
from routes.pdf import pdf
from routes.upload import upload
app.register_blueprint(assistant, url_prefix="/api/assistant")
app.register_blueprint(pdf, url_prefix="/api/pdf")
app.register_blueprint(upload, url_prefix="/api/upload")

@app.route("/")
def home():
    return jsonify("kinderki")

@app.route("/health")
def health():
    return jsonify({
        "status": "healthy",
        "service": "backend"
    })

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    print(f"Działa na {port}")
    app.run(host="0.0.0.0", port=port, debug=True, use_reloader=False)

