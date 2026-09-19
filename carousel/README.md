# Instagram carousel – "7 דברים שאתה חייב לנו עליהם סליחה"

10 slides, 1080×1350, Hebrew RTL. Each slide is an HTML/CSS page rendered to PNG with Playwright.

- `build.js` – copy, styling, rendering and layout checks (fonts loaded, no mid-word breaks, 120px safe area, right alignment, tilted handwriting stays inside the frame).
- `slides/` – generated HTML per slide (open in a browser to tweak).
- `output/slide-01.png … slide-10.png` – final slides. `output/contact-sheet.png` – all ten at a glance.
- `fonts/` – self-hosted Heebo and Gveret Levin (Google Fonts, foundry Alef Alef Alef) so the render is deterministic.
- `shir.png` – cut-out portrait used on slide 10.

Render:

```sh
cd carousel
npm i playwright        # or use a global install via NODE_PATH
node build.js
```

The script exits non-zero and prints the offending slide if a font fails to load or text leaves the safe area.
