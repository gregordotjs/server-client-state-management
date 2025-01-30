# Upravljanje uporabnikov s TanStack Query, Zustand, Material UI in Vite.js v TypeScriptu

Ta aplikacija omogoča preprosto upravljanje uporabnikov z uporabo TanStack Query za pridobivanje podatkov iz strežnika, Zustand za upravljanje lokalnega stanja na strani odjemalca, Material UI za lep dizajn uporabniškega vmesnika ter Vite.js za hitro gradnjo in razvoj aplikacije. Projekt je napisan v TypeScriptu za boljšo tipizacijo.

## Funkcionalnosti

- Pridobivanje in prikazovanje uporabnikov iz strežnika z uporabo TanStack Query
- Filtriranje uporabnikov na osnovi vnesenega iskalnega pogoja z uporabo Zustand za upravljanje lokalnega stanja
- Uporaba Material UI za uporabniški vmesnik
- Uporaba TanStack Query za preprosto pridobivanje in shranjevanje podatkov s strežnika
- Uporaba Zustand za upravljanje lokalnega stanja, kot je iskalni niz

## Predpogoji

Za zagon aplikacije morate imeti nameščene naslednje stvari:

- [Node.js](https://nodejs.org/) (priporočena različica: LTS)
- [npm](https://www.npmjs.com/) (ali [yarn](https://yarnpkg.com/), če raje uporabljate Yarn)

## Namestitev

1. Klonirajte repozitorij:

```bash
git clone https://github.com/gregordotjs/context-provider-sample.git
```

2. Pojdite v mapo projekta:

```bash
cd ime-projekta
```

3. Namestite odvisnosti:

Če uporabljate npm:

```bash
npm install
```

Če uporabljate yarn:

```bash
yarn install
```

## Zagon aplikacije

Za zagon aplikacije v razvojnem okolju uporabite naslednji ukaz:

Če uporabljate npm:

```bash
npm run dev
```

Če uporabljate yarn:

```bash
yarn dev
```

Po tem odprite brskalnik in pojdite na http://localhost:5173, kjer boste lahko videli aplikacijo v akciji.

## Tehnologije

- React: JavaScript knjižnica za gradnjo uporabniških vmesnikov
- TanStack Query: Knjižnica za pridobivanje podatkov s strežnika in enostavno upravljanje asinhronih zahtev
- Zustand: Enostavna in fleksibilna knjižnica za upravljanje lokalnega stanja v aplikacijah
- Material UI: Komponentna knjižnica za hitro ustvarjanje lepega uporabniškega vmesnika
- Vite.js: Zelo hiter razvojni strežnik in orodje za gradnjo
- TypeScript: Statistično tipiziranje za boljšo varnost in obvladljivost kode

## Kako aplikacija deluje

1. TanStack Query pridobiva uporabniške podatke iz strežnika, jih shranjuje v predpomnilnik in omogoča ponovno nalaganje teh podatkov, ko je to potrebno. To omogoča hitro in učinkovito nalaganje podatkov brez potrebe po ponovnem pridobivanju teh podatkov ob vsakem ponovnem zagonu aplikacije.

2. Zustand omogoča preprosto upravljanje lokalnega stanja, kot je iskalni niz, ki ga uporabnik vnese, da filtrira seznam uporabnikov. Ko uporabnik vnese iskalni niz, Zustand posodobi to stanje in prikaže filtrirane uporabnike.
