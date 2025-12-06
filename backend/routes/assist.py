from flask import Blueprint, request, jsonify
from services.llm_client import llm

assistant = Blueprint("assistant", __name__)

@assistant.route("/batch-check", methods=["POST"])
def batch_check():
    data = request.get_json()

    if not data or "forms" not in data:
        return jsonify({"error": "Missing 'forms' array"}), 400

    results = []

    for form in data["forms"]:
        form_id = form.get("id")
        fields = form.get("fields")

        llm_result = llm.analyze_form(fields)

        results.append({
            "id": form_id,
            "result": llm_result
        })

    return jsonify({"results": results})