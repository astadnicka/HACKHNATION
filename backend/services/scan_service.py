from extract_data.ocr_extractor import extract_text_from_pdf
from extract_data.ner_extractor import NERExtractor
from services.classifier import classifier

class ScanService:
    def __init__(self):
        self.ner_extractor = NERExtractor()

    def process_document(self, file_path, classify=False):
        raw_text = extract_text_from_pdf(file_path)
        if not raw_text:
            return {"error": "Nie udało się odczytać tekstu z pliku"}

        extracted_data = self.ner_extractor.extract_fields(raw_text)
        fields = extracted_data.get("fields", {})

        result = {
            "raw_text": raw_text,
            "fields": fields,
            "classification": None
        }

        if classify and classifier:
            description = fields.get("opis_zdarzenia") or fields.get("text")
            if not description:
                description = raw_text[:512]
            
            try:
                cls_result = classifier.classify_form(description)
                result["classification"] = cls_result
            except Exception as e:
                print(f"Błąd klasyfikacji: {e}")

        return result

    def map_to_frontend_structure(self, extraction_result):
        fields = extraction_result.get("fields", {})
        poszkodowany_full = fields.get("poszkodowany", "")
        imie = ""
        nazwisko = ""
        
        if poszkodowany_full:
            parts = poszkodowany_full.split(" ")
            if len(parts) >= 2:
                nazwisko = parts[-1]
                imie = " ".join(parts[:-1])
            else:
                nazwisko = poszkodowany_full

        data_wypadku = fields.get("data_wypadku", "")

        return {
            "poszkodowany": {
                "imie": imie,
                "nazwisko": nazwisko,
            },
            "wypadek": {
                "dataWypadku": data_wypadku,
                "opisOkolicznosci": fields.get("opis_zdarzenia", ""),
                "rodzajUrazow": fields.get("uraz", "")
            },
            "suggested_decision": extraction_result.get("classification")
        }

scan_service = ScanService()