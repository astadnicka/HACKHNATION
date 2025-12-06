import os, csv, sys
from extract_data.ocr_extractor import extract_text_from_pdf
from extract_data.ner_extractor import NERExtractor

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
DATASET_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../dataset/karty wypadku - zanonimizowane"))
OUTPUT_FILE = "training_data_roberta.csv"

def get_label_from_text(conclusion_text):
    if not conclusion_text:
        return None
        
    text_lower = conclusion_text.lower()
    
    negative_phrases = ["nie uznać", "brak podstaw", "nie jest wypadkiem", "nie spełnia wymogów", "odmówić uznania", "nie kwalifikuje się"]
    positive_phrases = ["proponuję uznać", "uznać zdarzenie", "jest wypadkiem przy pracy", "spełnia wymogi", "kwalifikuje się"]
    
    for phrase in negative_phrases:
        if phrase in text_lower: return 0
    for phrase in positive_phrases:
        if phrase in text_lower: return 1
            
    return None

def create_dataset():
    extractor = NERExtractor()
    training_data = []
    
    print(f"Rozpoczynam skanowanie folderu: {DATASET_PATH}")
    
    if not os.path.exists(DATASET_PATH):
        print("Błąd: Folder datasetu nie istnieje!")
        return

    for root, dirs, files in os.walk(DATASET_PATH):
        for file in files:
            if file.lower().endswith(".pdf") and "opinia" in file.lower():
                file_path = os.path.join(root, file)
                print(f"Przetwarzanie: {file}...")
                
                text = extract_text_from_pdf(file_path)
                
                if text:
                    data = extractor.extract_fields(text, document_type="opinia")
                    
                    opis_input = data["fields"]["opis"]["value"]
                    wniosek_text = data["fields"]["wniosek"]["value"]
                    
                    if opis_input and wniosek_text:
                        label = get_label_from_text(wniosek_text)
                        
                        if label is not None:
                            training_data.append({
                                "text": opis_input,
                                "label": label,
                                "meta_filename": file
                            })
                        else:
                            print(f" -> Pominięto {file}: nieznana etykieta (wniosek: {wniosek_text[:30]}...)")
                    else:
                        print(f" -> Pominięto {file}: brak opisu lub wniosku.")

    with open(OUTPUT_FILE, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(["text", "label", "meta_filename"])
        for item in training_data:
            writer.writerow([item["text"], item["label"], item["meta_filename"]])
        
    print(f"\nZakończono. Zapisano {len(training_data)} rekordów do {OUTPUT_FILE}")

if __name__ == "__main__":
    create_dataset()