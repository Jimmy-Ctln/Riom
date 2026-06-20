# SEO — Riom

## Objectif

Positionner Riom sur les recherches Google liées aux groupes de musique événementiels.

---

## Local SEO

- Île-de-France
- Paris
- Val-d’Oise

---

## Mots-clés

- Mario guitare voix solo
- artiste acoustique Paris
- animation musicale entreprise
- artiste acoustique événementiel
- première partie d'artiste
- concert privé à domicile
- artiste acoustique festival théâtre
- artiste guitare voix toute la France

---

## Règles SEO

- 1 page = 1 intention
- H1 unique
- meta titles optimisés
- 400 à 800 mots sur pages importantes
- contenu naturel orienté conversion

---

## Performance

- Lighthouse > 95
- images WebP
- lazy loading
- rendu statique Astro

---

## SEO technique

- domaine de production : https://riom.biz (configuré dans `astro.config.mjs` via `site`)
- sitemap automatique via `@astrojs/sitemap` (`/sitemap-index.xml`)
- `/public/robots.txt` référence le sitemap
- balises par page (gérées dans `Layout.astro`) : canonical, Open Graph (`og:title`, `og:description`, `og:image`, `og:url`), Twitter Card
- données structurées JSON-LD `MusicGroup` (nom, genre, zone de service, réseaux sociaux) injectées dans `Layout.astro`
