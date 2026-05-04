# The Protocol — Landing Page

React + Vite + Tailwind landing page for [activateprotocol.com](https://activateprotocol.com).

## Stack

- Vite + React + TypeScript
- Tailwind CSS v3
- Static HTML for `/privacy` and `/terms`
- Deployed via GitHub Pages

## Local dev

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output goes to `dist/`. Includes landing + `privacy.html` + `terms.html` + favicon.

## Deploy

Push to `main` triggers a GitHub Action that builds and publishes to GitHub Pages.

## Structure

```
src/
  App.tsx                   ← layout root
  main.tsx
  index.css                 ← Tailwind + custom utilities
  components/
    Nav.tsx
    Hero.tsx                ← Forja tu protocolo + phone mockup
    Pillars.tsx             ← 4 pillars: Body/Fuel/Spirit/Mind
    Process.tsx             ← Tres pasos. Cero excusas.
    Code.tsx                ← Es para ti si... / No es para ti si...
    FinalCta.tsx            ← El protocolo no se descarga. Se ejecuta.
    Footer.tsx
    Icon.tsx                ← Material Symbols wrapper
public/
  privacy.html              ← Privacy Policy ES + EN
  terms.html                ← Terms of Service ES + EN
  favicon.svg
```
