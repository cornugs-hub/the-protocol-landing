# The Protocol — Landing Page

React + Vite + Tailwind landing for [activateprotocol.com](https://activateprotocol.com).

## Stack

- Vite + React + TypeScript
- Tailwind CSS v3
- Static HTML for `/privacy` and `/terms`
- Deployed via GitHub Pages with custom domain

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

Output goes to `dist/`. Includes landing + `privacy.html` + `terms.html` + favicon + CNAME.

## Deploy

Push to `main` triggers GitHub Action that builds and publishes to GitHub Pages.

## Custom domain setup

1. GitHub repo → Settings → Pages → Custom domain: `activateprotocol.com`
2. DNS provider for `activateprotocol.com`:
   - `A` record `@` → `185.199.108.153`
   - `A` record `@` → `185.199.109.153`
   - `A` record `@` → `185.199.110.153`
   - `A` record `@` → `185.199.111.153`
   - `CNAME` record `www` → `<your-github-username>.github.io`
3. Wait DNS propagation (~10-60 min)
4. Enable "Enforce HTTPS" once cert provisions

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
  CNAME                     ← activateprotocol.com
```
