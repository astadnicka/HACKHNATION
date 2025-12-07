from typing import Dict, List, Any, Optional
from services.llm_client import llm
from datetime import datetime


class ConversationManager:
    """Zarządza dialogiem warunkowym ze użytkownikiem"""
    
    def __init__(self):
        self.conversations = {}  # session_id -> conversation history
    
    def start_conversation(self, session_id: str, form_type: str) -> Dict[str, Any]:
        """
        Rozpoczyna nową konwersację
        form_type: "accident_report" | "explanation" | "opinion"
        """
        self.conversations[session_id] = {
            "form_type": form_type,
            "responses": {},
            "step": 0,
            "completed": False,
            "created_at": datetime.now().isoformat()
        }
        
        # Pierwsze pytanie na podstawie typu formularza
        first_question = self._get_initial_question(form_type)
        
        return {
            "session_id": session_id,
            "question": first_question,
            "step": 1,
            "total_steps": 8,
            "form_type": form_type
        }
    
    def process_answer(self, session_id: str, field_name: str, answer: str) -> Dict[str, Any]:
        """
        Przetwarza odpowiedź i zwraca następne pytanie
        """
        if session_id not in self.conversations:
            raise ValueError("Nieznana sesja")
        
        conversation = self.conversations[session_id]
        
        # Zapisz odpowiedź
        conversation["responses"][field_name] = answer
        conversation["step"] += 1
        
        # Przeanalizuj odpowiedź (jeśli LLM jest dostępny)
        analysis = {}
        if llm is not None:
            analysis = llm.analyze_answer(
                field_name=field_name,
                answer=answer,
                previous_responses=conversation["responses"],
                form_type=conversation["form_type"]
            )
        
        # Na podstawie analizy, zdecyduj następne pytanie
        next_question = self._get_next_question(
            conversation=conversation,
            analysis=analysis
        )
        
        if next_question is None:
            conversation["completed"] = True
            return {
                "session_id": session_id,
                "status": "completed",
                "responses": conversation["responses"],
                "analysis": analysis
            }
        
        return {
            "session_id": session_id,
            "question": next_question,
            "step": conversation["step"],
            "total_steps": 8,
            "analysis": analysis,
            "form_type": conversation["form_type"]
        }
    
    def get_conversation(self, session_id: str) -> Optional[Dict[str, Any]]:
        """Pobiera historię konwersacji"""
        if session_id not in self.conversations:
            return None
        
        return self.conversations[session_id]
    
    def end_conversation(self, session_id: str) -> Dict[str, Any]:
        """Kończy konwersację i zwraca podsumowanie"""
        if session_id not in self.conversations:
            raise ValueError("Nieznana sesja")
        
        conversation = self.conversations[session_id]
        conversation["completed"] = True
        conversation["ended_at"] = datetime.now().isoformat()
        
        return {
            "session_id": session_id,
            "status": "ended",
            "responses": conversation["responses"],
            "form_type": conversation["form_type"]
        }
    
    def _get_initial_question(self, form_type: str) -> str:
        """Pierwsze pytanie na podstawie typu"""
        questions = {
            "accident_report": "Proszę podać imię i nazwisko poszkodowanego:",
            "explanation": "Proszę opisać szczegółowo, jak doszło do wypadku:",
            "opinion": "Czy jesteś przedsiębiorcą prowadzącym pozarolniczą działalność gospodarczą?"
        }
        return questions.get(form_type, "Jak się masz?")
    
    def _get_next_question(self, conversation: Dict, analysis: Dict) -> Optional[str]:
        """
        Logika warunkowa - następne pytanie na podstawie analizy
        Zwraca None jeśli konwersacja się skończyła
        """
        responses = conversation["responses"]
        step = conversation["step"]
        form_type = conversation["form_type"]
        
        # Logika warunkowa dla accident_report
        if form_type == "accident_report":
            questions_map = {
                1: "Jaki jest Twój numer PESEL?",
                2: "Czy prowadzisz pozarolniczą działalność gospodarczą? (tak/nie)",
                3: "Proszę podać NIP Twojej działalności:",
                4: "Kiedy doszło do wypadku? (format: DD.MM.RRRR)",
                5: "Gdzie doszło do wypadku?",
                6: "Opisz dokładnie przebieg zdarzenia:",
                7: "Jakie były przyczyny wypadku?",
                8: "Czy zgadzasz się z powyższymi informacjami? (tak/nie)"
            }
            
            # Walidacja PESEL
            if step == 2 and len(responses.get("pesel", "").replace(" ", "")) < 11:
                step = 1  # Ponowne pytanie
                return "PESEL musi mieć 11 cyfr. Proszę spróbować ponownie:"
            
            # Logika warunkowa - czy prowadzi działalność
            if step == 3 and responses.get("business_activity", "").lower() != "tak":
                return None  # Koniec rozmowy
            
            return questions_map.get(step, None)
        
        # Logika dla explanation
        elif form_type == "explanation":
            questions_map = {
                1: "Jaki jest Twój numer PESEL?",
                2: "Kiedy doszło do wypadku? (format: DD.MM.RRRR)",
                3: "Gdzie doszło do wypadku?",
                4: "Opisz dokładnie przebieg zdarzenia:",
                5: "Jakie były przyczyny wypadku?",
                6: "Czy doznałeś/aś obrażeń? (tak/nie)",
                7: "Jakie dokumenty medyczne posiadasz?",
                8: "Czy zgadzasz się z powyższymi informacjami? (tak/nie)"
            }
            
            return questions_map.get(step, None)
        
        # Logika dla opinion
        elif form_type == "opinion":
            questions_map = {
                1: "Czy prowadzisz pozarolniczą działalność gospodarczą? (tak/nie)",
                2: "Proszę podać NIP Twojej działalności:",
                3: "W jakim sektorze prowadzisz działalność?",
                4: "Ile czasu prowadzisz tę działalność?",
                5: "Czy doszło do wypadku podczas pracy? (tak/nie)",
                6: "Opisz zdarzenie:",
                7: "Jakie były konsekwencje wypadku?",
                8: "Czy zgadzasz się z powyższymi informacjami? (tak/nie)"
            }
            
            return questions_map.get(step, None)
        
        return None  # Domyślnie koniec


# Globalna instancja
conversation_manager = ConversationManager()
