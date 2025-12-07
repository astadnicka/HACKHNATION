from flask import jsonify, request
from werkzeug.exceptions import HTTPException
import traceback


class APIError(Exception):
    """Custom API Error class"""
    
    def __init__(self, message: str, status_code: int = 400, payload=None):
        super().__init__()
        self.message = message
        self.status_code = status_code
        self.payload = payload
    
    def to_dict(self):
        rv = dict(self.payload or ())
        rv['error'] = self.message
        rv['status'] = 'error'
        return rv


class ValidationError(APIError):
    """Validation error"""
    def __init__(self, message: str, payload=None):
        super().__init__(message, status_code=400, payload=payload)


class NotFoundError(APIError):
    """Resource not found error"""
    def __init__(self, message: str = "Resource not found", payload=None):
        super().__init__(message, status_code=404, payload=payload)


def register_error_handlers(app):
    """Register error handlers for the Flask app"""
    
    @app.errorhandler(APIError)
    def handle_api_error(error):
        response = jsonify(error.to_dict())
        response.status_code = error.status_code
        return response
    
    @app.errorhandler(HTTPException)
    def handle_http_exception(error):
        return jsonify({
            'error': error.description,
            'status': 'error'
        }), error.code
    
    @app.errorhandler(Exception)
    def handle_unexpected_error(error):
        print(f"Unexpected error: {str(error)}")
        print(traceback.format_exc())
        
        return jsonify({
            'error': 'An unexpected error occurred',
            'status': 'error'
        }), 500
    
    @app.before_request
    def log_request():
        print(f"{request.method} {request.path} - {request.remote_addr}")
    
    @app.after_request
    def log_response(response):
        print(f"{request.method} {request.path} - Status: {response.status_code}")
        return response
