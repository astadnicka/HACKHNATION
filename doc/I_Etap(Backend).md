# Dokumentacja Techniczna - I Etap (Backend)

## 1. Wstęp
System ZANT (System wspierania zgłoszeń i decyzji ZUS) ma na celu automatyzację i wsparcie procesu uznawania zdarzeń za wypadki przy pracy dla osób prowadzących pozarolniczą działalność gospodarczą.
I Etap projektu skupia się na wsparciu osoby zgłaszającej wypadek.

## 2. Architektura Backend (Python/Flask)

Backend aplikacji został zbudowany w oparciu o framework **Flask**. Odpowiada on za logikę biznesową oraz wystawianie API dla frontendu.

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
*   **`middleware/`**: Oprogramowanie pośrednie.
    *   `error_handler.py`: Globalna obsługa błędów API.
*   **`utils/`**: Narzędzia pomocnicze.
    *   `validators.py`: Funkcje walidujące dane wejściowe.

### Szczegółowy Opis Modułów (I Etap)

#### A. API Asystenta (`backend/routes/assist.py`)
Moduł ten realizuje funkcjonalności I Etapu (wsparcie zgłaszającego).

*   **Endpoint `/api/assistant/batch-check` [POST]**:
    *   **Cel**: Masowa weryfikacja poprawności wypełnionych pól formularza zgłoszeniowego.
    *   **Działanie**:
        1. Odbiera JSON z listą formularzy.
        2. Waliduje strukturę żądania.
        3. Dla każdego formularza wywołuje `llm.analyze_form()`.
        4. Zwraca symulowane wyniki analizy (obecnie hardcoded response).
*   **Endpoint `/health` [GET]**:
    *   Służy do monitorowania stanu usługi (Health Check).

#### B. Klient LLM (`backend/services/llm_client.py`)
Klasa `LLMClient` stanowi interfejs do komunikacji z modelem językowym (docelowo **Gemma 2 2B**).

*   **Stan obecny**: Klasa jest zaimplementowana jako **Mock (atrapa)**.
    *   Metoda `_send` nie wykonuje rzeczywistego połączenia z API ani modelem.
    *   Zwraca sztywno zdefiniowaną odpowiedź testową (`"analysis": "Form validation pending..."`).
*   **Funkcja `analyze_form(fields)`**:
    *   Przygotowuje prompt z danymi formularza.
    *   Symuluje wysłanie zapytania i odbiór odpowiedzi.
*   **Cel docelowy**: Integracja z lokalnie uruchomionym modelem Gemma 2 2B w celu weryfikacji merytorycznej zgłoszeń (wykrywanie braków w opisie, niespójności).

## 3. Instrukcja Uruchomienia (Backend)

### Wymagania systemowe
*   Python 3.8+

### Uruchomienie
1. Przejdź do katalogu głównego projektu.
2. Zainstaluj zależności Python:
   ```bash
   pip install -r backend/requirements.txt
   ```
3. Uruchom serwer deweloperski:
   ```bash
   python backend/app.py
   ```
   Serwer będzie dostępny pod adresem `http://localhost:8000`.
