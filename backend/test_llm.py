from services.llm_client import LLMClient

# Inicjalizacja
llm = LLMClient()

# Test z polami formularza ZUS
test_fields = {
    "imię": "Jan",
    "nazwisko": "Kowalski",
    "PESEL": "92051234567",
    "typ_ubezpieczenia": "obowiązkowe",
    "data_rozpoczęcia": "2024-01-15",
    "stanowisko": "Kierowca",
    "pracodawca": "Firma Transport Sp. z o.o.",
    "wynagrodzenie_brutto": "3500 PLN"
}

response = llm.analyze_form(test_fields)
print("\n=== ANALIZA POLA FORMULARZA ZUS ===\n")
print(response.get('analysis'))
