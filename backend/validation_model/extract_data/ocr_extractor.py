import os, pytesseract
from pdf2image import convert_from_path

DATASET_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../dataset/karty wypadku - zanonimizowane"))

def extract_text_from_pdf(pdf_path):
    try:
        images = convert_from_path(pdf_path)
        
        full_text = ""
        for i, image in enumerate(images):
            try:
                text = pytesseract.image_to_string(image, lang='pol')
            except pytesseract.TesseractError:
                print("Polish language pack not found, trying default (eng)...")
                text = pytesseract.image_to_string(image)
                
            full_text += f"--- Page {i+1} ---\n{text}\n"
            
        return full_text
    except Exception as e:
        print(f"Error: {e}")
        return None

def find_and_process_files(limit=2):
    processed_count = 0
    results = []

    if not os.path.exists(DATASET_PATH):
        print(f"Dataset path not found: {DATASET_PATH}")
        return results

    for root, dirs, files in os.walk(DATASET_PATH):
        for file in files:
            if file.lower().endswith(".pdf"):
                if "zawiadomienie o wypadku" in file.lower() or "wyjaśnienia poszkodowanego" in file.lower():
                    file_path = os.path.join(root, file)
                    text = extract_text_from_pdf(file_path)
                    
                    if text:
                        results.append({
                            "file": file,
                            "path": file_path,
                            "text": text
                        })
                        processed_count += 1
                    
                    if processed_count >= limit:
                        return results
    return results

if __name__ == "__main__":
    extracted_data = find_and_process_files()
    
    if not extracted_data:
        print("No files processed. Check dataset path or file names.")

    for data in extracted_data:
        print(f"File: {data['file']}")
        print(f"Path: {data['path']}")
        print(f"Extracted Text:\n{data['text'][:500]}...")  
        print("="*80)