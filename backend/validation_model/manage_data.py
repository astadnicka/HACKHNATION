import argparse, os, json, random, sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from services.scan_service import scan_service

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATASET_PATH = os.path.join(BASE_DIR, "../dataset/karty wypadku - zanonimizowane")
OUTPUT_JSON = "training_data_roberta.json"
OUTPUT_CSV = "training_data_roberta.csv"

def get_files_from_dir(directory):
    pdf_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(".pdf"):
                pdf_files.append(os.path.join(root, file))
    return pdf_files

def run_test_mode(count=3):
    print(f"--- TRYB TESTOWY: Przetwarzanie {count} losowych plików ---")
    all_files = get_files_from_dir(DATASET_PATH)
    
    if not all_files:
        print("Błąd: Nie znaleziono plików PDF.")
        return

    selected_files = random.sample(all_files, min(count, len(all_files)))

    for file_path in selected_files:
        print(f"\nPrzetwarzanie: {os.path.basename(file_path)}")
        result = scan_service.process_document(file_path, classify=True)
        
        print(">> Wyekstrahowane pola:")
        print(json.dumps(result["fields"], indent=2, ensure_ascii=False))
        print(">> Wynik klasyfikacji (RoBERTa):")
        print(result["classification"])

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Zarządzanie przetwarzaniem dokumentów")
    parser.add_argument("mode", choices=["test", "dataset"], help="Tryb działania: 'test' (losowe pliki) lub 'dataset' (generowanie danych)")
    parser.add_argument("--count", type=int, default=3, help="Liczba plików w trybie testowym")

    args = parser.parse_args()

    if args.mode == "test":
        run_test_mode(args.count)
    elif args.mode == "dataset":
        from validation_model.create_training_dataset import create_dataset
        create_dataset()