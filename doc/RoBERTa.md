# Model RoBERTa w Systemie ZANT

## Opis Modelu
**RoBERTa** (Robustly Optimized BERT Pretraining Approach) to model językowy oparty na architekturze Transformer, opracowany przez Facebook AI (obecnie Meta AI). Jest to zoptymalizowana wersja modelu BERT, trenowana na większym korpusie danych i przez dłuższy czas, co pozwala na osiąganie lepszych wyników w zadaniach przetwarzania języka naturalnego (NLP).

## Zastosowanie w Projekcie
W systemie ZANT model RoBERTa jest przewidziany jako zaawansowane rozwiązanie do zadań NLP, docelowo zastępujące lub wspierające obecne mechanizmy oparte na wyrażeniach regularnych (Regex).

Główne obszary zastosowania:

1.  **Ekstrakcja Informacji (NER - Named Entity Recognition)**:
    *   Inteligentne wyciąganie danych z kontekstu (np. rozróżnienie daty wypadku od daty urodzenia, gdy struktura dokumentu jest nietypowa).
    *   Radzenie sobie z błędami OCR, których sztywne reguły Regex mogą nie obsłużyć.

2.  **Klasyfikacja Tekstu**:
    *   Kategoryzacja opisów zdarzeń (np. czy opis wskazuje na przyczynę zewnętrzną).

## Status Licencyjny
Model RoBERTa jest udostępniany na licencji **MIT**.

Jest to licencja Open Source, którą bez problemu można używać komercyjnie, modyfikować i masowo dystrubuować. 
Dzięki liberalnej licencji MIT, model może być swobodnie wykorzystywany w systemie ZANT bez opłat licencyjnych.
