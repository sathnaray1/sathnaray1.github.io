# Sathya Narayanan — Portfolio

A personal portfolio site for Sathya Narayanan, Senior Director of Product.
Warm-cinematic, editorial single-page scroller built with [Astro](https://astro.build).

**Live:** https://sathnaray1.github.io

## Stack
- **Astro 5** — static site, zero client framework
- **Type:** Fraunces (display) · Hanken Grotesk (body) · JetBrains Mono (accents) via Google Fonts
- **Images:** optimized at build via `astro:assets` (WebP, responsive)
- Vanilla JS for scroll progress, reveal-on-scroll, count-up stats, spotlight cards, custom cursor
- Respects `prefers-reduced-motion`

## Develop
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the production build
```

## Edit content
All copy lives in **`src/data/content.ts`** — a single source of truth.
Items marked `// EDIT` (extra travel destinations, a personal passion) are placeholders
ready to fill in. Components in `src/components/` render each section.

### Photos
Add images to `src/assets/` and reference them via `astro:assets` `<Image>` (auto-optimized),
or drop static files into `public/`. The hero portrait is `src/assets/sathya.jpg`.

## Deploy
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
