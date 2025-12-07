# Dokumentacja Techniczna - Frontend

## 1. Architektura Frontend (Next.js)

Frontend aplikacji (`frontend/hacknation`) został zbudowany w nowoczesnym stacku technologicznym, zapewniającym wydajność i responsywność.

*   **Framework**: **Next.js 16** (korzystający z App Router).
*   **Biblioteka UI**: **React 19**.
*   **Style**: **Tailwind CSS 4** (do szybkiego stylowania komponentów).
*   **Zadania**:
    *   Prezentacja formularzy zgłoszeniowych (I Etap).
    *   Interfejs dla pracownika ZUS do weryfikacji spraw (II Etap).
    *   Komunikacja z Backendem poprzez REST API.

## 2. Instrukcja Uruchomienia

### Wymagania systemowe
*   Node.js 18+

### Uruchomienie
1. Przejdź do katalogu frontendu:
   ```bash
   cd frontend/hacknation
   ```
2. Zainstaluj zależności Node.js:
   ```bash
   npm install
   ```
3. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```
   Aplikacja będzie dostępna pod adresem `http://localhost:3000` (domyślnie Next.js).
