# Landingspagina — Blossom & Barley

One-page site (hero, merkverhaal, hoe-werkt-het, smaken, CTA + nieuwsbrief, community, footer) + `privacy.html`.
Gebouwd door Claude op 10 nov 2026, in pure HTML/CSS/JS (geen build-stap), klaar voor GitHub Pages.
Copy: `../copy/BB_landingspagina-copy.md` · huisstijl: `../../02_research-concept/merkidentiteit.md`

## Bestanden
```
index.html        → de landingspagina
privacy.html      → korte privacyverklaring (GDPR, link vanuit formulier + footer)
css/style.css     → huisstijl (kleuren als CSS-variabelen, Bodoni Moda + DM Sans via Google Fonts)
js/main.js        → scroll-animaties + voorbeeldformulier
img/              → 7 foto's (bijgesneden uit de herlabelde foto's in photoshop/batch-input) + logo's (SVG)
```

## Briefing-eisen
| Eis | Waar |
|---|---|
| Hero | `index.html` sectie 1 (headline "Steep. Chill. Share.", 2 knoppen, productfoto in boogvorm) |
| Merkverhaal | sectie 2 "Brewed cold, shared warm." |
| CTA | hero-knoppen, nav-knop en sectie 5 "Join the brew crew." |
| ≥ 3 visuals | 7 productfoto's (hero, verhaal, 4 smaakkaarten, community) + logo/bloem-icoon |
| Embedded MailerLite-form | sectie 5: blok tussen `MAILERLITE-START` en `MAILERLITE-EINDE` → **embedcode nog in te plakken** |

## Nog te doen
1. **MailerLite-embedcode** plakken (MailerLite › Forms › Embedded forms › "Blossom & Barley nieuwsbrief" › Embed › HTML code) op de plek van het voorbeeldformulier. De CSS (sectie "MailerLite") zet het in de huisstijl.
2. **Contactadres** invullen in `privacy.html` (zoek op `[contactadres invullen]`).
3. **Publiceren op GitHub Pages:**
   - github.com › New repository › naam `blossom-and-barley` › Public › Create.
   - "uploading an existing file" › sleep de *inhoud* van deze map erin (index.html moet in de root staan) › Commit.
   - Settings › Pages › Source: *Deploy from a branch* › Branch `main` / `(root)` › Save.
   - Na ± 1 minuut: `https://<gebruikersnaam>.github.io/blossom-and-barley/` → link in README + verslag.
4. Testinschrijving doen via de live pagina en checken dat ze in MailerLite binnenkomt.
5. Screenshots (desktop + mobiel) → `04_output/website/`.
6. Optioneel: Firefly-beelden met zomerse achtergrond in de plaats van de studiofoto's (zelfde bestandsnamen in `img/` overschrijven, verhouding 4:5 of 16:10).

## Lokaal bekijken
Dubbelklik `index.html`, of in deze map: `python -m http.server` → http://localhost:8000
