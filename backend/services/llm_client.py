import os
from typing import Dict, Any, Optional

import requests
from dotenv import load_dotenv


load_dotenv()


class LLMClient:
    """Client for calling Hugging Face Inference API."""

    def __init__(
        self,
        api_token: Optional[str] = None,
        model_id: Optional[str] = None,
        timeout: int = 30,
    ):
        """
        Initialize the client.

        Args:
            api_token: HF token; falls back to HF_TOKEN env
            model_id: HF model id; falls back to HF_MODEL_ID env or gemma-2b
            timeout: request timeout in seconds
        """

        self.api_token = api_token or os.getenv("HF_TOKEN")
        self.model_id = model_id or os.getenv("HF_MODEL_ID", "google/gemma-2b")
        self.base_url = f"https://router.huggingface.co/hf-inference/{self.model_id}"
        self.timeout = timeout

        if not self.api_token:
            raise ValueError("HF_TOKEN is required to call the Hugging Face API.")

    def _send(self, prompt: str) -> Any:
        """Send a prompt to the Hugging Face Inference API."""

        headers = {
            "Authorization": f"Bearer {self.api_token}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        }

        payload = {
            "inputs": prompt,
            "parameters": {
                "max_new_tokens": 512,
                "temperature": 0.2,
                "return_full_text": False,
            },
        }

        response = requests.post(
            self.base_url, headers=headers, json=payload, timeout=self.timeout
        )

        if response.status_code == 503:
            # HF returns 503 when the model is loading; surface a clear error
            data = response.json()
            estimated = data.get("estimated_time")
            raise RuntimeError(
                f"Model loading, retry after {estimated} seconds" if estimated else "Model loading, retry shortly"
            )

        response.raise_for_status()
        return response.json()
    
    def analyze_form(self, fields: Dict[str, Any]) -> Dict[str, Any]:
        """
        Analyze form fields using the LLM.
        
        Args:
            fields: Dictionary containing form field data
            
        Returns:
            Dict containing the analysis results
        """
        # Construct a prompt for form analysis
        prompt = self._construct_form_prompt(fields)
        
        # Send to LLM
        response = self._send(prompt)
        
        # Parse and return results
        return self._parse_response(response)
    
    def _construct_form_prompt(self, fields: Dict[str, Any]) -> str:
        """
        Construct a prompt for form field analysis.
        
        Args:
            fields: Dictionary containing form field data
            
        Returns:
            Formatted prompt string
        """
        prompt = "Analyze the following form fields:\n\n"
        
        for field_name, field_value in fields.items():
            prompt += f"- {field_name}: {field_value}\n"
        
        prompt += "\nProvide validation results and suggestions."
        
        return prompt
    
    def _parse_response(self, response: Any) -> Dict[str, Any]:
        """
        Parse the LLM response into a structured format.
        
        Args:
            response: Raw response from the LLM
            
        Returns:
            Parsed and structured response
        """
        if isinstance(response, dict) and response.get("error"):
            raise RuntimeError(response.get("error"))

        generated_parts = []

        if isinstance(response, list):
            for item in response:
                if isinstance(item, dict):
                    if "generated_text" in item:
                        generated_parts.append(item["generated_text"])
                    elif "summary_text" in item:
                        generated_parts.append(item["summary_text"])
        elif isinstance(response, dict) and "generated_text" in response:
            generated_parts.append(response["generated_text"])

        analysis_text = "\n".join(generated_parts).strip() if generated_parts else str(response)

        return {
            "valid": True,
            "suggestions": [],
            "analysis": analysis_text,
            "raw_response": response,
        }


# Global instance to be used across the application
llm = LLMClient()

