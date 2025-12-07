from typing import Dict, Any
from llama_cpp import Llama
from huggingface_hub import hf_hub_download
from dotenv import load_dotenv

load_dotenv()

class LLMClient:
    def __init__(self):
        self.repo_id = "bartowski/gemma-2-2b-it-GGUF"
        self.filename = "gemma-2-2b-it-Q4_K_M.gguf"
        
        print(f"Initializing Creative Local LLM: {self.filename}...")

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

    def analyze_form(self, fields: Dict[str, Any]) -> Dict[str, Any]:
        fields_text = "\n".join([f"- {k}: {v}" for k, v in fields.items()])
        system_instruction = (
            "Jesteś inteligentnym asystentem ubezpieczeniowym. "
            "Analizujesz dane ze zgłoszenia wypadku. "
            "Bądź konkretny, szukaj niespójności i podsumuj zdarzenie po polsku. "
            "Nie wymądrzaj się tylko daj konkretny opis. \n\n"
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

    def analyze_answer(self, field_name: str, answer: str, previous_responses: Dict[str, str], form_type: str) -> Dict[str, Any]:
        """
        Analizuje odpowiedź użytkownika w kontekście poprzednich odpowiedzi
        Zwraca analizę pomagającą zdecydować następne pytanie
        """
        context = "\n".join([f"- {k}: {v}" for k, v in previous_responses.items()])
        
        system_instruction = (
            "Jesteś asystentem ubezpieczeniowym. Analizujesz odpowiedź użytkownika w formularzu dotyczącym wypadku. "
            "Czy odpowiedź jest kompletna? Czy potrzebujesz więcej szczegółów? "
            "Zidentyfikuj brakujące informacje po polsku. Bądź konkretny i pomocny. Odpowiadaj krótko.\n\n"
        )
        
        user_message = f"""{system_instruction}Poprzednie odpowiedzi:
{context if context else 'Brak'}

Typ formularza: {form_type}
Pytanie: {field_name}
Odpowiedź: {answer}

Czy ta odpowiedź wymaga uzupełnienia? Odpowiedź tak/nie i wyjaśnij dlaczego."""

        messages = [{"role": "user", "content": user_message}]
        
        try:
            output = self.llm_engine.create_chat_completion(
                messages=messages,
                max_tokens=256,
                temperature=0.3,
                stop=["<end_of_turn>", "<eos>"]
            )
            
            response_text = output['choices'][0]['message']['content']
            
            return {
                "valid": True,
                "analysis": response_text.strip(),
                "needs_clarification": "tak" in response_text.lower()
            }
            
        except Exception as e:
            print(f"LLM Inference Error: {e}")
            return {
                "valid": False,
                "error": str(e),
                "needs_clarification": False
            }

try:
    llm = LLMClient()
except Exception as e:
    print("Warning: LLM failed to initialize.")
    llm = None

