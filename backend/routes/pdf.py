from flask import Blueprint, request, jsonify, send_file
import sys
import os
import uuid

sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))

from backend.pdf_uzupelnianie import convertJsonToPdf, validate_pesel

pdf = Blueprint("pdf", __name__)

@pdf.route("/zawiadomienie", methods=["POST"])
def getZawiadomienieData():
    frontend_data = request.get_json()

    if not frontend_data:
        return jsonify({"error": "No data provided"}), 400

    def format_dokument(dokument_obj):
        return " ".join(filter(None, [
            dokument_obj.get("rodzaj", ""),
            dokument_obj.get("seria", ""),
            dokument_obj.get("numer", "")
        ])).strip()

    # Waliduj PESEL przed utworzeniem słownika
    pesel_poszkodowany = frontend_data.get("poszkodowany", {}).get("pesel", "")
    pesel_zawiadamiajacy = frontend_data.get("zawiadamiajacy", {}).get("pesel", "")
    
    # Oczyszcz i waliduj PESEL
    pesel_poszkodowany_clean = validate_pesel(pesel_poszkodowany)
    pesel_zawiadamiajacy_clean = validate_pesel(pesel_zawiadamiajacy)
    
    # Zwróć błąd tylko jeśli PESEL był podany ale niepoprawny
    if pesel_poszkodowany and not pesel_poszkodowany_clean:
        return jsonify({"error": "Niepoprawny PESEL poszkodowanego. Wymagane 11 cyfr."}), 400
    
    if pesel_zawiadamiajacy and not pesel_zawiadamiajacy_clean:
        return jsonify({"error": "Niepoprawny PESEL zawiadamiającego. Wymagane 11 cyfr."}), 400

    data = {
        "pesel": pesel_poszkodowany,
        "dokument": format_dokument(frontend_data["poszkodowany"].get("dokument", {})),
        "imie": frontend_data["poszkodowany"].get("imie", ""),
        "nazwisko": frontend_data["poszkodowany"].get("nazwisko", ""),
        "data_urodzenia": frontend_data["poszkodowany"].get("dataUrodzenia", "").replace("-", ""),
        "plec": frontend_data["poszkodowany"].get("plec", ""),
        
        "ulica": frontend_data["poszkodowany"]["adresZamieszkania"].get("ulica", ""),
        "numer_domu": frontend_data["poszkodowany"]["adresZamieszkania"].get("numerDomu", ""),
        "numer_lokalu": frontend_data["poszkodowany"]["adresZamieszkania"].get("numerLokalu", ""),
        "kod_pocztowy": frontend_data["poszkodowany"]["adresZamieszkania"].get("kodPocztowy", ""),
        "poczta": frontend_data["poszkodowany"]["adresZamieszkania"].get("miejscowosc", ""),
        "gmina": frontend_data["poszkodowany"]["adresZamieszkania"].get("gmina", ""),
        "panstwo": frontend_data["poszkodowany"]["adresZamieszkania"].get("panstwo", ""),
        
        "ulica_kor": frontend_data["poszkodowany"]["adresKorespondencji"].get("ulica", ""),
        "numer_domu_kor": frontend_data["poszkodowany"]["adresKorespondencji"].get("numerDomu", ""),
        "numer_lokalu_kor": frontend_data["poszkodowany"]["adresKorespondencji"].get("numerLokalu", ""),
        "kod_pocztowy_kor": frontend_data["poszkodowany"]["adresKorespondencji"].get("kodPocztowy", ""),
        "poczta_kor": frontend_data["poszkodowany"]["adresKorespondencji"].get("miejscowosc", ""),
        "gmina_kor": frontend_data["poszkodowany"]["adresKorespondencji"].get("gmina", ""),
        "panstwo_kor": frontend_data["poszkodowany"]["adresKorespondencji"].get("panstwo", ""),
        
        "pesel_zawiadamiajacy": pesel_zawiadamiajacy,
        "dokument_zawiadamiajacy": format_dokument(frontend_data["zawiadamiajacy"].get("dokument", {})),
        "imie_zawiadamiajacy": frontend_data["zawiadamiajacy"].get("imie", ""),
        "nazwisko_zawiadamiajacy": frontend_data["zawiadamiajacy"].get("nazwisko", ""),
        "dzien_urodzenia": frontend_data["zawiadamiajacy"].get("dzienUrodzenia", ""),
        "miesiac_urodzenia": frontend_data["zawiadamiajacy"].get("miesiacUrodzenia", ""),
        "rok_urodzenia": frontend_data["zawiadamiajacy"].get("rokUrodzenia", ""),
        "plec_zawiadamiajacy": frontend_data["zawiadamiajacy"].get("plec", ""),
        
        "ulica_zawiadamiajacy": frontend_data["zawiadamiajacy"]["adresZamieszkania"].get("ulica", ""),
        "numer_domu_zawiadamiajacy": frontend_data["zawiadamiajacy"]["adresZamieszkania"].get("numerDomu", ""),
        "numer_lokalu_zawiadamiajacy": frontend_data["zawiadamiajacy"]["adresZamieszkania"].get("numerLokalu", ""),
        "kod_pocztowy_zawiadamiajacy": frontend_data["zawiadamiajacy"]["adresZamieszkania"].get("kodPocztowy", ""),
        "miejscowosc_zawiadamiajacy": frontend_data["zawiadamiajacy"]["adresZamieszkania"].get("miejscowosc", ""),
        "gmina_zawiadamiajacy": frontend_data["zawiadamiajacy"]["adresZamieszkania"].get("gmina", ""),
        "panstwo_zawiadamiajacy": frontend_data["zawiadamiajacy"]["adresZamieszkania"].get("panstwo", ""),
        
        "ulica_dzialalnosci": frontend_data["miejscaDzialalnosci"].get("ulica", ""),
        "numer_domu_dzialalnosci": frontend_data["miejscaDzialalnosci"].get("numerDomu", ""),
        "numer_lokalu_dzialalnosci": frontend_data["miejscaDzialalnosci"].get("numerLokalu", ""),
        "kod_pocztowy_dzialalnosci": frontend_data["miejscaDzialalnosci"].get("kodPocztowy", ""),
        "miejscowosc_dzialalnosci": frontend_data["miejscaDzialalnosci"].get("miejscowosc", ""),
        "gmina_dzialalnosci": frontend_data["miejscaDzialalnosci"].get("gmina", ""),
        "telefon": frontend_data["miejscaDzialalnosci"].get("numerTelefonu", ""),
        
        # ========== OPIEKA (Strona 2/3) ==========
        "ulica_opieka": frontend_data["opieka"].get("ulica", ""),
        "numer_domu_opieka": frontend_data["opieka"].get("numerDomu", ""),
        "numer_lokalu_opieka": frontend_data["opieka"].get("numerLokalu", ""),
        "kod_pocztowy_opieka": frontend_data["opieka"].get("kodPocztowy", ""),
        "miejscowosc_opieka": frontend_data["opieka"].get("miejscowosc", ""),
        
        # ========== KORESPONDENCJA (Strona 2) ==========
        "ulica_korespondencja": frontend_data["korespondencja"].get("ulica", ""),
        "numer_domu_korespondencja": frontend_data["korespondencja"].get("numerDomu", ""),
        "numer_lokalu_korespondencja": frontend_data["korespondencja"].get("numerLokalu", ""),
        "kod_pocztowy_korespondencja": frontend_data["korespondencja"].get("kodPocztowy", ""),
        "miejscowosc_korespondencja": frontend_data["korespondencja"].get("miejscowosc", ""),
        "gmina_korespondencja": frontend_data["korespondencja"].get("gmina", ""),
        "panstwo_korespondencja": frontend_data["korespondencja"].get("panstwo", ""),
        
        # ========== WYPADEK (Strona 3-4) ==========
        "data_wypadku": frontend_data["wypadek"].get("dataWypadku", "").replace("-", ""),
        "godzina_wypadku": frontend_data["wypadek"].get("godzinaWypadku", ""),
        "miejsce_wypadku": frontend_data["wypadek"].get("miejsceWypadku", ""),
        "godzina_poczatku_pracy": frontend_data["wypadek"].get("godzinaPoczatkuPracy", ""),
        "godzina_konca_pracy": frontend_data["wypadek"].get("godzinaKoncaPracy", ""),
        "rodzaj_urazow": frontend_data["wypadek"].get("rodzajUrazow", ""),
        "opis_wypadku": frontend_data["wypadek"].get("opisOkolicznosci", ""),
        "opis_pierwszej_pomocy": frontend_data["wypadek"].get("opisPierwszejPomocy", ""),
        
        "organ_postepowanie": frontend_data["organy"].get("organPostepowanie", ""),
        "opis_maszyny": frontend_data["organy"].get("opisMaszyny", ""),
        
        "pierwsza_pomoc": frontend_data["wypadek"].get("pierwszaPomoc", False),
        "maszyna_wypadek": frontend_data["organy"].get("maszynaWypadek", False),
        "czy_atest": frontend_data["organy"].get("atest", False),
        "czy_ewidencja": frontend_data["organy"].get("ewidencjaSrodkowTrwalych", False),
        
        "swiadek1_imie": frontend_data["swiadkowie"]["swiadek1"].get("imie", ""),
        "swiadek1_nazwisko": frontend_data["swiadkowie"]["swiadek1"].get("nazwisko", ""),
        "swiadek1_numer_domu": frontend_data["swiadkowie"]["swiadek1"].get("numerDomu", ""),
        "swiadek1_numer_lokalu": frontend_data["swiadkowie"]["swiadek1"].get("numerLokalu", ""),
        "swiadek1_kod_pocztowy": frontend_data["swiadkowie"]["swiadek1"].get("kodPocztowy", ""),
        "swiadek1_miejscowosc": frontend_data["swiadkowie"]["swiadek1"].get("miejscowosc", ""),
        "swiadek1_gmina": frontend_data["swiadkowie"]["swiadek1"].get("gmina", ""),
        "swiadek1_panstwo": frontend_data["swiadkowie"]["swiadek1"].get("panstwo", ""),
        
        "swiadek2_imie": frontend_data["swiadkowie"]["swiadek2"].get("imie", ""),
        "swiadek2_nazwisko": frontend_data["swiadkowie"]["swiadek2"].get("nazwisko", ""),
        "swiadek2_numer_domu": frontend_data["swiadkowie"]["swiadek2"].get("numerDomu", ""),
        "swiadek2_numer_lokalu": frontend_data["swiadkowie"]["swiadek2"].get("numerLokalu", ""),
        "swiadek2_kod_pocztowy": frontend_data["swiadkowie"]["swiadek2"].get("kodPocztowy", ""),
        "swiadek2_miejscowosc": frontend_data["swiadkowie"]["swiadek2"].get("miejscowosc", ""),
        "swiadek2_gmina": frontend_data["swiadkowie"]["swiadek2"].get("gmina", ""),
        "swiadek2_panstwo": frontend_data["swiadkowie"]["swiadek2"].get("panstwo", ""),
        
        "swiadek3_imie": frontend_data["swiadkowie"]["swiadek3"].get("imie", ""),
        "swiadek3_nazwisko": frontend_data["swiadkowie"]["swiadek3"].get("nazwisko", ""),
        "swiadek3_numer_domu": frontend_data["swiadkowie"]["swiadek3"].get("numerDomu", ""),
        "swiadek3_numer_lokalu": frontend_data["swiadkowie"]["swiadek3"].get("numerLokalu", ""),
        "swiadek3_kod_pocztowy": frontend_data["swiadkowie"]["swiadek3"].get("kodPocztowy", ""),
        "swiadek3_miejscowosc": frontend_data["swiadkowie"]["swiadek3"].get("miejscowosc", ""),
        "swiadek3_gmina": frontend_data["swiadkowie"]["swiadek3"].get("gmina", ""),
        "swiadek3_panstwo": frontend_data["swiadkowie"]["swiadek3"].get("panstwo", ""),
        
        "karta_informacyjna": frontend_data["zalaczniki"].get("kartaInformacyjna", False),
        "postanowienie_prokuratury": frontend_data["zalaczniki"].get("postanowienieProkuratury", False),
        "akt_zgonu": frontend_data["zalaczniki"].get("aktZgonu", False),
        "dokumenty_prawo": frontend_data["zalaczniki"].get("dokumentyPrawo", False),
        "inne_dokumenty": frontend_data["zalaczniki"].get("inneDokumenty", False),
        "opis_innych_dokumentow": frontend_data["zalaczniki"].get("opisInnychDokumentow", ""),
        "data_dostarczenia": frontend_data["zalaczniki"].get("dataDostarczenia", "").replace("-", ""),
        
        "dokument1": frontend_data["zalaczniki"]["dokumenty"][0] if len(frontend_data["zalaczniki"]["dokumenty"]) > 0 else "",
        "dokument2": frontend_data["zalaczniki"]["dokumenty"][1] if len(frontend_data["zalaczniki"]["dokumenty"]) > 1 else "",
        "dokument3": frontend_data["zalaczniki"]["dokumenty"][2] if len(frontend_data["zalaczniki"]["dokumenty"]) > 2 else "",
        "dokument4": frontend_data["zalaczniki"]["dokumenty"][3] if len(frontend_data["zalaczniki"]["dokumenty"]) > 3 else "",
        "dokument5": frontend_data["zalaczniki"]["dokumenty"][4] if len(frontend_data["zalaczniki"]["dokumenty"]) > 4 else "",
        "dokument6": frontend_data["zalaczniki"]["dokumenty"][5] if len(frontend_data["zalaczniki"]["dokumenty"]) > 5 else "",
        "dokument7": frontend_data["zalaczniki"]["dokumenty"][6] if len(frontend_data["zalaczniki"]["dokumenty"]) > 6 else "",
        "dokument8": frontend_data["zalaczniki"]["dokumenty"][7] if len(frontend_data["zalaczniki"]["dokumenty"]) > 7 else "",
        
        "odbior_placowka": frontend_data["zalaczniki"].get("odbiorPlacowka", False),
        "odbior_poczta": frontend_data["zalaczniki"].get("odbiorPoczta", False),
        "odbior_pue": frontend_data["zalaczniki"].get("odbiorPUE", False),
        
        "data_podpisu": frontend_data["zalaczniki"].get("dataPodpisu", "").replace("-", ""),
        "podpis": frontend_data["zalaczniki"].get("podpis", ""),
    }

    try:
        filename = f"ZUS_EWYP_{uuid.uuid4().hex[:8]}.pdf"
        pdf_path = convertJsonToPdf(data, filename)
        
        if not pdf_path:
            return jsonify({"error": "Nie udało się utworzyć PDF"}), 500
        
        return send_file(
            pdf_path,
            mimetype='application/pdf',
            as_attachment=True,
            download_name='ZUS_EWYP_wypelniony.pdf'
        )
    
    except Exception as e:
        print(f"Błąd: {str(e)}")
        return jsonify({"error": str(e)}), 500
    


