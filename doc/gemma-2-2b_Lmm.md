# Model Gemma 2 2B w Systemie ZANT

## Opis Modelu
**Gemma 2 2B** to lekki, otwarty model językowy (LLM) stworzony przez Google. Należy do rodziny modeli Gemma, które są zbudowane na tej samej technologii i badaniach co modele Gemini. Wersja 2B (2 miliardy parametrów) charakteryzuje się wysoką wydajnością przy stosunkowo niskich wymaganiach obliczeniowych, co pozwala na jej uruchamianie nawet na sprzęcie konsumenckim lub w środowiskach o ograniczonych zasobach.

## Zastosowanie w Projekcie
W systemie ZANT model Gemma 2 2B pełni rolę "inteligentnego asystenta" i silnika wnioskującego:

1.  **Analiza Zgłoszeń (I Etap)**:
    *   Weryfikacja kompletności i spójności logicznej opisów wypadków wprowadzanych przez użytkownika.
    *   Generowanie pytań pomocniczych, które naprowadzają użytkownika na uzupełnienie brakujących informacji (np. o przyczynie zewnętrznej).

2.  **Wsparcie Decyzyjne (II Etap)**:
    *   Analiza zebranego materiału dowodowego pod kątem definicji wypadku przy pracy.
    *   Generowanie projektów opinii i uzasadnień dla pracowników ZUS.
    *   Wstępne wypełnianie "Karty Wypadku" na podstawie przetworzonych danych.

## Status Licencyjny
Modele Gemma podlegają specjalnym zasadom **Gemma Terms of Use**. Licencja dozwala wykorzystanie w projektach komercyjnych, dlatego nie będziemy mieli tutaj problemu w przyszłościowym zaimplementowaniu ją w większy projekt taki jak ten. 
Główne ograniczenia określone przez Google dotyczą użycia modelu do celów szkodliwych, niezgodnych z prawem lub naruszających zasady bezpieczeństwa. 

Dla projektu ZANT licencja ta jest odpowiednia i pozwala na legalne wykorzystanie modelu do budowy systemu wsparcia administracji publicznej. 
