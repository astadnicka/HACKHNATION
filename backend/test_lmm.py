from services.llm_client import LLMClient
import time 

llm = LLMClient()

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

start = time.time() 
response = llm.analyze_form(test_fields)
print("\n=== ANALIZA POLA FORMULARZA ZUS ===\n")
print(response.get('analysis'))

end = time.time()
print(f"\nCzas przetwarzania: {end - start:.2f} sekund")
print(f"Po ludzku to {(end - start)/60:.2f} minut")