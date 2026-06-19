# CLAUDE.md — Projet Riom

## Objectif du projet

Créer un site vitrine SEO-first pour le groupe de musique Riom.

Objectif principal :

- générer des demandes de booking (mariages, entreprises, événements privés)
- présenter le groupe de manière premium
- permettre l’écoute de musique et la découverte du groupe
- maximiser la conversion via contact

---

## Architecture globale du projet

Le projet est structuré en deux parties :

### 1. Dossier de contexte Claude

Tous les fichiers de spécification et de règles sont situés dans :

/claude

Ce dossier contient uniquement des fichiers de contexte pour guider la génération de code.

### Structure du dossier /claude :

/claude
/design - mockups (un fichier par page : home, music, gallery, etc.)
design.md (règles UI : couleurs, typographie, style global)
pages.md (description de chaque page + objectifs + contenu attendu)
seo.md (règles SEO + mots-clés + structure de référencement)

---

### 2. Dossier de production front-end

Tout le code généré DOIT être écrit dans :

/frontend

Ce dossier contient :

- projet Astro.js
- composants
- pages du site
- assets publics
- fichiers MP3

---

## Structure attendue du dossier /frontend

Le code doit respecter cette organisation :

/frontend
/src
/pages
/components
/layouts
/public
/music (fichiers MP3 du groupe)
/images
astro.config.mjs
tailwind.config.mjs

---

## Stack technique

- Astro.js (SSG, SEO-first)
- TailwindCSS
- TypeScript
- React uniquement si nécessaire (ex : audio player avancé)
- Hébergement : Vercel

---

## Règles strictes de génération

Claude doit respecter les règles suivantes :

### 1. Aucune invention de structure

- Ne pas créer de dossiers ou fichiers non définis
- Ne pas ajouter de complexité inutile

### 2. Respect des fichiers de contexte

Claude doit toujours utiliser :

- /claude/design/design.md pour le style global
- /claude/design/mockups/\* pour la structure visuelle des pages
- /claude/pages.md pour les objectifs et contenus des pages
- /claude/seo.md pour toutes les optimisations SEO

### 3. Respect des mockups

Chaque page doit respecter STRICTEMENT son mockup associé dans :

/claude/design/mockups/

Le mockup est la source principale de layout.

Le design system (design.md) est secondaire et sert uniquement à uniformiser les styles.

---

### 4. SEO obligatoire

Toutes les pages publiques doivent être optimisées SEO :

- 1 page = 1 intention SEO
- structure H1 / H2 correcte
- contenu textuel suffisant (400 à 800 mots sur pages importantes)
- meta titles optimisés
- intégration des mots-clés locaux (Île-de-France, Paris, Val-d’Oise)

---

### 5. Performance

Le site doit être :

- ultra rapide (Lighthouse > 90)
- mobile-first
- optimisé images (WebP si possible)
- minimal en JavaScript

---

### 6. Audio / musique

- les fichiers MP3 sont stockés dans :
  /frontend/public/music
- lecture via player custom ou WaveSurfer.js si nécessaire
- pas de complexité inutile

---

## Règle importante de développement

Claude doit :

- privilégier la simplicité
- éviter toute sur-ingénierie
- ne pas générer de code inutile
- demander confirmation si une information est manquante

---

## Gestion des incertitudes

Si une partie du projet n’est pas claire :

- Claude doit poser des questions
- ne pas inventer de structure ou de fonctionnalité
- attendre validation avant de continuer

---

## Convention de commits

Claude doit respecter le format Conventional Commits pour chaque commit :

```
<type>(<scope>): <description>
```

- `type` : `feat`, `fix`, `chore`, `style`, `refactor`, `docs`, `perf`, `test`
- `scope` : la zone concernée entre parenthèses (ex : `home`, `nav`, `mario`, `frontend`, `seo`)
- `description` : courte, à l'impératif, en français, sans majuscule ni point final

Exemples :

- `feat(home): ajoute le hero avec image et CTA`
- `fix(nav): corrige la fermeture du menu au clic sur un lien`
- `chore(mockups): renomme les fichiers de design`

Un commit = un changement cohérent. Ne pas mélanger plusieurs sujets dans un seul commit.

Règles supplémentaires :

- Séparer les commits par sujet : ne jamais tout envoyer en un seul commit massif, même pour une session de travail longue
- Ne jamais commit sur `main` : tout le travail se fait sur `dev` (ou une branche de feature dérivée de `dev`)

---

## Objectif final

Le site Riom doit être :

- esthétique
- rapide
- SEO performant
- orienté conversion
- facilement maintenable
