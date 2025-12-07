import os
import numpy as np
import cv2
from pdf2image import convert_from_path
from paddleocr import PaddleOCR
from validation_model.extract_data.ner_extractor import NERExtractor

ocr_engine = PaddleOCR(use_angle_cls=False, lang='pl')

DATASET_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../dataset/karty wypadku - zanonimizowane"))

def extract_text_from_pdf(pdf_path):
    try:
        images = convert_from_path(pdf_path)
        full_text = ""
        
        print(f"Przetwarzanie pliku: {os.path.basename(pdf_path)}...")

        for i, image in enumerate(images):
            img_np = np.array(image)
            result = ocr_engine.ocr(img_np)
            
            page_text = ""
            if result and result[0]:
                ocr_data = result[0]
                if hasattr(ocr_data, 'keys') and 'rec_texts' in ocr_data:
                    boxes = ocr_data['rec_polys']
                    texts = ocr_data['rec_texts']
                    lines = sorted(zip(boxes, texts), key=lambda x: x[0][0][1])
                    for _, text in lines:
                        page_text += text + " "
                elif isinstance(ocr_data, list):
                    sorted_res = sorted(ocr_data, key=lambda x: x[0][0][1])
                    for line in sorted_res:
                        text_content = line[1][0]
                        page_text += text_content + " "
            
            full_text += f"--- Page {i+1} ---\n{page_text}\n"
            
        return full_text
    except Exception as e:
        print(f"Błąd OCR dla {pdf_path}: {e}")
        import traceback
        traceback.print_exc()
        return None

def find_and_process_files(limit=5):
    from extract_data.ner_extractor import NERExtractor

    ner_extractor = NERExtractor()    
    results = []
    processed_count = 0

    if not os.path.exists(DATASET_PATH):
        print(f"Dataset path not found: {DATASET_PATH}")
        return results

    for root, dirs, files in os.walk(DATASET_PATH):
        for file in files:
            if file.lower().endswith(".pdf"):
                file_path = os.path.join(root, file)
                raw_text = extract_text_from_pdf(file_path)
                
                if raw_text:
                    structured_data = ner_extractor.extract_fields_with_llm(raw_text)
                    structured_data["metadata"] = {"filename": file}
                    
                    results.append(structured_data)
                    processed_count += 1
                    print(f"Zakończono plik {processed_count}/{limit}")
                
                if processed_count >= limit:
                    return results
    return results

if __name__ == "__main__":
    data = find_and_process_files(limit=1)
    import json
    print(json.dumps(data, indent=2, ensure_ascii=False))