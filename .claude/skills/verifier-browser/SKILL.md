# verifier-browser

## Description
Browser-based visual verification for ECO Me static prototype. Launches a local HTTP server, opens the app with Playwright/Chromium, takes screenshots of key screens, and runs a color audit. Use this skill to confirm UI changes look correct in the browser.

## Prerequisites
- Playwright is installed as a dev dependency: `npm install` (already committed to package.json)
- Chromium binary: `npx playwright install chromium` (one-time per machine)
- No build step required — the app is plain HTML/CSS/JS served statically

## Setup

Start the dev server if it isn't already running:

```bash
# Kill any existing process on 8080, then start
lsof -ti:8080 | xargs kill -9 2>/dev/null; python3 -m http.server 8080 &
sleep 1
curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/  # should print 200
```

## Taking screenshots

Run this Node script from the project root to capture all key screens:

```bash
node -e "
const {chromium} = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.setViewportSize({width: 900, height: 900});
  await p.goto('http://localhost:8080/');
  await p.waitForTimeout(600);

  // Home — verified state
  await p.screenshot({path: '/tmp/eco_home_verified.png'});

  // Home — unverified state
  await p.click('#btnUnverified');
  await p.waitForTimeout(300);
  await p.screenshot({path: '/tmp/eco_home_unverified.png'});

  // ECO School entry screen
  await p.click('#btnVerified');
  await p.waitForTimeout(200);
  await p.evaluate(() => pushScreen('screen-eco-entry'));
  await p.waitForTimeout(400);
  await p.screenshot({path: '/tmp/eco_school_entry.png'});

  // ECO School dashboard
  await p.evaluate(() => { popScreen(); setTimeout(() => pushScreen('screen-eco-dash'), 350); });
  await p.waitForTimeout(800);
  await p.screenshot({path: '/tmp/eco_dash.png'});

  console.log('Screenshots saved to /tmp/eco_*.png');
  await b.close();
})().catch(e => { console.error(e.message); process.exit(1); });
"
```

Screenshots are written to `/tmp/` — read them with the Read tool to inspect visually.

## Color audit (monochrome check)

Run this to detect any CSS-controlled color with saturation > 20% across the entire DOM:

```bash
node -e "
const {chromium} = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('http://localhost:8080/');
  await p.waitForTimeout(600);

  const hits = await p.evaluate(() => {
    const results = [];
    document.querySelectorAll('*').forEach(el => {
      const s = window.getComputedStyle(el);
      for (const prop of ['backgroundColor', 'color', 'borderTopColor']) {
        const v = s[prop];
        const m = v && v.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (m) {
          const r = +m[1], g = +m[2], b = +m[3];
          const max = Math.max(r, g, b), min = Math.min(r, g, b);
          const sat = max === 0 ? 0 : (max - min) / max;
          if (sat > 0.2 && max > 30 && (r !== g || g !== b)) {
            const rect = el.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0)
              results.push({tag: el.tagName, cls: (el.className + '').slice(0, 50), prop, val: v, sat: sat.toFixed(2)});
          }
        }
      }
    });
    return results;
  });

  console.log('Colorful CSS hits:', hits.length);
  hits.forEach(h => console.log(' ', h.tag, h.cls.trim(), h.prop, h.val, 'sat=' + h.sat));
  await b.close();
})().catch(e => { console.error(e.message); process.exit(1); });
"
```

**Expected output for a passing monochrome UI:** `Colorful CSS hits: 0`

Note: Emoji glyphs render with OS-native colors and are not captured by this audit — this is expected and acceptable.

## Navigating to specific screens

Use `page.evaluate()` to call the app's own JS functions:

| Screen | Code |
|---|---|
| ECO School entry | `pushScreen('screen-eco-entry')` |
| ECO School dashboard | `pushScreen('screen-eco-dash')` |
| Go back | `popScreen()` |
| Switch to unverified | `setVerified(false)` |
| Switch to verified | `setVerified(true)` |
| Switch tab | `switchTab('shopping', document.querySelector('[data-screen=shopping]'))` |
