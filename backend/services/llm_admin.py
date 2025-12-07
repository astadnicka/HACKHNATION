from typing import Dict, Any
from llama_cpp import Llama
from huggingface_hub import hf_hub_download
from dotenv import load_dotenv

load_dotenv()

class LLMClient_admin:
    def __init__(self):
        self.repo_id = "bartowski/gemma-2-2b-it-GGUF"
        self.filename = "gemma-2-2b-it-Q4_K_M.gguf"
        
        print(f"Initializing Creative Local LLM: {self.filename}")

        try:
            model_path = hf_hub_download(
                repo_id=self.repo_id, 
                filename=self.filename
            )
            
            self.llm_engine = Llama(
                model_path=model_path,
                n_ctx=4096,
                n_gpu_layers=0,
                verbose=False
            )
            print("Gemma 2 Loaded. Ready.")
            
        except Exception as e:
            print(f"Failed to load local model: {e}")
            raise e

    def analyze_classifier_prediction(self, fields: Dict[str, Any], classifier_prediction: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze classifier prediction with form context"""
        fields_text = "\n".join([f"- {k}: {v}" for k, v in fields.items()])
        
        # Parse classifier prediction
        pred_label = classifier_prediction.get("label", "UNKNOWN")
        pred_score = classifier_prediction.get("score", 0.0)
        
        # Map LABEL_0/LABEL_1 to binary decision
        binary_decision = 1 if "1" in pred_label else 0
        decision_text = "UZNAĆ" if binary_decision == 1 else "ODRZUCIĆ"
        
        system_instruction = (
            "Jesteś ekspertem ds. ubezpieczeń społecznych i analizujesz decyzję klasyfikatora AI. "
            "Twoim zadaniem jest przeanalizowanie czy decyzja klasyfikatora jest słuszna i dostarczenie uzasadnienia. "
            "Bądź konkretny i merytoryczny. Skup się na faktach z wniosku.\n\n"
        )
        
        user_message = (
            f"{system_instruction}"
            f"DANE Z WNIOSKU:\n{fields_text}\n\n"
            f"PREDYKCJA KLASYFIKATORA:\n"
            f"- Decyzja: {decision_text} (pewność: {pred_score:.2%})\n"
            f"- Label: {pred_label}\n\n"
            f"Przeanalizuj czy decyzja klasyfikatora '{decision_text}' jest uzasadniona na podstawie danych z wniosku. "
            f"Podaj konkretne argumenty za lub przeciw tej decyzji."
        )
        
        messages = [
            {
                "role": "user",
                "content": user_message
            }
        ]
        
        try:
            output = self.llm_engine.create_chat_completion(
                messages=messages,
                max_tokens=512,
                temperature=0.3,
                stop=["<end_of_turn>", "<eos>"]
            )
            
            response_text = output['choices'][0]['message']['content']
            
            return {
                "classifier_decision": decision_text,
                "classifier_confidence": pred_score,
                "analysis": response_text.strip(),
                "model_used": "Gemma-2-2B-IT-GGUF"
            }
            
        except Exception as e:
            print(f"LLM Inference Error: {e}")
            return {
                "error": str(e),
                "analysis": "Błąd analizy modelu lokalnego."
            }
    
    def analyze_form(self, fields: Dict[str, Any]) -> Dict[str, Any]:
        """Basic form validation without classifier prediction"""
        fields_text = "\n".join([f"- {k}: {v}" for k, v in fields.items()])
        system_instruction = (
            "Jesteś inteligentnym asystentem ubezpieczeniowym. "
            "Analizujesz dane z formularza wniosku. "
            "Bądź konkretny i wskaż potencjalne problemy lub braki. \n\n"
        )
        
        user_message = f"{system_instruction}Oto dane z formularza:\n{fields_text}\n\nDokonaj walidacji i podsumowania."

        messages = [
            {
                "role": "user",
                "content": user_message
            }
        ]
        
        try:
            output = self.llm_engine.create_chat_completion(
                messages=messages,
                max_tokens=512,
                temperature=0.3,
                stop=["<end_of_turn>", "<eos>"]
            )
            
            response_text = output['choices'][0]['message']['content']
            
            return {
                "valid": True,
                "suggestions": [],
                "analysis": response_text.strip(),
                "model_used": "Gemma-2-2B-IT-GGUF"
            }
            
        except Exception as e:
            print(f"LLM Inference Error: {e}")
            return {
                "valid": False,
                "error": str(e),
                "analysis": "Błąd analizy modelu lokalnego."
            }
try:
    llm_admin = LLMClient_admin()
except Exception as e:
    print("Warning: LLM admin failed to initialize.")
    llm_admin = None
