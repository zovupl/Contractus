# Contractus — Centrum Odszkodowań

Wielostronicowa strona kancelarii odszkodowawczej Contractus. Zbudowana przez agencję **ZOVU**.

## Kierunki (podstrony usług)
- **Służebność przesyłu** — odszkodowanie za słupy i linie na działce (główna specjalizacja)
- **Szkody komunikacyjne** — dochodzenie zaniżonych wypłat po wypadku
- **Sankcja kredytu darmowego** — zwrot odsetek i prowizji

## Stack
- Vite + React 18 + TypeScript
- React Router (wielostronicowa nawigacja)
- Style: globalny CSS z tokenami (biały, korporacyjny motyw)
- Kompatybilne z Lovable (React + Vite)

## Uruchomienie lokalne
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produkcja -> dist/
```

## Do uzupełnienia (placeholdery)
- Dane firmy: nazwa, NIP, adres, telefon, e-mail (`src/data.ts` → `contact`)
- Zdjęcia zespołu / radcy prawnego
- Realne opinie, statystyki i „nasze wygrane"
- Podłączenie wysyłki formularzy (`src/components/LeadForm.tsx` — sekcja TODO)
- Treść polityki prywatności (weryfikacja prawna)

---
Projekt: ZOVU dla klienta Contractus.
