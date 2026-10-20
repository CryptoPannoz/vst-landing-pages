# VST Landing Pages

Static landing pages for **Vertical Sailing Tour** — rebuilt from the WordPress
originals as pure HTML/CSS/JS, deployed automatically with **GitHub Pages**.

| Page | Path | Mirrors |
|---|---|---|
| Chooser / index | `/` | — |
| Shared tour | `/sail-climb-mediterranean/` | verticalsailingtour.com/sail-climb-mediterranean/ |
| Private tour | `/private-tour-mediterranean/` | verticalsailingtour.com/private-tour-mediterranean/ |

## How it deploys

Every push to `main` is published automatically by GitHub Pages.
No build step, no dependencies — what you commit is what goes live (~1 minute later).

## How to edit (for Lorenzo 👋)

You don't need anything installed. Two ways:

1. **Quick edits in the browser** — open a file on GitHub, click the ✏️ pencil,
   change the text, press **Commit changes**. Done, live in a minute.
2. **Full editor in the browser** — on the repo page press the **`.` (dot) key**
   (or change the URL from `github.com` to `github.dev`). VS Code opens in the
   browser; edit, then commit from the Source Control tab.

### Where things live

| What you want to change | File |
|---|---|
| **Itineraries (day-by-day) & route stats** | `assets/js/data.js` → `VST_ITINERARIES` |
| **Departure dates / availability 2026** | `assets/js/data.js` → `VST_DEPARTURES` (status: `open` / `few` / `sold`) |
| Texts of the shared tour page | `sail-climb-mediterranean/index.html` |
| Texts of the private tour page | `private-tour-mediterranean/index.html` |
| Prices | search `€ 2,290` / `€ 2,656` in the two HTML files |
| Photos | `assets/img/` (keep the same file names to swap a photo) |
| Colors / fonts / styling | `assets/css/style.css` (tokens at the top) |

The itineraries appear on **both** pages but are written **once** in `data.js`.

## Still TODO before production

- [ ] **Forms**: they currently show a success message but don't send anywhere.
      Wire them to the CRM / Airtable webhook or an email service (see the
      `TODO` in `assets/js/main.js`).
- [ ] **Tracking**: add GA4 / Meta Pixel snippets before attaching to the domain.
- [ ] Custom domain: set it in repo **Settings → Pages** and point DNS.

## Brand

- Font: **Morn** (DemiBold headings, Regular body) — self-hosted in `assets/fonts/`
- Orange: `#f76b1d` · Ink: `#0a1220` · Sea: `#3fb4c4`
- Photos taken from the live site (property of Vertical Sailing Tour S.r.l.)
