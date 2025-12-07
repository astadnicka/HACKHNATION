import os, uuid
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from services.scan_service import scan_service

upload = Blueprint("upload", __name__)
@upload.route("/analyze", methods=["POST"])
def analyze_scan():
    if 'file' not in request.files:
        return jsonify({"error": "Brak pliku"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "Pusta nazwa pliku"}), 400

    if file:
        filename = secure_filename(f"temp_{uuid.uuid4().hex}_{file.filename}")
        temp_path = os.path.join("/tmp", filename) 
        
        try:
            file.save(temp_path)
            process_result = scan_service.process_document(temp_path, classify=True)
            
            if "error" in process_result:
                 return jsonify(process_result), 500

            frontend_draft = scan_service.map_to_frontend_structure(process_result)
            
            return jsonify({
                "status": "success",
                "data": frontend_draft,
                "raw_fields": process_result["fields"] 
            })

        except Exception as e:
            print(f"Błąd analizy: {e}")
            return jsonify({"error": str(e)}), 500
        finally:
            if os.path.exists(temp_path):
                os.remove(temp_path)