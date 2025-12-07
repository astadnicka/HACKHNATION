import os, pytesseract, cv2, json
import numpy as np
from pdf2image import convert_from_path
from PIL import Image
from extract_data.ner_extractor import NERExtractor

DATASET_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../dataset/karty wypadku - zanonimizowane"))

def preprocess_image(image):
    img_cv = np.array(image)

    if len(img_cv.shape) == 3:
        img_cv = cv2.cvtColor(img_cv, cv2.COLOR_RGB2BGR)

    gray = cv2.cvtColor(img_cv, cv2.COLOR_BGR2GRAY)
    _, binary = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    return Image.fromarray(binary)

def extract_text_from_pdf(pdf_path):
    try:
        images = convert_from_path(pdf_path)
        full_text = ""
        
        for i, image in enumerate(images):
            processed_image = preprocess_image(image)
            try:
                text = pytesseract.image_to_string(processed_image, lang='pol')
            except pytesseract.TesseractError:
                text = pytesseract.image_to_string(processed_image)
                
            full_text += f"--- Page {i+1} ---\n{text}\n"
            
        return full_text
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")
        return None

def find_and_process_files(limit=100):
    processed_count = 0
    results = []
    ner_extractor = NERExtractor()

    if not os.path.exists(DATASET_PATH):
        print(f"Dataset path not found: {DATASET_PATH}")
        return results

    for root, dirs, files in os.walk(DATASET_PATH):
        for file in files:
            if file.lower().endswith(".pdf"):
                file_path = os.path.join(root, file)
                text = extract_text_from_pdf(file_path)
                
                if text:
                    structured_data = ner_extractor.extract_fields(text)
                    structured_data["metadata"]["filename"] = file
                    
                    results.append(structured_data)
                    processed_count += 1
                
                if processed_count >= limit:
                    return results
    return results

if __name__ == "__main__":
    extracted_data = find_and_process_files(limit=5)
    print(json.dumps(extracted_data, indent=2, ensure_ascii=False))