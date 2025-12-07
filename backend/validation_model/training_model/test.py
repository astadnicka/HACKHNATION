from transformers import pipeline
import os

# Ścieżka do folderu z modelem (zakładamy, że skrypt jest w głównym folderze projektu)
MODEL_PATH = "./model_zus"

print(f"Ładowanie modelu z: {os.path.abspath(MODEL_PATH)}...")

try:
    # Ładowanie pipeline'u klasyfikacji
    clf = pipeline("text-classification", model=MODEL_PATH, tokenizer=MODEL_PATH)
    
    # 3 przykładowe teksty do sprawdzenia
    examples = [
        "W dniu 12.03.2025 przedsiębiorca podczas wykonywania usługi montażu klimatyzacji u klienta wszedł na drabinę, która ześlizgnęła się z mokrej posadzki. W wyniku upadku doznał złamania kości podudzia i został przewieziony do szpitala.",
        "Dnia 21.04.2025 przedsiębiorca w czasie prywatnego spaceru z rodziną poślizgnął się na mokrej nawierzchni deptaka i doznał stłuczenia kolana. Zdarzenie nie było związane z wykonywaną działalnością.",
        "W dniu 05.05.2025 podczas wykonywania transportu towaru do kontrahenta przedsiębiorca został uderzony przez zsuwającą się paletę z samochodu dostawczego, w wyniku czego doznał urazu barku wymagającego hospitalizacji"
        
    ]

    print("\n=== WYNIKI TESTU ===")
    for text in examples:
        result = clf(text)
        label = result[0]['label']
        score = result[0]['score']
        
        print(f"Tekst:  {text}")
        print(f"Wynik:  {label} (pewność: {score:.2%})")
        print("-" * 50)

except Exception as e:
    print(f"\nBŁĄD: Nie udało się załadować modelu.\nSzczegóły: {e}")