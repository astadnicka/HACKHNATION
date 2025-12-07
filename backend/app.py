from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os


load_dotenv()

app = Flask(__name__)
CORS(app)

# Register error handlers
from middleware.error_handler import register_error_handlers
register_error_handlers(app)

# Register blueprints
from routes.assist import assistant
from routes.pdf import pdf
app.register_blueprint(assistant, url_prefix="/api/assistant")
app.register_blueprint(pdf, url_prefix="/api/pdf")

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

