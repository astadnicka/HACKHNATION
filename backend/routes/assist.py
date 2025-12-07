from flask import Blueprint, request, jsonify
from services.llm_client import llm
from services.llm_admin import llm_admin
from utils.validators import validate_batch_check_request
from middleware.error_handler import ValidationError

assistant = Blueprint("assistant", __name__)

@assistant.route("/batch-check", methods=["POST"])
def batch_check():
    """    
    Expected JSON format:
    {
        "forms": [
            {
                "id": "form-1",
                "fields": {
                    "field_name": "field_value",
                    ...
                }
            },
            ...
        ]
    }
    """
    if llm is None:
        return jsonify({
            "status": "error",
            "message": "LLM model is not initialized"
        }), 503

    data = request.get_json()
    
    if not data:
        return jsonify({
            "status": "error",
            "message": "Request body is empty"
        }), 400

    validate_batch_check_request(data)
    
    print(f"Processing batch check for {len(data['forms'])} forms")
    
    results = []
    
    for form in data["forms"]:
        form_id = form.get("id")
        fields = form.get("fields")
        
        try:
            llm_result = llm.analyze_form(fields)
            
            results.append({
                "id": form_id,
                "status": "success",
                "result": llm_result
            })
            
        except Exception as e:
            print(f"Error processing form {form_id}: {str(e)}")
            results.append({
                "id": form_id,
                "status": "error",
                "error": str(e)
            })
    
    return jsonify({
        "status": "success",
        "total": len(results),
        "results": results
    }), 200


@assistant.route("/health", methods=["GET"])
def health_check():
    """Health check endpoint for the assistant service"""
    return jsonify({
        "status": "healthy",
        "service": "assistant"
    }), 200


@assistant.route("/demo", methods=["GET"])
def demo_llm():
    """Quick manual check to see if the LLM client responds."""
    if llm is None:
        return jsonify({
            "status": "error",
            "message": "LLM model is not initialized"
        }), 503
    
    try:
        sample_fields = {
            "name": "Jan Kowalski",
            "age": "34",
            "description": "Rear-end collision, minor damage"
        }
        result = llm.analyze_form(sample_fields)
        return jsonify({"status": "success", "result": result}), 200
    except Exception as exc:  # surface errors to help debugging
        return jsonify({"status": "error", "error": str(exc)}), 500
    
@assistant.route("/analyze-acceptance", methods=["POST"])
def analyze_acceptance():
    """    
    Expected JSON format:
    {
        "form_id": "form-123",
        "fields": {
            "field_name": "field_value",
            ...
        },
        "classifier_prediction": {
            "label": "LABEL_1",
            "score": 0.95
        }
    }
    """
    if llm_admin is None:
        return jsonify({
            "status": "error",
            "message": "LLM admin model is not initialized"
        }), 503

    data = request.get_json()
    
    if not data:
        return jsonify({
            "status": "error",
            "message": "Request body is empty"
        }), 400
    
    form_id = data.get("form_id")
    fields = data.get("fields")
    classifier_prediction = data.get("classifier_prediction")
    
    if not fields:
        return jsonify({
            "status": "error",
            "message": "Missing 'fields' in request body"
        }), 400
    
    if not classifier_prediction:
        return jsonify({
            "status": "error",
            "message": "Missing 'classifier_prediction' in request body"
        }), 400
    
    try:
        print(f"Analyzing acceptance for form {form_id}")
        
        llm_result = llm_admin.analyze_classifier_prediction(
            fields=fields,
            classifier_prediction=classifier_prediction
        )
        
        return jsonify({
            "status": "success",
            "form_id": form_id,
            "result": llm_result
        }), 200
        
    except Exception as e:
        print(f"Error analyzing acceptance for form {form_id}: {str(e)}")
        return jsonify({
            "status": "error",
            "form_id": form_id,
            "error": str(e)
        }), 500