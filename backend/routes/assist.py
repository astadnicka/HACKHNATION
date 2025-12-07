from flask import Blueprint, request, jsonify
from services.llm_client import llm
from services.llm_admin import llm_admin
from services.classifier import classifier
from services.conversation_manager import conversation_manager
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


@assistant.route("/classify-and-analyze", methods=["POST"])
def classify_and_analyze():
    """
    Classify form using RoBERTa model and analyze with LLM admin.
    
    Expected JSON format:
    {
        "form_id": "form-123",
        "text": "W dniu 12.03.2025 przedsiębiorca...",
        "fields": {
            "field_name": "field_value",
            ...
        }
    }
    
    Returns:
    {
        "status": "success",
        "form_id": "form-123",
        "classification": {
            "label": "LABEL_1",
            "score": 0.9958978295326233
        },
        "opinion": {
            "classifier_decision": "UZNAĆ",
            "classifier_confidence": 0.9958978295326233,
            "analysis": "...",
            "model_used": "Gemma-2-2B-IT-GGUF"
        }
    }
    """
    if classifier is None:
        return jsonify({
            "status": "error",
            "message": "RoBERTa classifier is not initialized"
        }), 503
    
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
    text = data.get("text")
    fields = data.get("fields")
    
    if not text:
        return jsonify({
            "status": "error",
            "message": "Missing 'text' in request body"
        }), 400
    
    if not fields:
        return jsonify({
            "status": "error",
            "message": "Missing 'fields' in request body"
        }), 400
    
    try:
        print(f"Classifying and analyzing form {form_id}")
        
        # Step 1: Classify with RoBERTa
        classification_result = classifier.classify_form(text)
        print(f"Classification result: {classification_result}")
        
        # Step 2: Analyze with LLM admin
        llm_result = llm_admin.analyze_classifier_prediction(
            fields=fields,
            classifier_prediction=classification_result
        )
        
        return jsonify({
            "status": "success",
            "form_id": form_id,
            "classification": classification_result,
            "opinion": llm_result
        }), 200
        
    except Exception as e:
        print(f"Error processing form {form_id}: {str(e)}")
        return jsonify({
            "status": "error",
            "form_id": form_id,
            "error": str(e)
        }), 500


@assistant.route("/start-conversation", methods=["POST"])
def start_conversation():
    """
    Rozpoczyna nową sesję warunkowego dialogu
    
    Expected JSON:
    {
        "session_id": "user-123",
        "form_type": "accident_report" | "explanation" | "opinion"
    }
    """
    data = request.get_json()
    
    if not data or not data.get("session_id") or not data.get("form_type"):
        return jsonify({
            "status": "error",
            "message": "Missing session_id or form_type"
        }), 400
    
    try:
        result = conversation_manager.start_conversation(
            session_id=data["session_id"],
            form_type=data["form_type"]
        )
        
        return jsonify({
            "status": "success",
            "data": result
        }), 200
        
    except Exception as e:
        print(f"Error starting conversation: {str(e)}")
        return jsonify({
            "status": "error",
            "error": str(e)
        }), 500


@assistant.route("/answer", methods=["POST"])
def process_answer():
    """
    Przetwarza odpowiedź użytkownika i zwraca następne pytanie
    
    Expected JSON:
    {
        "session_id": "user-123",
        "field_name": "full_name",
        "answer": "Jan Kowalski"
    }
    """
    data = request.get_json()
    
    if not data or not data.get("session_id") or not data.get("field_name") or not data.get("answer"):
        return jsonify({
            "status": "error",
            "message": "Missing session_id, field_name, or answer"
        }), 400
    
    try:
        result = conversation_manager.process_answer(
            session_id=data["session_id"],
            field_name=data["field_name"],
            answer=data["answer"]
        )
        
        return jsonify({
            "status": "success",
            "data": result
        }), 200
        
    except Exception as e:
        print(f"Error processing answer: {str(e)}")
        return jsonify({
            "status": "error",
            "error": str(e)
        }), 500


@assistant.route("/get-conversation", methods=["GET"])
def get_conversation():
    """Pobiera historię konwersacji"""
    session_id = request.args.get("session_id")
    
    if not session_id:
        return jsonify({
            "status": "error",
            "message": "Missing session_id"
        }), 400
    
    conversation = conversation_manager.get_conversation(session_id)
    
    if not conversation:
        return jsonify({
            "status": "error",
            "message": "Conversation not found"
        }), 404
    
    return jsonify({
        "status": "success",
        "data": conversation
    }), 200


@assistant.route("/end-conversation", methods=["POST"])
def end_conversation():
    """Kończy konwersację"""
    data = request.get_json()
    
    if not data or not data.get("session_id"):
        return jsonify({
            "status": "error",
            "message": "Missing session_id"
        }), 400
    
    try:
        result = conversation_manager.end_conversation(session_id=data["session_id"])
        
        return jsonify({
            "status": "success",
            "data": result
        }), 200
        
    except Exception as e:
        print(f"Error ending conversation: {str(e)}")
        return jsonify({
            "status": "error",
            "error": str(e)
        }), 500
