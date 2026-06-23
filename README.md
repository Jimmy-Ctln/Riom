# Riom

SEO-first showcase website for the music artist **Riom**, built to generate
booking requests (weddings, corporate events, private events), present the
artist, and let visitors listen to the music.

The site is a **single page**: no router, every "page" from the brief (Home,
Mario, Musicians, Listen, Videos, Gallery, Services, References, Contact) is
an anchored section stacked in `index.astro`, navigated by scrolling.

## Tech stack

- [Astro](https://astro.build) (SSG, SEO-first)
- TailwindCSS
- TypeScript
- Hosting: Vercel

## Repo structure

```
/claude     → context files (design rules, expected content per page, SEO rules)
              used to guide code generation, no code lives here
/frontend   → the actual Astro project
```

See [`CLAUDE.md`](./CLAUDE.md) for the project's generation rules.

### `frontend/` layout

```
src/
├── components/   → page sections (Hero, MarioSection, GallerySection, ...)
├── layouts/      → Layout.astro (head, SEO meta, shared structure)
├── pages/        → index.astro (the only page, assembling every section)
└── styles/       → global.css (Tailwind, animations, loading skeleton)
public/
├── images/       → photos and logos (WebP)
├── music/        → the band's tracks (MP3)
└── video/        → the looping hero video
```

## Getting started

```sh
cd frontend
npm install
npm run dev       # http://localhost:4321
```

Other useful commands, run from `frontend/`:

| Command             | Action                                          |
| :------------------ | :---------------------------------------------- |
| `npm run build`     | Production build into `frontend/dist/`          |
| `npm run preview`   | Preview the build locally before deploying      |
| `npm run astro ...` | Astro CLI commands (`astro add`, `astro check`) |
