import json
import re
import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))
from services.llm_client import LLMClient

class NERExtractor:
    def __init__(self):
        try:
            self.llm_client = LLMClient()
        except Exception:
            print("Nie udało się połączyć z LLM. Upewnij się, że model jest pobrany.")
            self.llm_client = None

    def clean_json_string(self, json_string):
        json_string = json_string.replace("```json", "").replace("```", "").strip()
        return json_string

    def extract_fields_with_llm(self, raw_text):
        if not self.llm_client:
            return {"error": "LLM not initialized"}

        truncated_text = raw_text[:3500]

        prompt = (
            "Jesteś precyzyjnym systemem ekstrakcji danych z dokumentów ZUS. "
            "Twoim zadaniem jest przeanalizować poniższy tekst z OCR i wyciągnąć kluczowe informacje do formatu JSON.\n"
            "Ignoruj błędy literowe wynikające ze skanowania.\n\n"
            "Wymagane pola JSON:\n"
            "- data_wypadku (format YYYY-MM-DD lub null)\n"
            "- poszkodowany (Imię i Nazwisko lub null)\n"
            "- uraz (krótki opis obrażeń ciała lub null)\n"
            "- opis_zdarzenia (zwięzłe podsumowanie co się stało, max 2 zdania)\n"
            "- uzasadnienie (wygeneruj formalne uzasadnienie prawne/faktyczne dla opinii powypadkowej na podstawie opisu zdarzenia, styl urzędowy)\n"
            "- czy_uznany (true/false - czy z treści wynika, że wypadek został uznany, jeśli to opinia)\n\n"
            "TEKST DOKUMENTU:\n"
            f"{truncated_text}\n\n"
            "Odpowiedz TYLKO poprawnym kodem JSON:"
        )

        messages = [
            {"role": "user", "content": prompt}
        ]

        try:
            output = self.llm_client.llm_engine.create_chat_completion(
                messages=messages,
                max_tokens=500,
                temperature=0.1, 
                stop=["<end_of_turn>", "<eos>"]
            )
            
            response_content = output['choices'][0]['message']['content']
            cleaned_response = self.clean_json_string(response_content)
            parsed_data = json.loads(cleaned_response)
            
            return {
                "metadata": {"method": "llm_gemma_2b"},
                "fields": parsed_data
            }

        except json.JSONDecodeError:
            print("Błąd: Model nie zwrócił poprawnego JSONa.")
            print("Surowa odpowiedź:", response_content)
            return {
                "metadata": {"method": "llm_gemma_2b_failed"},
                "fields": {
                    "opis_zdarzenia": "Nie udało się sparsować odpowiedzi modelu.",
                    "raw_llm_output": response_content
                }
            }
        except Exception as e:
            print(f"Błąd inferencji LLM: {e}")
            return {"fields": {}, "error": str(e)}

    def extract_fields(self, text, document_type="unknown"):
        return self.extract_fields_with_llm(text)