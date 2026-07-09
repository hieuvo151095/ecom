# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

ECO Me — mobile fintech PWA prototype (Vietnam). Static HTML/CSS/JS, no framework, no build step. Currently in the prototype phase: all screens are in a single `index.html` with state managed by vanilla JS.

## Stack

- **Frontend:** HTML5 + CSS3 + vanilla JS — no framework, no bundler, no transpiler
- **Styles:** `styles/main.css` — single file, CSS custom properties for all design tokens
- **Dev server:** `python3 -m http.server 8080` (static file serving)
- **Package manager:** npm (devDependencies only — Playwright for UI verification)
- **Browser testing:** Playwright + Chromium via `node_modules/.bin/playwright`

## Running the dev server

```bash
lsof -ti:8080 | xargs kill -9 2>/dev/null; python3 -m http.server 8080 &
```

Open `http://localhost:8080` in a browser. No build step required.

## UI Verification

Use the `/verify` skill to confirm UI changes work correctly in the browser. It internally uses the `verifier-browser` project skill:

```
/verify
```

For manual verification, see `.claude/skills/verifier-browser/SKILL.md` — it contains scripts for taking screenshots of all key screens and running a color audit.

**First-time setup** (per machine, after `npm install`):
```bash
npx playwright install chromium
```

## Design system

Monochrome palette — black/grey/white only:

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#111111` | CTA buttons, active states |
| `--primary-dark` | `#000000` | Links, hover, active text |
| `--primary-light` | `#f0f0f0` | Icon backgrounds, subtle fills |
| `--orange` | `#444444` | Prices, secondary emphasis |
| `--text` | `#1a1a1a` | Body text |
| `--text-mid` | `#555555` | Secondary text |
| `--text-light` | `#999999` | Hints, metadata |
| `--bg` | `#f5f5f5` | Page background |
| `--card` | `#ffffff` | Card/surface background |

Border radius: card `14px`, icon `13px`, button `14–20px`. Card padding: `16px`. Section gap: `8px`.

## Custom slash commands

| Command | Purpose |
|---|---|
| `/planning` | Analyse requirements, write specs — no code |
| `/design` | UI style decisions and visual specs — no implementation |
| `/develop` | Write and apply code based on an approved plan |
| `/verify` | Run the app in a browser and confirm changes look correct |

## Architecture

All screens live in `index.html`. Navigation is handled by JS functions:

- `switchTab(tabId, el)` — switches between bottom-nav tabs
- `pushScreen(screenId)` — slide-in push navigation
- `popScreen()` — slide back
- `renderState()` — re-renders all dynamic UI based on `state.isVerified`
- `showModal(id)` / `hideModal(id)` — modal and bottom sheet control

Key screens: `screen-home`, `screen-shopping`, `screen-payment`, `screen-orders`, `screen-wallet-tab`, `screen-eco-entry`, `screen-eco-dash`.

## Repository

`git remote: https://github.com/hieuvo151095/ecom.git` — branch `main`.
