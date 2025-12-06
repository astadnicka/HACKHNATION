import re

class NERExtractor:
    def __init__(self):
        self.months = {
            'stycznia': '01', 'lutego': '02', 'marca': '03', 'kwietnia': '04',
            'maja': '05', 'czerwca': '06', 'lipca': '07', 'sierpnia': '08',
            'września': '09', 'października': '10', 'listopada': '11', 'grudnia': '12'
        }
        
        self.patterns = {
            "date_numeric": r"\b\d{4}-\d{2}-\d{2}\b|\b\d{2}[\.-]\d{2}[\.-]\d{4}(?:r\.?)?|(?:\d\s){3,}-\d\s(?:\d\s){3,}",
            "date_word": r"(\d{1,2})\s+(" + "|".join(self.months.keys()) + r")\s+(\d{4})",
            "pesel": r"\b\d{11}\b",
            "nip": r"\b\d{3}-\d{3}-\d{2}-\d{2}\b|\b\d{3}-\d{2}-\d{2}-\d{3}\b|\b\d{10}\b",
            "person_context": r"(?:Pan/Pani|Imię i nazwisko|Poszkodowany|DANE IDENTYFIKACYJNE POSZKODOWANEGO)\.?\s*[:\.]?\s*\n?([A-ZŁŚŻŹĆŃÓ][a-ząćęłńóśźż]+\s+[A-ZŁŚŻŹĆŃÓ][a-ząćęłńóśźż\-]+)",
            "employer_context": r"(?:zatrudniony/a w|zatrudniony|zakład pracy|pracodawca|płatnika składek)\s*[:\.]?\s*([^\n\.,]+)"
        }
        
        self.ignored_dates = ["2002", "2016", "2011", "1997", "2024"] 

    def identify_document_type(self, text):
        lower_text = text.lower()
        if "opinia" in lower_text and "kwalifikacji" in lower_text:
            return "opinia"
        if "zapis wyjaśnień" in lower_text or "wyjaśnień poszkodowanego" in lower_text:
            return "wyjasnienie"
        if "karta wypadku" in lower_text:
            return "karta_wypadku"
        if "zawiadomienie o wypadku" in lower_text or "ewyp" in lower_text:
            return "zawiadomienie"
        return "unknown"

    def extract_fields(self, text, document_type="unknown"):
        clean_text = text.replace('  ', ' ')
        
        if document_type == "unknown":
            document_type = self.identify_document_type(text)

        extracted_data = {
            "metadata": {
                "document_type": document_type,
            },
            "fields": {
                "data_wypadku": self._extract_date(clean_text),
                "poszkodowany": self._extract_person(text),
                "pracodawca": self._extract_employer(clean_text),
                "opis": self._extract_description(text, document_type),
                "uraz": self._extract_injury(text),
                "wniosek": self._extract_conclusion(text, document_type)
            }
        }
        return extracted_data

    def _extract_date(self, text):
        context_match = re.search(r"Data wypadku.*?" + f"({self.patterns['date_numeric']})", text, re.IGNORECASE | re.DOTALL)
        if context_match:
             value = context_match.group(1).replace(" ", "").replace("r.", "").strip()
             if not any(ign in value for ign in self.ignored_dates):
                 return {"value": value}

        word_matches = re.search(self.patterns["date_word"], text.lower())
        if word_matches:
            day, month_name, year = word_matches.groups()
            month_num = self.months.get(month_name, '01')
            return {"value": f"{day.zfill(2)}.{month_num}.{year}"}

        matches = re.findall(self.patterns["date_numeric"], text)
        valid_matches = []
        for m in matches:
            val = m.replace(" ", "").replace("r.", "").strip()
            if not any(ign in val for ign in self.ignored_dates):
                valid_matches.append(val)
        
        if valid_matches:
            return {"value": valid_matches[0]}
            
        return {"value": None}

    def _extract_person(self, text):
        person_data = {"imie": None, "nazwisko": None, "pesel": None}
        
        pesel_match = re.search(self.patterns["pesel"], text)
        if pesel_match:
            person_data["pesel"] = pesel_match.group(0)

        blacklist = ["ZUS", "NIP", "REGON", "PESEL", "Data", "Miejsce", "Ulica", "Numer", "Kod", "Miejscowość", "Opis", "Sklad", "Poligrafia"]
        
        name_match = re.search(self.patterns["person_context"], text, re.IGNORECASE)
        if name_match:
            full_name = name_match.group(1).strip()
            if not any(b.lower() in full_name.lower() for b in blacklist):
                parts = full_name.split()
                if len(parts) >= 2:
                    person_data["imie"] = parts[0]
                    person_data["nazwisko"] = " ".join(parts[1:])
        
        return person_data

    def _extract_employer(self, text):
        employer_data = {"nazwa": None, "nip": None}
        
        nip_match = re.search(self.patterns["nip"], text)
        if nip_match:
            employer_data["nip"] = nip_match.group(0)
            
        emp_match = re.search(self.patterns["employer_context"], text, re.IGNORECASE)
        if emp_match:
            employer_data["nazwa"] = emp_match.group(1).strip()
                    
        return employer_data

    def _extract_description(self, text, doc_type):
        description = None
        lower_text = text.lower()

        if doc_type == "zawiadomienie":
            start_keywords = ["szczegółowy opis okoliczności", "okoliczności, miejsca i przyczyn"]
        elif doc_type == "wyjasnienie":
            start_keywords = ["oświadczam, co następuje", "okoliczności i przyczyn wypadku"]
        elif doc_type == "opinia":
            start_keywords = ["uzasadnienie", "uzasadnienie:", "ustalenia stanu faktycznego", "stan faktyczny", "opis zdarzenia"]
        else:
            start_keywords = ["okoliczności wypadku", "przebieg zdarzenia"]

        start_idx = -1
        for kw in start_keywords:
            idx = lower_text.find(kw)
            if idx != -1:
                start_idx = idx + len(kw)
                break
        
        if start_idx != -1:
            end_idx = -1
            possible_ends = ["\n6.", "\nCzy", "\nŚwiadkiem", "--- Page", "wniosek", "podpis", "data", "starszy inspektor"]
            
            min_dist = 5000
            for end_marker in possible_ends:
                found_end = lower_text.find(end_marker.lower(), start_idx)
                if found_end != -1 and (found_end - start_idx) < min_dist:
                    min_dist = found_end - start_idx
                    end_idx = found_end
            
            if end_idx != -1:
                 description = text[start_idx:end_idx].strip()
            else:
                description = text[start_idx: start_idx + 1500].strip()

            noise_phrases = [
                "Podaj szczegółowy opis okoliczności, miejsca i przyczyn wypadku",
                "(opis, przyczyny techniczne, ludzkie, organizacyjne)",
                "- należy uzupełnić, jeżeli w zawiadomieniu",
                "szczegółowo opisane okoliczności",
                "Sklad: Poligrafia ZUS", "Zakład Ubezpieczeń Społecznych",
                "Strona 1 z", "Strona 2 z", "Strona 3 z"
            ]
            for noise in noise_phrases:
                description = re.sub(re.escape(noise), "", description, flags=re.IGNORECASE)

            description = description.strip(" :.-_,\n")

        return {"value": description}

    def _extract_injury(self, text):
        injury = None
        lower_text = text.lower()
        keywords = ["rodzaj doznanych urazów", "rozpoznany uraz", "rozpoznano:", "stwierdzono uraz", "uraz:"]
        
        start_idx = -1
        for kw in keywords:
            idx = lower_text.find(kw)
            if idx != -1:
                start_idx = idx + len(kw)
                break
        
        if start_idx != -1:
            end_idx = -1
            possible_ends = ["\n5.", "\nniezdolność", "--- page", "czy wypadek", "4. wypadek"]
            
            min_dist = 400
            for end_kw in possible_ends:
                found = lower_text.find(end_kw, start_idx)
                if found != -1 and (found - start_idx) < min_dist:
                    min_dist = found - start_idx
                    end_idx = found
            
            if end_idx != -1:
                injury = text[start_idx:end_idx].strip()
            else:
                injury = text[start_idx:start_idx+200].strip()
            
            injury = injury.strip(" :.-_\n")

        return {"value": injury}

    def _extract_conclusion(self, text, doc_type):
        if doc_type != "opinia":
            return {"value": None}
        
        lower_text = text.lower()
        
        start_keywords = ["wniosek:", "opinia:", "wnoszę o:", "proponuję:"]
        start = -1
        for kw in start_keywords:
            idx = lower_text.find(kw)
            if idx != -1:
                start = idx + len(kw)
                break
        
        if start != -1:
            end_keywords = ["uzasadnienie", "podpis", "data", "--- page"]
            end = -1
            min_dist = 2000
            
            for kw in end_keywords:
                idx = lower_text.find(kw, start)
                if idx != -1 and (idx - start) < min_dist:
                    min_dist = idx - start
                    end = idx
            
            if end != -1:
                return {"value": text[start:end].strip()}
            else:
                return {"value": text[start:start+500].strip()}
             
        return {"value": None}