# CLAUDE — VST Landing Pages

> Landing page statiche per Vertical Sailing Tour, deploy automatico su GitHub Pages.

## Scheda progetto

| Cosa | Valore |
|---|---|
| Repo | `CryptoPannoz/vst-landing-pages` (pubblico) |
| Deploy | GitHub Pages — push su `main` → live in ~1 min |
| Stack | HTML/CSS/JS puri, nessun build step, nessuna dipendenza |
| Collaboratore | Lorenzo (edita via github.dev / web editor — vedi README) |

## Struttura

- `sail-climb-mediterranean/` — landing tour condivisi (da €2,290)
- `private-tour-mediterranean/` — landing tour privati (da €2,656)
- `assets/js/data.js` — **unica fonte** per itinerari (4 destinazioni × 8 giorni) e partenze 2026
- `assets/css/style.css` — design system (token in cima: orange `#f76b1d`, ink `#0a1220`)
- `assets/fonts/` — Morn woff2 self-hosted (Regular/Medium/DemiBold/Bold/Black)
- `assets/img/` — foto prese dal sito live, ottimizzate

## Regole

- ✅ Itinerari e date si cambiano SOLO in `data.js` (sono renderizzati su entrambe le pagine).
- ❌ I form non inviano ancora: endpoint CRM/Airtable da collegare prima della produzione (TODO in `main.js`).
- ❌ Nessun tracking ancora: GA4/Pixel da aggiungere quando si attacca al dominio.
- La brand identity di riferimento è in `vertical-sailing-tour/Style/style.md`.
