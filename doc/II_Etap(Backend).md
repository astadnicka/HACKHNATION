# Dokumentacja Techniczna - II Etap (Backend)

## 1. Wstęp
II Etap projektu ZANT skupia się na wsparciu pracownika ZUS w procesie weryfikacji zgłoszeń i podejmowania decyzji. Kluczowym elementem jest tutaj automatyczna analiza dokumentacji (OCR).

## 2. Moduł Ekstrakcji Danych

System wykorzystuje dwuetapowy proces przetwarzania dokumentów: OCR (rozpoznawanie tekstu) oraz NER (ekstrakcja informacji).

### A. OCR (`backend/validation_model/extract_data/ocr_extractor.py`)
Odpowiada za zamianę zeskanowanych plików PDF na tekst.

*   **Technologie**: `pytesseract`, `pdf2image`, `opencv-python` (do preprocessingu obrazu).
*   **Działanie**:
    1. Konwersja stron PDF na obrazy.
    2. Preprocessing obrazu (skala szarości, binaryzacja) w celu poprawy jakości OCR.
    3. Ekstrakcja tekstu za pomocą Tesseract (język polski).

### B. Ekstrakcja Informacji (`backend/validation_model/extract_data/ner_extractor.py`)
Odpowiada za wyciągnięcie ustrukturyzowanych danych z "surowego" tekstu.

*   **Metoda**: Obecnie oparta na wyrażeniach regularnych (Regex).
*   **Funkcjonalności**:
    *   **Identyfikacja typu dokumentu**: Rozpoznaje czy dokument to "zawiadomienie", "wyjaśnienie", "opinia" itp.
    *   **Ekstrakcja pól**:
        *   Daty (różne formaty).
        *   Dane osobowe (PESEL, Imię i Nazwisko).
        *   Dane pracodawcy (NIP).
        *   Opis zdarzenia i urazy.
*   **Integracja**: Klasa `NERExtractor` jest wykorzystywana bezpośrednio przez skrypt `ocr_extractor.py` do przetworzenia wyniku OCR.

## 3. Instrukcja Uruchomienia i Testowania

### Wymagania systemowe
*   Zainstalowany w systemie `tesseract-ocr` (oraz pakiet języka polskiego `tesseract-ocr-pol`).
*   Zainstalowany `poppler-utils` (wymagany przez `pdf2image`).

### Testowanie OCR
Aby przetestować działanie modułu OCR na przykładowych danych:
```bash
python backend/validation_model/extract_data/ocr_extractor.py
```
Skrypt spróbuje przetworzyć pierwsze znalezione pliki PDF w katalogu `dataset` i wypisze rozpoznany tekst na konsolę.
