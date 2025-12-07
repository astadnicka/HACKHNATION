from flask import Blueprint, request, jsonify
from services.llm_client import llm
from utils.validators import validate_batch_check_request
from middleware.error_handler import ValidationError

assistant = Blueprint("assistant", __name__)

@assistant.route("/batch-check", methods=["POST"])
def batch_check():
    """
    Batch check multiple forms using LLM analysis.
    
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
    # Get and validate request data
    data = request.get_json()
    
    # Validate request structure
    validate_batch_check_request(data)
    
    print(f"Processing batch check for {len(data['forms'])} forms")
    
    results = []
    
    for form in data["forms"]:
        form_id = form.get("id")
        fields = form.get("fields")
        
        try:
            # Analyze form using LLM
            llm_result = llm.analyze_form(fields)
            
            results.append({
                "id": form_id,
                "status": "success",
                "result": llm_result
            })
            
        except Exception as e:
            # Log error but continue processing other forms
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
    """Quick manual check to see if the Hugging Face client responds."""
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