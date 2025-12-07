# Model HerBERT w Systemie ZANT

## Opis Modelu

**HerBERT** to polski model językowy oparty na architekturze **BERT (Bidirectional Encoder Representations from Transformers)**, opracowany przez **Allegro AI**. Został wytrenowany na bardzo dużym korpusie polskojęzycznych danych (m.in. Common Crawl, Wikipedia, dane ogłoszeniowe), dzięki czemu osiąga wysoką skuteczność w zadaniach przetwarzania języka naturalnego (NLP) dla języka polskiego.

Model `allegro/herbert-base-cased`, wykorzystywany w systemie ZANT, jest wersją zachowującą wielkość liter, co poprawia rozpoznawanie nazw własnych, dat oraz skrótów.

## Zastosowanie w Projekcie

W systemie **ZANT** model **HerBERT** pełni rolę zaawansowanego komponentu NLP, który zastępuje oraz wspiera mechanizmy oparte na wyrażeniach regularnych (**Regex**) w miejscach wymagających analizy kontekstu językowego.

### Główne obszary zastosowania:

### 1. Ekstrakcja Informacji (NER – Named Entity Recognition)

- Inteligentne rozpoznawanie encji z kontekstu (np. odróżnienie daty wypadku od daty urodzenia przy niestandardowej strukturze dokumentu).
- Odporność na błędy OCR, z którymi klasyczne reguły Regex nie radzą sobie skutecznie.

### 2. Klasyfikacja Tekstu

- Automatyczna kategoryzacja opisów zdarzeń (np. wykrywanie, czy opis wskazuje na zdarzenie podlegające pod ZUS).
- Wykorzystanie modelu w pipeline klasyfikacyjnym do wstępnej selekcji dokumentów.

## Status Licencyjny

Model **HerBERT** jest udostępniany na licencji **Apache 2.0**.

Jest to licencja **Open Source**, która:

- pozwala na komercyjne wykorzystanie,
- umożliwia modyfikacje i redystrybucję,
- nie nakłada opłat licencyjnych.

Dzięki temu model może być bezpiecznie stosowany w systemie **ZANT** w środowisku produkcyjnym.
