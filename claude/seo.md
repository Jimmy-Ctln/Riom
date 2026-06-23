# SEO — Riom

## Objective

Rank Riom on Google searches related to event/wedding/corporate music acts.

---

## Local SEO

- Île-de-France
- Paris
- Val-d'Oise

---

## Keywords

Target audience searches in French, so keywords are kept in French on purpose:

- Mario guitare voix solo
- artiste acoustique Paris
- animation musicale entreprise
- artiste acoustique événementiel
- première partie d'artiste
- concert privé à domicile
- artiste acoustique festival théâtre
- artiste guitare voix toute la France

---

## SEO rules

- 1 page = 1 intent
- single H1
- optimized meta titles
- 400 to 800 words on key pages
- natural, conversion-oriented content

---

## Performance

- Lighthouse > 95
- WebP images
- lazy loading
- Astro static rendering

---

## Technical SEO

- production domain: https://riom.biz (configured in `astro.config.mjs` via `site`)
- automatic sitemap via `@astrojs/sitemap` (`/sitemap-index.xml`)
- `/public/robots.txt` references the sitemap
- per-page tags (handled in `Layout.astro`): canonical, Open Graph (`og:title`, `og:description`, `og:image`, `og:url`), Twitter Card
- `MusicGroup` JSON-LD structured data (name, genre, service area, social links) injected in `Layout.astro`
