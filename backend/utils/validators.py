from typing import Dict, Any, List
from middleware.error_handler import ValidationError


def validate_required_fields(data: Dict[str, Any], required_fields: List[str]) -> None:
    if not data:
        raise ValidationError("Request body cannot be empty")
    
    missing_fields = [field for field in required_fields if field not in data]
    
    if missing_fields:
        raise ValidationError(
            f"Missing required fields: {', '.join(missing_fields)}",
            payload={'missing_fields': missing_fields}
        )


def validate_field_type(data: Dict[str, Any], field_name: str, expected_type: type) -> None:
    if field_name in data and not isinstance(data[field_name], expected_type):
        raise ValidationError(
            f"Field '{field_name}' must be of type {expected_type.__name__}",
            payload={'field': field_name, 'expected_type': expected_type.__name__}
        )


def validate_batch_check_request(data: Dict[str, Any]) -> None:
    """
    Validate batch check request structure.
    
    Expected format:
    {
        "forms": [
            {"id": "...", "fields": {...}},
            ...
        ]
    }
    
    Args:
        data: Request data to validate
        
    Raises:
        ValidationError: If validation fails
    """
    # Check required fields
    validate_required_fields(data, ['forms'])
    validate_field_type(data, 'forms', list)
    
    if not data['forms']:
        raise ValidationError("Forms list cannot be empty")
    
    # Validate each form
    for idx, form in enumerate(data['forms']):
        if not isinstance(form, dict):
            raise ValidationError(f"Form at index {idx} must be a dictionary")
        
        if 'id' not in form:
            raise ValidationError(f"Form at index {idx} missing 'id' field")
        
        if 'fields' not in form:
            raise ValidationError(f"Form at index {idx} missing 'fields' field")
        
        if not isinstance(form['fields'], dict):
            raise ValidationError(f"Form at index {idx} 'fields' must be a dictionary")
        
        if not form['fields']:
            raise ValidationError(f"Form at index {idx} 'fields' cannot be empty")
