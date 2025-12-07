from typing import Dict, List, Any, Optional
from services.llm_client import llm
from datetime import datetime

class ConversationManager:

    def __init__(self):
        self.conversations = {}  
    
    def start_conversation(self, session_id: str, form_type: str) -> Dict[str, Any]:
        print(f"ConversationManager.start_conversation called: session_id={session_id}, form_type={form_type}")
        
        self.conversations[session_id] = {
            "form_type": form_type,
            "responses": {},
            "step": 1,
            "completed": False,
            "created_at": datetime.now().isoformat()
        }

        first_question = self._get_initial_question(form_type)
        print(f"First question: {first_question}")
        
        result = {
            "session_id": session_id,
            "question": first_question,
            "step": 1,
            "total_steps": 9,
            "form_type": form_type
        }
        print(f"Returning result: {result}")
        return result
    
    def _validate_answer(self, conversation: Dict, field_name: str, answer: Any) -> Optional[str]:
        form_type = conversation["form_type"]
        step = conversation["step"]
        answer_str = str(answer) if answer is not None else ""
        print(f"Validating answer for step {step} ({field_name}): '{answer_str}' (type: {type(answer)})")
        
        if form_type == "accident_report":
            if step == 2:
                 val = answer_str.strip()
                 val = "".join(val.split())
                 print(f"Processed PESEL: '{val}', length: {len(val)}")
                 
                 if len(val) != 11:
                     return f"PESEL musi mieć 11 cyfr (otrzymano {len(val)}). Proszę spróbować ponownie:"
                 
                 if not val.isdigit():
                     return "PESEL może zawierać tylko cyfry. Proszę spróbować ponownie:"
        
        return None

    def process_answer(self, session_id: str, field_name: str, answer: str) -> Dict[str, Any]:
        print(f"ConversationManager.process_answer called: session_id={session_id}, field_name={field_name}, answer={answer}")
        
        if session_id not in self.conversations:
            print(f"ERROR: Session {session_id} not found")
            raise ValueError("Nieznana sesja")
        
        conversation = self.conversations[session_id]
        print(f"Current conversation state: {conversation}")
        validation_error = self._validate_answer(conversation, field_name, answer)
        if validation_error:
             print(f"Validation failed: {validation_error}")
             return {
                "session_id": session_id,
                "question": validation_error,
                "step": conversation["step"],
                "total_steps": 9,
                "form_type": conversation["form_type"],
                "analysis": {"valid": False, "error": validation_error}
             }

        conversation["responses"][field_name] = answer
        conversation["step"] += 1
        print(f"Updated step to: {conversation['step']}")
        

        analysis = {}
        if llm is not None:
            analysis = llm.analyze_answer(
                field_name=field_name,
                answer=answer,
                previous_responses=conversation["responses"],
                form_type=conversation["form_type"]
            )

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
            "total_steps": 9,
            "analysis": analysis,
            "form_type": conversation["form_type"]
        }
    
    def get_conversation(self, session_id: str) -> Optional[Dict[str, Any]]:
        if session_id not in self.conversations:
            return None
        
        return self.conversations[session_id]
    
    def end_conversation(self, session_id: str) -> Dict[str, Any]:
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
        questions = {
            "accident_report": "Proszę podać imię i nazwisko poszkodowanego:",
            "explanation": "Proszę opisać szczegółowo, jak doszło do wypadku:",
            "opinion": "Czy jesteś przedsiębiorcą prowadzącym pozarolniczą działalność gospodarczą?"
        }
        return questions.get(form_type, "Jak się masz?")
    
    def _get_next_question(self, conversation: Dict, analysis: Dict) -> Optional[str]:
        responses = conversation["responses"]
        step = conversation["step"]
        form_type = conversation["form_type"]

        if form_type == "accident_report":
            questions_map = {
                2: "Jaki jest Twój numer PESEL?",
                3: "Czy prowadzisz pozarolniczą działalność gospodarczą? (tak/nie)",
                4: "Proszę podać NIP Twojej działalności:",
                5: "Kiedy doszło do wypadku? (format: DD.MM.RRRR)",
                6: "Gdzie doszło do wypadku?",
                7: "Opisz dokładnie przebieg zdarzenia:",
                8: "Jakie były przyczyny wypadku?",
                9: "Czy zgadzasz się z powyższymi informacjami? (tak/nie)"
            }
            
            if step == 4 and responses.get("business_activity", "").lower() != "tak":
                return None  
            
            return questions_map.get(step, None)
        elif form_type == "explanation":
            questions_map = {
                2: "Jaki jest Twój numer PESEL?",
                3: "Kiedy doszło do wypadku? (format: DD.MM.RRRR)",
                4: "Gdzie doszło do wypadku?",
                5: "Opisz dokładnie przebieg zdarzenia:",
                6: "Jakie były przyczyny wypadku?",
                7: "Czy doznałeś/aś obrażeń? (tak/nie)",
                8: "Jakie dokumenty medyczne posiadasz?",
                9: "Czy zgadzasz się z powyższymi informacjami? (tak/nie)"
            }
            
            return questions_map.get(step, None)

        elif form_type == "opinion":
            questions_map = {
                2: "Proszę podać NIP Twojej działalności:",
                3: "W jakim sektorze prowadzisz działalność?",
                4: "Ile czasu prowadzisz tę działalność?",
                5: "Czy doszło do wypadku podczas pracy? (tak/nie)",
                6: "Opisz zdarzenie:",
                7: "Jakie były konsekwencje wypadku?",
                8: "Czy zgadzasz się z powyższymi informacjami? (tak/nie)"
            }
            
            return questions_map.get(step, None)
        
        return None 

print("========================================")
print("Creating global ConversationManager instance...")
conversation_manager = ConversationManager()
print(f"conversation_manager created: {conversation_manager}")
print(f"conversation_manager.conversations: {conversation_manager.conversations}")
print("========================================")
