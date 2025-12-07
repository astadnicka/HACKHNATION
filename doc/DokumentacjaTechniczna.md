# Dokumentacja Techniczna Systemu ZANT (HackNation 2025)

## 1. Wstęp
System ZANT (System wspierania zgłoszeń i decyzji ZUS) ma na celu automatyzację i wsparcie procesu uznawania zdarzeń za wypadki przy pracy dla osób prowadzących pozarolniczą działalność gospodarczą. Projekt realizuje wymagania HackNation 2025, dzieląc się na dwa główne etapy: wsparcie zgłaszającego (I Etap) oraz wsparcie pracownika ZUS (II Etap).

Niniejsza dokumentacja opisuje obecny stan naszej próby wykonania projektu.

## 2. Architektura Backend (Python/Flask)

Backend aplikacji został zbudowany w oparciu o framework **Flask**. Odpowiada on za logikę biznesową, wystawianie API dla frontendu oraz przetwarzanie dokumentów (OCR).

### Struktura Katalogów (`backend/`)

*   **`app.py`**: Główny plik startowy aplikacji.
    *   Inicjalizuje aplikację Flask.
    *   Konfiguruje CORS (Cross-Origin Resource Sharing).
    *   Rejestruje obsługę błędów (`middleware`).
    *   Rejestruje ścieżki (Blueprints) z katalogu `routes`.
*   **`routes/`**: Zawiera definicje endpointów API.
    *   `assist.py`: Obsługuje żądania związane z asystentem AI (walidacja formularzy).
*   **`services/`**: Warstwa usług zawierająca logikę biznesową.
    *   `llm_client.py`: Klient do komunikacji z modelem językowym (LLM).
*   **`validation_model/`**: Moduły odpowiedzialne za przetwarzanie danych i uczenie maszynowe.
    *   `extract_data/ocr_extractor.py`: Skrypt do ekstrakcji tekstu z plików PDF (skanów).
*   **`middleware/`**: Oprogramowanie pośrednie.
    *   `error_handler.py`: Globalna obsługa błędów API.
*   **`utils/`**: Narzędzia pomocnicze.
    *   `validators.py`: Funkcje walidujące dane wejściowe.

### Szczegółowy Opis Modułów

#### A. API Asystenta (`backend/routes/assist.py`)
Moduł ten realizuje funkcjonalności I Etapu (wsparcie zgłaszającego).

*   **Endpoint `/api/assistant/batch-check` [POST]**:
    *   **Cel**: Masowa weryfikacja poprawności wypełnionych pól formularza zgłoszeniowego.
    *   **Działanie**:
        1. Odbiera JSON z listą formularzy.
        2. Waliduje strukturę żądania.
        3. Dla każdego formularza wywołuje `llm.analyze_form()`.
        4. Zwraca wyniki analizy (sugestie, błędy) wygenerowane przez model.
*   **Endpoint `/health` [GET]**:
    *   Służy do monitorowania stanu usługi (Health Check).

#### B. Klient LLM (`backend/services/llm_client.py`)
Klasa `LLMClient` jest abstrakcją nad zewnętrznym API modelu językowego (np. GPT, Claude, lokalne modele).

*   **Funkcja `analyze_form(fields)`**:
    *   Przyjmuje słownik pól formularza.
    *   Tworzy prompt (instrukcję) dla modelu, zawierający dane z formularza.
    *   Wysyła zapytanie do modelu (obecnie zaimplementowane jako mock/symulacja w metodzie `_send`).
    *   Zwraca ustrukturyzowaną odpowiedź z wynikami walidacji.
*   **Znaczenie dla projektu**: Jest to kluczowy element "inteligentnego" wsparcia użytkownika, który ma pomagać w opisie okoliczności wypadku i wyłapywaniu braków w zgłoszeniu.

#### C. Moduł Ekstrakcji Danych (`backend/validation_model/extract_data/`)
Moduł ten realizuje funkcjonalności II Etapu (wsparcie pracownika ZUS, analiza dokumentacji).

*   **OCR (`ocr_extractor.py`)**:
    *   Wykorzystuje `pytesseract` i `pdf2image`.
    *   Przetwarza obrazy (preprocessing OpenCV) i odczytuje tekst.
*   **NER (`ner_extractor.py`)**:
    *   Wykorzystuje wyrażenia regularne do identyfikacji kluczowych informacji (PESEL, daty, opisy).
    *   Klasyfikuje typ dokumentu (zawiadomienie, wyjaśnienie, opinia).
*   **Działanie**:
    1. **`find_and_process_files()`**: Przeszukuje rekurencyjnie katalog `dataset/karty wypadku - zanonimizowane`.
    2. Filtruje pliki, szukając dokumentów typu "zawiadomienie o wypadku" lub "wyjaśnienia poszkodowanego".
    3. **`extract_text_from_pdf(pdf_path)`**:
        *   Konwertuje każdą stronę PDF na obraz.
        *   Uruchamia Tesseract OCR (z preferencją języka polskiego `lang='pol'`).
        *   Łączy rozpoznany tekst z wszystkich stron.
*   **Zastosowanie**: Umożliwia systemowi "przeczytanie" zeskanowanych dokumentów dostarczonych przez użytkownika, co jest niezbędne do automatycznej weryfikacji spójności danych i generowania projektu karty wypadku.

## 3. Architektura Frontend (Next.js)

Frontend aplikacji (`frontend/hacknation`) został zbudowany w nowoczesnym stacku technologicznym, zapewniającym wydajność i responsywność.

*   **Framework**: **Next.js 16** (korzystający z App Router).
*   **Biblioteka UI**: **React 19**.
*   **Style**: **Tailwind CSS 4** (do szybkiego stylowania komponentów).
*   **Zadania**:
    *   Prezentacja formularzy zgłoszeniowych (I Etap).
    *   Interfejs dla pracownika ZUS do weryfikacji spraw (II Etap).
    *   Komunikacja z Backendem poprzez REST API.

## 4. Instrukcja Uruchomienia

### Wymagania systemowe
*   Python 3.8+
*   Node.js 18+
*   Zainstalowany w systemie `tesseract-ocr` (oraz pakiet języka polskiego `tesseract-ocr-pol`).
*   Zainstalowany `poppler-utils` (wymagany przez `pdf2image`).

### Backend
1. Przejdź do katalogu głównego projektu.
2. Zainstaluj zależności Python:
   ```bash
   pip install -r backend/requirements.txt
   ```
3. Uruchom serwer dewelopeerski:
   ```bash
   python backend/app.py
   ```
   Serwer będzie dostępny pod adresem `http://localhost:8000`.

### Frontend
1. Przejdź do katalogu frontendu:
   ```bash
   cd frontend/hacknation
   ```
2. Zainstaluj zależności Node.js:
   ```bash
   npm install
   ```
3. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```
   Aplikacja będzie dostępna pod adresem `http://localhost:3000`.

### Testowanie OCR
Aby przetestować działanie modułu OCR na przykładowych danych:
```bash
python backend/validation_model/extract_data/ocr_extractor.py
```
Skrypt spróbuje przetworzyć pierwsze znalezione pliki PDF w katalogu `dataset` i wypisze rozpoznany tekst na konsolę.
