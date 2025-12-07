# ZANT - System Wspierania Zgłoszeń i Decyzji ZUS

> System automatyzacji i wsparcia procesu uznawania zdarzeń za wypadki przy pracy dla osób prowadzących pozarolniczą działalność gospodarczą

## O projekcie

**ZANT** (Zgłoszenia i Analiza Nieszczęśliwych Trafików) to inteligentny system wspierający proces zgłaszania i weryfikacji wypadków przy pracy dla przedsiębiorców. Projekt powstał w ramach **HackNation 2025** i realizuje dwa kluczowe cele:

1. **Wsparcie osoby zgłaszającej** (I Etap) - inteligentny asystent pomagający w prawidłowym wypełnieniu formularzy ZUS EWYP
2. **Wsparcie pracownika ZUS** (II Etap) - narzędzia analityczne do weryfikacji zgłoszeń i podejmowania decyzji

### Problem biznesowy
Proces uznawania wypadków przy pracy jest skomplikowany prawnie i wymaga szczegółowej dokumentacji. System ZANT:
- **Redukuje błędy** w zgłoszeniach poprzez walidację w czasie rzeczywistym
- **Przyspiesza weryfikację** dzięki automatycznej analizie dokumentów (OCR + AI)
- **Wspiera decyzje** poprzez klasyfikację zdarzeń i sugestie prawne

## Funkcjonalności

### Dla zgłaszającego wypadek
- Interaktywny formularz zgłoszeniowy ZUS EWYP z walidacją
- Asystent AI (Gemma 2 2B) - weryfikacja kompletności opisu, sugestie uzupełnień
- Automatyczne generowanie wypełnionych PDF-ów
- Zapis postępu w localStorage (możliwość powrotu do formularza)

### Dla pracownika ZUS
-  OCR skanów dokumentów (Tesseract + PyPDF)
-  Klasyfikacja opisów wypadków (model HerBERT fine-tuned)
-  Panel weryfikacji zgłoszeń z podświetlaniem niezgodności
-  Generator projektów opinii i uzasadnień

## 🏗️ Architektura

```
┌─────────────────┐         ┌──────────────────┐
│   Frontend      │  HTTP   │    Backend       │
│   (Next.js)     │◄───────►│    (Flask)       │
│                 │  REST   │                  │
│  - Formularze   │         │  - API Routes    │
│  - Walidacja    │         │  - LLM Client    │
│  - UI/UX        │         │  - OCR Engine    │
└─────────────────┘         │  - PDF Generator │
                            └──────────────────┘
                                     │
                   ┌─────────────────┼─────────────────┐
                   ▼                 ▼                 ▼
            ┌──────────┐      ┌──────────┐     ┌──────────┐
            │ Gemma 2  │      │ HerBERT  │     │ PyMuPDF  │
            │   2B     │      │ (RoBERTa)│     │+Tesseract│
            │  (LMM)   │      │  Model   │     │   (OCR)  │
            └──────────┘      └──────────┘     └──────────┘
```

## Technologie

### Backend
- **Python 3.11** - język programowania
- **Flask 3.1** - framework REST API
- **PyTorch** - silnik modeli AI
- **Transformers (Hugging Face)** - obsługa modeli NLP
- **PyMuPDF (fitz)** - manipulacja PDF-ami
- **Tesseract OCR** - ekstrakcja tekstu ze skanów
- **Google Gemma 2 2B** - model językowy (asystent)
- **HerBERT (allegro/herbert-base-cased)** - klasyfikator tekstów

### Frontend
- **Next.js 16** (App Router) - framework React
- **React 19** - biblioteka UI
- **Tailwind CSS 4** - stylowanie
- **Fetch API** - komunikacja z backendem



## Uruchomienie

### Backend (port 8000)
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend (port 3000)
```bash
cd frontend/hacknation
npm install
npm run dev
```

## Model HerBERT
Należy pobrać z naszego githuba z releases


Aplikacja dostępna pod adresem: **http://localhost:3000**

## Dokumentacja

Szczegółowa dokumentacja techniczna znajduje się w katalogu [`doc/`](doc/):
- [`DokumentacjaTechniczna.md`](doc/DokumentacjaTechniczna.md) - architektura całego systemu
- [`I_Etap(Backend).md`](doc/I_Etap(Backend).md) - API asystenta zgłaszającego
- [`II_Etap(Backend).md`](doc/II_Etap(Backend).md) - moduł OCR i klasyfikacji
- [`gemma-2-2b_Lmm.md`](doc/gemma-2-2b_Lmm.md) - opis modelu LLM
- [`RoBERTa.md`](doc/RoBERTa.md) - model klasyfikacyjny HerBERT

## Struktura projektu

```
HACKHNATION/
├── backend/                    # Backend (Flask + AI)
│   ├── routes/                 # Endpointy API
│   │   ├── assist.py          # Asystent zgłaszającego
│   │   └── pdf.py             # Generowanie PDF
│   ├── services/              # Logika biznesowa
│   │   └── llm_client.py      # Klient Gemma 2 2B
│   ├── validation_model/      # Model klasyfikacyjny
│   │   └── training_model/
│   │       └── training_roberta.py
│   ├── pdf_uzupelnianie.py    # Wypełnianie PDF (PyMuPDF)
│   ├── OCR.py                 # Ekstrakcja tekstu (Tesseract)
│   └── app.py                 # Główny plik Flask
│
├── frontend/hacknation/        # Frontend (Next.js)
│   ├── app/
│   │   ├── pages/klient/      # Formularze zgłaszającego
│   │   │   └── wnioski/
│   │   │       ├── zawiadomienie/   # ZUS EWYP
│   │   │       └── zapis_wyjasnien/ # Wyjaśnienia
│   │   └── components/        # Komponenty React
│   └── public/                # Pliki statyczne
│
└── doc/                        # Dokumentacja techniczna
```
 
