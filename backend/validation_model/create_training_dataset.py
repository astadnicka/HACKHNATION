import os, json, csv, re, sys

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from extract_data.ocr_extractor import extract_text_from_pdf
from extract_data.ner_extractor import NERExtractor

DATASET_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../dataset/karty wypadku - zanonimizowane"))
OUTPUT_JSON = "training_data_roberta.json"
OUTPUT_CSV = "training_data_roberta.csv"

def get_id_from_filename(filename):
    match = re.search(r'(\d+)', filename)
    return match.group(1) if match else None

def get_label_from_opinion(conclusion_text):
    if not conclusion_text: return None
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
    file_map = {} 
    
    print(f"1. Indeksowanie plików w: {DATASET_PATH}")
    if not os.path.exists(DATASET_PATH):
        print("Błąd: Folder datasetu nie istnieje!")
        return

    for root, dirs, files in os.walk(DATASET_PATH):
        for file in files:
            if not file.lower().endswith(".pdf"): continue
            file_id = get_id_from_filename(file)
            if not file_id: continue
            
            if file_id not in file_map: file_map[file_id] = {}
            full_path = os.path.join(root, file)
            
            if "opinia" in file.lower():
                file_map[file_id]['opinia'] = full_path
                file_map[file_id]['opinia_name'] = file
            elif "zawiadomienie" in file.lower() or "ewyp" in file.lower():
                file_map[file_id]['zawiadomienie'] = full_path
                file_map[file_id]['zawiadomienie_name'] = file

    training_data = []
    print(f"Znaleziono {len(file_map)} grup plików.")

    for case_id, files in file_map.items():
        if 'opinia' not in files or 'zawiadomienie' not in files: continue
        
        print(f"Przetwarzanie ID {case_id}...")
        
        opinia_text = extract_text_from_pdf(files['opinia'])
        if not opinia_text: continue
        opinia_data = extractor.extract_fields(opinia_text, document_type="opinia")
        
        fields = opinia_data.get("fields", {})
        label = None
        
        if "czy_uznany" in fields:
            val = fields["czy_uznany"]
            if isinstance(val, bool):
                label = 1 if val else 0
            elif isinstance(val, str):
                if val.lower() == "true": label = 1
                elif val.lower() == "false": label = 0
        
        if label is None:
            wniosek_val = fields.get("wniosek")
            wniosek_text = None
            if isinstance(wniosek_val, dict) and "value" in wniosek_val:
                wniosek_text = wniosek_val["value"]
            elif isinstance(wniosek_val, str):
                wniosek_text = wniosek_val
            
            if wniosek_text:
                label = get_label_from_opinion(wniosek_text)
        
        if label is None:
            print(f"   ! Nie ustalono labela (wniosek niejasny)")
            continue

        zawiad_text = extract_text_from_pdf(files['zawiadomienie'])
        if not zawiad_text: continue
        zawiad_data = extractor.extract_fields(zawiad_text, document_type="zawiadomienie")
        
        z_fields = zawiad_data.get("fields", {})
        opis_input = None
        
        if "opis_zdarzenia" in z_fields:
            opis_input = z_fields["opis_zdarzenia"]
        
        if not opis_input:
            val = z_fields.get("opis")
            if isinstance(val, dict) and "value" in val:
                opis_input = val["value"]
            elif isinstance(val, str):
                opis_input = val

        if not opis_input or len(opis_input) < 20:
            print(f"   ! Opis za krótki lub pusty (śmieci OCR)")
            continue

        training_data.append({
            "text": opis_input,       
            "label": label,          
            "meta_id": case_id
        })
        print(f"   + Dodano: Label={label}")

    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(training_data, f, indent=2, ensure_ascii=False)
        
    with open(OUTPUT_CSV, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(["text", "label", "meta_id"])
        for item in training_data:
            writer.writerow([item["text"], item["label"], item["meta_id"]])
        
    print(f"\nGotowe. Zapisano {len(training_data)} rekordów.")

if __name__ == "__main__":
    create_dataset()