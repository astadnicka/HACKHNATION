import fitz  # PyMuPDF
import json, os

PDF_TEMPLATE = "EWYP_wypelnij_i_wydrukuj.pdf"
OUTPUT_PDF = "EWYP_WYPELNIONY_I_SPLASZCZONY.pdf"  # Bezpośrednio spłaszczony plik

def validate_pesel(pesel):
    """Waliduje PESEL i zwraca oczyszczony PESEL lub None"""
    if not pesel:
        return None
    
    pesel_clean = str(pesel).strip().replace(" ", "").replace("-", "").replace(".", "")

    if len(pesel_clean) == 11 and pesel_clean.isdigit():
        return pesel_clean
    
    return None

def sanitize_data(data):
    """Oczyszcza i waliduje dane przed wypełnieniem PDF"""
    sanitized = {}
    for key, value in data.items():
        if value is None or value == "":
            sanitized[key] = ""
        elif key == "pesel" or key == "pesel_zawiadamiajacy":
            sanitized[key] = validate_pesel(value) or ""
        else:
            sanitized[key] = str(value).strip()
    return sanitized

MAPPING = {
    "pesel": "topmostSubform[0].Page1[0].PESEL[0]",
    "dokument": "topmostSubform[0].Page1[0].Rodzajseriainumerdokumentu[0]",
    "imie": "topmostSubform[0].Page1[0].Imię[0]",
    "nazwisko": "topmostSubform[0].Page1[0].Nazwisko[0]",
    "data_urodzenia": "topmostSubform[0].Page1[0].Dataurodzenia[0]",
    "miejsce_urodzenia": "topmostSubform[0].Page1[0].Miejsceurodzenia[0]",
    "telefon": "topmostSubform[0].Page1[0].Numertelefonu[0]",
    
    "ulica": "topmostSubform[0].Page1[0].Ulica[0]",
    "numer_domu": "topmostSubform[0].Page1[0].Numerdomu[0]",
    "numer_lokalu": "topmostSubform[0].Page1[0].Numerlokalu[0]",
    "kod_pocztowy": "topmostSubform[0].Page1[0].Kodpocztowy[0]",
    "poczta": "topmostSubform[0].Page1[0].Poczta[0]",
    "panstwo": "topmostSubform[0].Page1[0].Nazwapaństwa[0]",
    
    "ulica_kor": "topmostSubform[0].Page1[0].Ulica2A[0]",
    "numer_domu_kor": "topmostSubform[0].Page1[0].Numerdomu2A[0]",
    "numer_lokalu_kor": "topmostSubform[0].Page1[0].Numerlokalu2A[0]",
    "kod_pocztowy_kor": "topmostSubform[0].Page1[0].Kodpocztowy2A[0]",
    "poczta_kor": "topmostSubform[0].Page1[0].Poczta2A[0]",
    
    "ulica_zawiadamiajacy": "topmostSubform[0].Page2[0].Ulica[0]",
    "numer_domu_zawiadamiajacy": "topmostSubform[0].Page2[0].Numerdomu[0]",
    "numer_lokalu_zawiadamiajacy": "topmostSubform[0].Page2[0].Numerlokalu[0]",
    "kod_pocztowy_zawiadamiajacy": "topmostSubform[0].Page2[0].Kodpocztowy[0]",
    "miejscowosc_zawiadamiajacy": "topmostSubform[0].Page2[0].Poczta[0]",
    "telefon_zawiadamiajacy": "topmostSubform[0].Page2[0].Numertelefonu[0]",
    
    "ulica_dzialalnosci": "topmostSubform[0].Page2[0].Ulica2[0]",
    "numer_domu_dzialalnosci": "topmostSubform[0].Page2[0].Numerdomu2[0]",
    "numer_lokalu_dzialalnosci": "topmostSubform[0].Page2[0].Numerlokalu2[0]",
    "kod_pocztowy_dzialalnosci": "topmostSubform[0].Page2[0].Kodpocztowy2[0]",
    "miejscowosc_dzialalnosci": "topmostSubform[0].Page2[0].Poczta2[0]",
    "telefon_dzialalnosci": "topmostSubform[0].Page2[0].Numertelefonu2[0]",
    
    "pesel_zawiadamiajacy": "topmostSubform[0].Page2[0].PESEL[0]",
    "dokument_zawiadamiajacy": "topmostSubform[0].Page2[0].Rodzajseriainumerdokumentu[0]",
    "imie_zawiadamiajacy": "topmostSubform[0].Page2[0].Imię[0]",
    "nazwisko_zawiadamiajacy": "topmostSubform[0].Page2[0].Nazwisko[0]",
    "panstwo_zawiadamiajacy": "topmostSubform[0].Page2[0].Nazwapaństwa2[0]",
    

    "ulica_kor_zawiadamiajacy": "topmostSubform[0].Page2[0].Ulica2[1]",
    "numer_domu_kor_zawiadamiajacy": "topmostSubform[0].Page2[0].Numerdomu2[1]",
    "numer_lokalu_kor_zawiadamiajacy": "topmostSubform[0].Page2[0].Numerlokalu2[1]",
    "kod_pocztowy_kor_zawiadamiajacy": "topmostSubform[0].Page2[0].Kodpocztowy2[1]",
    "poczta_kor_zawiadamiajacy": "topmostSubform[0].Page2[0].Poczta2[1]",
    
   
    "data_wypadku": "topmostSubform[0].Page3[0].Datawyp[0]",
    "godzina_wypadku": "topmostSubform[0].Page3[0].Godzina[0]",
    "miejsce_wypadku": "topmostSubform[0].Page3[0].Miejscewyp[0]",
    "godzina_poczatku_pracy": "topmostSubform[0].Page3[0].Godzina3A[0]",
    "godzina_konca_pracy": "topmostSubform[0].Page3[0].Godzina3B[0]",
    

    "ulica_wypadek": "topmostSubform[0].Page3[0].Ulica3[0]",
    "numer_domu_wypadek": "topmostSubform[0].Page3[0].Numerdomu3[0]",
    "numer_lokalu_wypadek": "topmostSubform[0].Page3[0].Numerlokalu3[0]",
    "kod_pocztowy_wypadek": "topmostSubform[0].Page3[0].Kodpocztowy3[0]",
    "miejscowosc_wypadek": "topmostSubform[0].Page3[0].Poczta3[0]",
    "panstwo_wypadek": "topmostSubform[0].Page3[0].Nazwapaństwa3[0]",
    
    # Data urodzenia (duplikat z Page1, może być puste)
    "data_urodzenia_page3": "topmostSubform[0].Page3[0].Dataurodzenia[0]",
    "telefon_page3": "topmostSubform[0].Page3[0].Numertelefonu3[0]",
    
    # Opieka medyczna (Page3, pola Ulica2)
    "ulica_opieka": "topmostSubform[0].Page3[0].Ulica2[0]",
    "numer_domu_opieka": "topmostSubform[0].Page3[0].Numerdomu2[0]",
    "numer_lokalu_opieka": "topmostSubform[0].Page3[0].Numerlokalu2[0]",
    "kod_pocztowy_opieka": "topmostSubform[0].Page3[0].Kodpocztowy2[0]",
    "miejscowosc_opieka": "topmostSubform[0].Page3[0].Poczta2[0]",
    "panstwo_opieka": "topmostSubform[0].Page3[0].Nazwapaństwa2[0]",
    

    "ulica_korespondencja": "topmostSubform[0].Page3[0].Ulica2A[0]",
    "numer_domu_korespondencja": "topmostSubform[0].Page3[0].Numerdomu2A[0]",
    "numer_lokalu_korespondencja": "topmostSubform[0].Page3[0].Numerlokalu2A[0]",
    "kod_pocztowy_korespondencja": "topmostSubform[0].Page3[0].Kodpocztowy2A[0]",
    "miejscowosc_korespondencja": "topmostSubform[0].Page3[0].Poczta2A[0]",
    
    # ========== STRONA 4 - Opis wypadku ==========
    "rodzaj_urazow": "topmostSubform[0].Page4[0].Tekst4[0]",
    "opis_wypadku": "topmostSubform[0].Page4[0].Tekst5[0]",
    "opis_pierwszej_pomocy": "topmostSubform[0].Page4[0].Tekst6[0]",
    "organ_postepowanie": "topmostSubform[0].Page4[0].Tekst7[0]",
    "opis_maszyny": "topmostSubform[0].Page4[0].Tekst8[0]",
    
    # ========== STRONA 5 - Świadkowie ==========
    "swiadek1_imie": "topmostSubform[0].Page5[0].Imię[0]",
    "swiadek1_nazwisko": "topmostSubform[0].Page5[0].Nazwisko[0]",
    "swiadek1_ulica": "topmostSubform[0].Page5[0].Ulica[0]",
    "swiadek1_numer_domu": "topmostSubform[0].Page5[0].Numerdomu[0]",
    "swiadek1_numer_lokalu": "topmostSubform[0].Page5[0].Numerlokalu[0]",
    "swiadek1_kod_pocztowy": "topmostSubform[0].Page5[0].Kodpocztowy[0]",
    "swiadek1_miejscowosc": "topmostSubform[0].Page5[0].Poczta[0]",
    "swiadek1_panstwo": "topmostSubform[0].Page5[0].Nazwapaństwa[0]",
    
    "swiadek2_imie": "topmostSubform[0].Page5[0].Imię[1]",
    "swiadek2_nazwisko": "topmostSubform[0].Page5[0].Nazwisko[1]",
    "swiadek2_ulica": "topmostSubform[0].Page5[0].Ulica[1]",
    "swiadek2_numer_domu": "topmostSubform[0].Page5[0].Numerdomu[1]",
    "swiadek2_numer_lokalu": "topmostSubform[0].Page5[0].Numerlokalu[1]",
    "swiadek2_kod_pocztowy": "topmostSubform[0].Page5[0].Kodpocztowy[1]",
    "swiadek2_miejscowosc": "topmostSubform[0].Page5[0].Poczta[1]",
    "swiadek2_panstwo": "topmostSubform[0].Page5[0].Nazwapaństwa[1]",
    
    "swiadek3_imie": "topmostSubform[0].Page5[0].Imię2[0]",
    "swiadek3_nazwisko": "topmostSubform[0].Page5[0].Nazwisko2[0]",
    "swiadek3_ulica": "topmostSubform[0].Page5[0].Ulica2[0]",
    "swiadek3_numer_domu": "topmostSubform[0].Page5[0].Numerdomu2[0]",
    "swiadek3_numer_lokalu": "topmostSubform[0].Page5[0].Numerlokalu2[0]",
    "swiadek3_kod_pocztowy": "topmostSubform[0].Page5[0].Kodpocztowy2[0]",
    "swiadek3_miejscowosc": "topmostSubform[0].Page5[0].Poczta2[0]",
    "swiadek3_panstwo": "topmostSubform[0].Page5[0].Nazwapaństwa2[0]",
    
    "opis_innych_dokumentow": "topmostSubform[0].Page6[0].Inne[0]",
    "data_dostarczenia": "topmostSubform[0].Page6[0].Data[0]",
    "data_podpisu": "topmostSubform[0].Page6[0].Data[1]",
    
    "dokument1": "topmostSubform[0].Page6[0].Inne1[0]",
    "dokument2": "topmostSubform[0].Page6[0].Inne2[0]",
    "dokument3": "topmostSubform[0].Page6[0].Inne3[0]",
    "dokument4": "topmostSubform[0].Page6[0].Inne4[0]",
    "dokument5": "topmostSubform[0].Page6[0].Inne5[0]",
    "dokument6": "topmostSubform[0].Page6[0].Inne6[0]",
    "dokument7": "topmostSubform[0].Page6[0].Inne7[0]",
    "dokument8": "topmostSubform[0].Page6[0].Inne8[0]",
}

