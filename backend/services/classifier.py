from transformers import pipeline
import os

class RobertaClassifier:
    def __init__(self):
        """Initialize RoBERTa classifier with the trained model"""
        self.model_path = os.path.join(
            os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
            "validation_model",
            "training_model",
            "model_zus"
        )
        
        print(f"Loading RoBERTa model from: {self.model_path}")
        
        try:
            self.classifier = pipeline(
                "text-classification",
                model=self.model_path,
                tokenizer=self.model_path
            )
            print("RoBERTa classifier loaded successfully.")
        except Exception as e:
            print(f"Failed to load RoBERTa classifier: {e}")
            raise e
    
    def classify_form(self, text: str) -> dict:
        """
        Classify form text and return prediction
        
        Args:
            text: Text to classify
            
        Returns:
            dict with 'label' and 'score' keys
            Example: {'label': 'LABEL_1', 'score': 0.9958978295326233}
        """
        try:
            result = self.classifier(text)[0]
            return {
                "label": result["label"],
                "score": result["score"]
            }
        except Exception as e:
            print(f"Classification error: {e}")
            raise e

# Initialize classifier instance
try:
    classifier = RobertaClassifier()
except Exception as e:
    print("Warning: RoBERTa classifier failed to initialize.")
    classifier = None
