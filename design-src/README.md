# Art sources for “אותיות של קסם”

Illustrations used by `magic-letters/art/*.webp` are authored here as layered SVG art boards and
rasterized with Chromium (Playwright):

```
node design-src/render.js            # re-render every board
node design-src/render.js trail-words  # one board
```

- `boards/_kit.js` – shared illustration kit (marshmallow clouds, sparkles, hills, bushes, leaves, magic book, golden trail, world-map islands).
- `boards/*.html` – one board per asset (`sky`, `welcome-hero`, `logo-cloud`, `hero-home`, `world-*`, `trail-*`, `book`, `meadow`, `ribbon`).
- `src/*.png` – the original Luli / object illustrations with the baked white halo removed (`clean-halo.py`); `*-orig.png` are the untouched originals.
- `views.js` – reference copy of the view functions that were spliced into `magic-letters/app.js`.
