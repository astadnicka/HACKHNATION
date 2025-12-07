import os
from transformers import pipeline

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.abspath(os.path.join(BASE_DIR, "../validation_model/training_model/model_zus"))

class Classifier:
    def __init__(self):
        self.pipeline = None
        try:
            if os.path.exists(MODEL_PATH):
                self.pipeline = pipeline("text-classification", model=MODEL_PATH, tokenizer=MODEL_PATH)
                print(f"Model loaded from {MODEL_PATH}")
            else:
                print(f"Model not found at {MODEL_PATH}")
        except Exception as e:
            print(f"Error loading model from {MODEL_PATH}: {e}")

    def classify_form(self, text):
        if not self.pipeline:
            return None
        
        try:
            result = self.pipeline(text, truncation=True, max_length=512)
            return result
        except Exception as e:
            print(f"Classification error: {e}")
            return None

classifier = Classifier()