CHECKBOXY = {
    "pierwsza_pomoc": "topmostSubform[0].Page4[0].TAK6[0]",
    "maszyna_wypadek": "topmostSubform[0].Page4[0].TAK8[0]",
    "czy_atest": "topmostSubform[0].Page4[0].TAK9[0]",
    "czy_ewidencja": "topmostSubform[0].Page4[0].TAK10[0]",
    
    
    "odbior_placowka": "topmostSubform[0].Page6[0].wplacowce[0]",
    "odbior_poczta": "topmostSubform[0].Page6[0].poczta[0]",
    "odbior_pue": "topmostSubform[0].Page6[0].PUE[0]",
    
}




def convertJsonToPdf(data, filename):
    try:
        # Oczyszcz i zwaliduj dane
        data = sanitize_data(data)
        
        doc = fitz.open(PDF_TEMPLATE)

        filled_count = 0
        for page in doc:
            widgets = page.widgets()
            for widget in widgets:
                field_name = widget.field_name
                
                if field_name in MAPPING.values():
                    json_key = next((k for k, v in MAPPING.items() if v == field_name), None)
                    if json_key and json_key in data and data[json_key]:
                        widget.field_value = str(data[json_key])
                        widget.update()
                        filled_count += 1
                
                for json_key, tak_field in CHECKBOXY.items():
                    if field_name == tak_field:
                        if data.get(json_key):
                            widget.field_value = widget.on_state()
                        else:
                            widget.field_value = False
                        widget.update()
        
        print(f"Wypełniono {filled_count} pól")
        
        doc.bake()  

        backend_dir = os.path.join(os.path.dirname(__file__), "backend")
        output_dir = os.path.join(backend_dir, "generated_pdfs")
        os.makedirs(output_dir, exist_ok=True)
        
        output_path = os.path.join(output_dir, filename)
        doc.save(output_path, garbage=4, deflate=True, clean=True)
        doc.close()
        
        print(f"PDF zapisany: {output_path}")
        return output_path
    except Exception as e:
        print(f"Błąd przy wypełnianiu PDF: {str(e)}")
        return None