@pdf.route("/wyjasnienie", methods=["POST"])
def getZapisWyjasnienData():
    frontend_data = request.get_json()

    if not frontend_data:
        return jsonify({"error": "No data provided"}), 400

    required_sections = ["osoba", "wypadek", "maszyny", "pomoc"]
    missing_sections = [sec for sec in required_sections if sec not in frontend_data]
    
    if missing_sections:
        return jsonify({
            "error": f"Missing required sections: {', '.join(missing_sections)}"
        }), 400

    data = {
        "imie1": frontend_data["osoba"].get("imie1", ""),
        "imie2": frontend_data["osoba"].get("imie2", ""),
        "data_urodzenia": frontend_data["osoba"].get("dataUrodzenia", "").replace("-", ""),
        "miejsce_urodzenia": frontend_data["osoba"].get("miejsceUrodzenia", ""),
        "miejsce_zamieszkania": frontend_data["osoba"].get("miejsceZamieszkania", ""),
        "ulica": frontend_data["osoba"].get("ulica", ""),
        "zatrudniony_w": frontend_data["osoba"].get("zatrudnionyW", ""),
        
        "data_wypadku": frontend_data["wypadek"].get("dataWypadku", "").replace("-", ""),
        "data_wypadku_szczegoly": frontend_data["wypadek"].get("dataWypadkuSzczegoly", ""),
        "miejsce_wypadku": frontend_data["wypadek"].get("miejsceWypadku", ""),
        "godzina_wypadku": frontend_data["wypadek"].get("godzinaWypadku", ""),
        "godzina_rozpoczecia": frontend_data["wypadek"].get("godzinaRozpoczecia", ""),
        "godzina_zakonczenia": frontend_data["wypadek"].get("godzinaZakonczenia", ""),
        "rodzaj_czynnosci": frontend_data["wypadek"].get("rodzajCzynnosci", ""),
        "opis_okolicznosci": frontend_data["wypadek"].get("opisOkolicznosci", ""),
        
        "wypadek_maszyna": frontend_data["maszyny"].get("wypadekMaszyna", ""),
        "nazwa_maszyny": frontend_data["maszyny"].get("nazwaMaszyny", ""),
        "sprawnosc": frontend_data["maszyny"].get("sprawnosc", ""),
        "zabezpieczenia": frontend_data["maszyny"].get("zabezpieczenia", ""),
        "rodzaj_srodkow": frontend_data["maszyny"].get("rodzajSrodkow", ""),
        "sprawnosc_srodkow": frontend_data["maszyny"].get("sprawnoscSrodkow", ""),
        "asekuracja": frontend_data["maszyny"].get("asekuracja", ""),
        "obowiazek_dwoch_osob": frontend_data["maszyny"].get("obowiazekDwochOsob", ""),
        "bhp": frontend_data["maszyny"].get("bhp", ""),
        "przygotowanie": frontend_data["maszyny"].get("przygotowanie", ""),
        "szkolenie": frontend_data["maszyny"].get("szkolenie", ""),
        "ocena_ryzyka": frontend_data["maszyny"].get("ocenaRyzyka", ""),
        "srodki_zmniejszenia": frontend_data["maszyny"].get("srodkiZmniejszenia", ""),
        "stan_nietrzezwosci": frontend_data["maszyny"].get("stanNietrzezwosci", ""),
        "badanie_trzezwosci": frontend_data["maszyny"].get("badanieTrzezwosci", ""),
        "czynnosci_wyjasniajace": frontend_data["maszyny"].get("czynnosciWyjasniajace", ""),
        "opis_czynnosci": frontend_data["maszyny"].get("opisCzynnosci", ""),
        "data_pomoc": frontend_data["pomoc"].get("dataPomoc", "").replace("-", ""),
        "nazwa_placowki": frontend_data["pomoc"].get("nazwaPlacowki", ""),
        "okres_hospitalizacji": frontend_data["pomoc"].get("okresHospitalizacji", ""),
        "rozpoznany_uraz": frontend_data["pomoc"].get("rozpoznanyUraz", ""),
        "niezdolnosc_od": frontend_data["pomoc"].get("niezdolnoscOd", "").replace("-", ""),
        "niezdolnosc_do": frontend_data["pomoc"].get("niezdolnoscDo", "").replace("-", ""),
        "zwolnienie_lekarskie": frontend_data["pomoc"].get("zwolnienieLekarskie", ""),
        "miejscowosc": frontend_data["pomoc"].get("miejscowosc", ""),
        "data_podpisu": frontend_data["pomoc"].get("dataPodpisu", "").replace("-", ""),
        "podpis_poszkodowanego": frontend_data["pomoc"].get("podpisPoszkodowanego", ""),
        "protokolanci": frontend_data["pomoc"].get("protokolanci", ""),

        "imie": f"{frontend_data['osoba'].get('imie1', '')} {frontend_data['osoba'].get('imie2', '')}".strip(),
        "poczta": frontend_data["osoba"].get("miejsceZamieszkania", ""),
        "opis_wypadku": frontend_data["wypadek"].get("opisOkolicznosci", ""),
        "opis_maszyny": frontend_data["maszyny"].get("nazwaMaszyny", ""),
        "rodzaj_urazow": frontend_data["pomoc"].get("rozpoznanyUraz", ""),
    }

    try:
        import uuid
        filename = f"ZUS_EWYP_{uuid.uuid4().hex[:8]}.pdf"
        pdf_path = convertJsonToPdf(data, filename, "WYJASNIENIE")
        
        return send_file(
            pdf_path,
            mimetype='application/pdf',
            as_attachment=True,
            download_name='ZUS_EWYP_wypelniony.pdf'
        )
    
    except Exception as e:
        print(f"Błąd: {str(e)}")
        return jsonify({"error": str(e)}), 500
