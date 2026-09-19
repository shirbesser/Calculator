// Instagram carousel builder: 10 slides, 1080x1350, Hebrew RTL.
// Generates slides/slide-XX.html, renders output/slide-XX.png with Playwright,
// then renders output/contact-sheet.png.
//
// Run:  node build.js        (from the carousel/ folder)

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = __dirname;
const SLIDES_DIR = path.join(ROOT, 'slides');
const OUT_DIR = path.join(ROOT, 'output');
const W = 1080;
const H = 1350;
const TOTAL = 10;

// ---------------------------------------------------------------- copy
// Text is copied verbatim from the brief. Do not edit punctuation here.
const slides = [
  {
    kind: 'cover',
    lines: ['בין אדם לחברו: סליחה.', 'בין אדם לפיד: יש לי כמה דברים להגיד.'],
    hand: 'והפעם, אינסטגרם - אתה מתחיל.',
    tilt: -3.5,
  },
  {
    kind: 'intro',
    big: '7 דברים',
    sub: 'שאתה חייב לנו עליהם סליחה השנה',
    layout: 'giant-number',
  },
  {
    kind: 'item',
    title: '1. על 1985.',
    body: ['ב־2026 גרמת לכולנו להעלות תמונה מ־1985', 'ולקרוא לזה חדשנות.'],
    hand: 'אפילו לא נולדתי, אבל אחלה פוני.',
    layout: 'classic', watermark: '1985', tilt: -4,
  },
  {
    kind: 'item',
    title: '2. על החשיפה.',
    body: ['נתת לי אלפי עוקבות', 'ואז החלטת שהפוסט שלי צריך להגיע ל־417 מהן.'],
    hand: 'אם רציתי לדבר מול כיתה הייתי חוזרת לאוניברסיטה.',
    layout: 'bottom', tilt: 3,
  },
  {
    kind: 'item',
    title: '3. על האלגוריתם.',
    body: ['כל פעם שאנחנו סוף סוף מבינות מה עובד -', 'אתה משנה את מה שעובד.'],
    hand: 'מערכת יחסים עם פחות יציבות וכבר הייתי חוסמת.',
    nowrap: ['סוף סוף'], // keep the doubled word on one line
    bodyBalance: true,
    layout: 'step', tilt: -5,
  },
  {
    kind: 'item',
    title: '4. על הבאגים.',
    body: ['יום אחד אין מוזיקה.', 'יום אחד אין צפיות.', 'יום אחד אין כפתור שהיה פה אתמול.'],
    hand: 'ואיכשהו בכל פעם אני זאת שמנקה קאש.',
    layout: 'stack', tilt: 3.5,
  },
  {
    kind: 'item',
    title: '5. על ריל ניסיון.',
    body: ['תודה על האפשרות לבדוק את הריל שלי על זרים', 'לפני שאתה מחליט לא להראות אותו גם לעוקבות שלי.'],
    hand: 'חדשני.',
    layout: 'giant-hand', tilt: -5,
  },
  {
    kind: 'item',
    title: '6. על כל הפיצ׳רים החדשים.',
    body: ['עריכה, AI, תבניות, ניסויים, עוד כפתור, פחות כפתור…', 'מותק, הכול מהמם.'],
    hand: 'אפשר פיצ׳ר אחד שבו מי שעוקבת אחריי רואה אותי?',
    layout: 'hero', tilt: -3,
  },
  {
    kind: 'item',
    title: '7. ועל זה שהפכת בעלות עסקים לאנליסטיות.',
    body: [
      'הוק. זמן צפייה. שמירות. שיתופים. נטישה. שלוש שניות ראשונות. שעות פעילות.',
      'בסך הכול רציתי למכור קורס.',
    ],
    hand: 'איך הגעתי לתואר בסטטיסטיקה?',
    titleLines: 3, titleSize: 80,
    layout: 'cascade', tilt: 4,
  },
  {
    kind: 'outro',
    line1: 'גמר חתימה טובה, אינסטגרם.',
    line2: 'אנחנו סולחות.',
    hand: 'סתם. תחזיר את החשיפה ונדבר.',
    small: 'שלחי לבעלת העסק שעוד חייבת לאינסטגרם סליחה',
    image: 'shir.png',
    tilt: -3.5,
  },
];

// ---------------------------------------------------------------- style
// Paper noise: inline SVG turbulence, tiled. Opacity is set on the overlay.
const NOISE_SVG =
  `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>` +
  `<filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/>` +
  `<feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0'/></filter>` +
  `<rect width='100%' height='100%' filter='url(#n)'/></svg>`;
const NOISE_URI = 'data:image/svg+xml;utf8,' + encodeURIComponent(NOISE_SVG);

const css = `
@font-face {
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 100 900;
  font-display: block;
  src: url('../fonts/Heebo-hebrew.woff2') format('woff2');
  unicode-range: U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
@font-face {
  font-family: 'Heebo';
  font-style: normal;
  font-weight: 100 900;
  font-display: block;
  src: url('../fonts/Heebo-latin.woff2') format('woff2');
}
@font-face {
  font-family: 'Gveret Levin';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url('../fonts/GveretLevin-hebrew.woff2') format('woff2');
  unicode-range: U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}
@font-face {
  font-family: 'Gveret Levin';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url('../fonts/GveretLevin-latin.woff2') format('woff2');
}

:root {
  --paper: #F3F0EA;
  --ink: #2B2B2B;
  --red: #B5342B;
  --pad: 120px;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: ${W}px; height: ${H}px; overflow: hidden; }
body {
  background: var(--paper);
  color: var(--ink);
  font-family: 'Heebo', 'Assistant', sans-serif;
  font-weight: 300;
  direction: rtl;
  text-align: right;
  position: relative;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}
.noise {
  position: absolute; inset: 0;
  background-image: url("${NOISE_URI}");
  background-size: 300px 300px;
  opacity: 0.035;
  pointer-events: none;
  z-index: 5;
}
.counter {
  position: absolute;
  top: 56px; left: 56px;
  width: 92px; height: 92px;
  border-radius: 50%;
  background: rgba(43, 43, 43, 0.08);
  display: flex; align-items: center; justify-content: center;
  font-size: 30px; font-weight: 400;
  color: rgba(43, 43, 43, 0.62);
  letter-spacing: 0.02em;
  direction: ltr;
  z-index: 3;
}
.stage {
  position: absolute; inset: 0;
  padding: var(--pad);
  display: flex; flex-direction: column;
  z-index: 2;
}
.center { flex: 1; display: flex; flex-direction: column; justify-content: center; }
p { overflow-wrap: normal; word-break: keep-all; hyphens: none; text-wrap: pretty; }
.title, .intro p, .cover .line2, .bal { text-wrap: balance; }
.nw { white-space: nowrap; }

/* type scale */
.t-xl  { font-size: 140px; font-weight: 700; line-height: 1.06; letter-spacing: -0.01em; }
.t-l   { font-size: 118px; font-weight: 700; line-height: 1.08; letter-spacing: -0.01em; }
.t-m   { font-size: 58px;  font-weight: 300; line-height: 1.38; }
.t-m5  { font-size: 58px;  font-weight: 500; line-height: 1.38; }
.t-s   { font-size: 38px;  font-weight: 400; line-height: 1.45; }
.red   { color: var(--red); }

/* handwriting */
.hand {
  font-family: 'Gveret Levin', cursive;
  font-weight: 400;
  color: var(--red);
  font-size: 62px;
  line-height: 1.22;
  transform: rotate(var(--tilt, -3.5deg));
  transform-origin: var(--tilt-origin, right bottom);
  display: inline-block;
  max-width: 100%;
}
.hand-wrap { padding-left: 40px; } /* room for the tilt */

/* cover */
.cover .line1 { font-size: 72px; font-weight: 300; line-height: 1.3; }
.cover .line2 { font-size: 96px; font-weight: 500; line-height: 1.16; margin-top: 44px; }
.cover .hand-wrap { margin-top: 96px; padding-bottom: 40px; }

/* intro */
.intro .big { font-size: 172px; font-weight: 700; line-height: 1; letter-spacing: -0.015em; }
.intro .sub { font-size: 84px; font-weight: 400; line-height: 1.2; margin-top: 44px; }

/* items */
.item .title { margin-bottom: 64px; }
.item .body p + p { margin-top: 12px; }
.item .foot { margin-top: 40px; min-height: 200px; padding-bottom: 56px; display: flex; align-items: flex-end; }

/* outro */
.outro .stage { padding: var(--pad) var(--pad) 0 0; }
.outro .top { padding-top: 40px; }
.outro .line1 { font-size: 88px; font-weight: 500; line-height: 1.16; }
.outro .line2 { font-size: 118px; font-weight: 700; line-height: 1.1; margin-top: 18px; }
.outro .hand-wrap { margin-top: 40px; }
.outro .hand { font-size: 52px; }
.outro .hand-wrap { padding-bottom: 30px; }
.outro .small {
  position: absolute; right: var(--pad); bottom: var(--pad); width: 330px;
  font-size: 36px; font-weight: 400; line-height: 1.45;
}
.outro .photo {
  position: absolute; left: -20px; bottom: -30px;
  height: 850px; width: auto;
  filter: drop-shadow(0 18px 40px rgba(0, 0, 0, 0.12));
  z-index: 1;
}

/* ---- per-slide composition variants ---- */
.item .stage { position: absolute; }
.wm {
  position: absolute; left: -10px; bottom: 330px;
  font-size: 400px; font-weight: 700; line-height: 1; letter-spacing: -0.03em;
  color: rgba(43, 43, 43, 0.055);
  direction: ltr; z-index: 0; pointer-events: none;
}

/* intro: giant numeral */
.giant-number .seven { line-height: 0.9; }
.giant-number .seven .n { font-size: 560px; font-weight: 700; letter-spacing: -0.04em; }
.giant-number .seven .w { font-size: 150px; font-weight: 700; letter-spacing: -0.01em; }
.giant-number .sub { font-size: 60px; font-weight: 300; line-height: 1.3; margin-top: 56px; }

/* bottom-heavy: everything hugs the lower edge, air on top */
.bottom .center { justify-content: flex-end; }
.bottom .title { margin-bottom: 48px; }
.bottom .foot { min-height: 0; margin-top: 56px; }

/* step: the second body line steps in */
.step .body p + p { margin-top: 28px; padding-right: 150px; }

/* stack: repetition that grows */
.stack .body p { line-height: 1.3; }
.stack .body p + p { margin-top: 10px; }
.stack .body p:nth-child(1) { font-size: 50px; font-weight: 300; }
.stack .body p:nth-child(2) { font-size: 64px; font-weight: 400; }
.stack .body p:nth-child(3) { font-size: 80px; font-weight: 500; }

/* giant-hand: one-word punch, huge, pushed to the left */
.giant-hand .center { justify-content: flex-start; padding-top: 20px; }
.giant-hand .foot { justify-content: flex-end; min-height: 0; padding-bottom: 80px; }
.giant-hand .hand { font-size: 190px; line-height: 1; }

/* hero: quiet list, loud last line */
.hero .body p:first-child { font-size: 48px; font-weight: 300; width: 78%; line-height: 1.4; }
.hero .body p + p { font-size: 96px; font-weight: 700; line-height: 1.1; margin-top: 44px; }
.hero .title { margin-bottom: 48px; }

/* cascade: the metrics tumble down in different sizes */
.cascade .title { margin-bottom: 40px; }
.cascade .metrics p { line-height: 1.15; margin: 0; }
.cascade .body .closing { font-size: 60px; font-weight: 500; line-height: 1.3; margin-top: 36px; }
.cascade .foot { min-height: 0; margin-top: 30px; }
`;

// ---------------------------------------------------------------- html
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function renderSlide(s, i) {
  const n = i + 1;
  let inner = '';
  if (s.kind === 'cover') {
    inner = `
      <div class="center">
        <p class="line1" data-check>${esc(s.lines[0])}</p>
        <p class="line2" data-check>${esc(s.lines[1])}</p>
        <div class="hand-wrap"><p class="hand" data-check>${esc(s.hand)}</p></div>
      </div>`;
  } else if (s.kind === 'intro') {
    // "7 דברים": the numeral is the slide. Text stays one string, spans only style it.
    const [num, ...rest] = s.big.split(' ');
    inner = `
      <div class="center">
        <p class="seven red" data-check><span class="n">${esc(num)}</span> <span class="w">${esc(rest.join(' '))}</span></p>
        <p class="sub" data-check>${esc(s.sub)}</p>
      </div>`;
  } else if (s.kind === 'item') {
    const tSize = s.titleSize ? `style="font-size:${s.titleSize}px"` : '';
    const decorate = (line) => {
      let html = esc(line);
      for (const phrase of s.nowrap || []) html = html.split(esc(phrase)).join(`<span class="nw">${esc(phrase)}</span>`);
      return html;
    };
    let body;
    if (s.layout === 'cascade') {
      // first body line is a run of short sentences: one per line, varied scale
      const parts = s.body[0].split(/(?<=\.)\s+/);
      if (parts.join(' ') !== s.body[0]) throw new Error('cascade split changed the copy');
      const sizes = [46, 64, 40, 54, 72, 38, 58];
      const weights = [300, 500, 300, 400, 700, 300, 400];
      const metrics = parts
        .map((t, k) => `<p style="font-size:${sizes[k % sizes.length]}px;font-weight:${weights[k % weights.length]}" data-check>${esc(t)}</p>`)
        .join('\n');
      body = `<div class="metrics">${metrics}</div><p class="closing" data-check>${esc(s.body[1])}</p>`;
    } else {
      body = s.body
        .map((line, j) => {
          const last = j === s.body.length - 1 && s.body.length > 1;
          const cls = [last ? 't-m5' : 't-m', s.bodyBalance ? 'bal' : ''].join(' ').trim();
          return `<p class="${cls}" data-check>${decorate(line)}</p>`;
        })
        .join('\n');
    }
    const wm = s.watermark ? `<div class="wm" aria-hidden="true">${esc(s.watermark)}</div>` : '';
    inner = `
      <div class="center">
        <p class="title t-l" ${tSize} data-check>${esc(s.title)}</p>
        <div class="body">${body}</div>
      </div>
      <div class="foot hand-wrap"><p class="hand" data-check>${esc(s.hand)}</p></div>
      ${wm}`;
  } else if (s.kind === 'outro') {
    inner = `
      <div class="top">
        <p class="line1" data-check>${esc(s.line1)}</p>
        <p class="line2 red" data-check>${esc(s.line2)}</p>
        <div class="hand-wrap"><p class="hand" data-check>${esc(s.hand)}</p></div>
      </div>
      <p class="small" data-check>${esc(s.small)}</p>
      <img class="photo" src="../${s.image}" alt="">`;
  }
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<title>slide ${n}</title>
<style>${css}</style>
</head>
<body class="${s.kind} ${s.layout || ''}" style="--tilt:${s.tilt ?? -3.5}deg;--tilt-origin:right ${(s.tilt ?? -3.5) > 0 ? 'top' : 'bottom'}">
  <div class="counter">${n}/${TOTAL}</div>
  <div class="stage">${inner}</div>
  <div class="noise"></div>
</body>
</html>`;
}

function renderContactSheet(files) {
  const cells = files.map((f, i) => `<figure><img src="../output/${f}"><figcaption>${i + 1}</figcaption></figure>`).join('');
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    body { margin: 0; background: #d9d4cb; padding: 40px; width: 2760px; box-sizing: border-box; }
    .grid { display: grid; grid-template-columns: repeat(5, 520px); gap: 40px; }
    figure { margin: 0; position: relative; }
    img { width: 520px; height: 650px; display: block; box-shadow: 0 6px 24px rgba(0,0,0,.18); }
    figcaption { position: absolute; top: -32px; left: 0; font: 600 24px Heebo, sans-serif; color: #444; }
  </style></head><body><div class="grid">${cells}</div></body></html>`;
}

// ---------------------------------------------------------------- checks
async function auditPage(page) {
  return page.evaluate(async ({ pad, W, H }) => {
    const problems = [];
    await Promise.all([
      document.fonts.load('300 40px "Heebo"', 'שלום'),
      document.fonts.load('700 40px "Heebo"', 'שלום'),
      document.fonts.load('400 40px "Gveret Levin"', 'שלום'),
    ]);
    const fontsOk = {
      heebo: document.fonts.check('300 40px "Heebo"', 'שלום') && document.fonts.check('700 40px "Heebo"', 'שלום'),
      gveret: document.fonts.check('400 40px "Gveret Levin"', 'שלום'),
    };
    // Compare against fallback to prove the face actually rendered.
    const measure = (family, text, weight) => {
      const el = document.createElement('span');
      el.style.cssText = `position:absolute;visibility:hidden;white-space:nowrap;font:${weight} 60px ${family}`;
      el.textContent = text;
      document.body.appendChild(el);
      const w = el.getBoundingClientRect().width;
      el.remove();
      return w;
    };
    const wHeebo = measure('"Heebo"', 'אינסטגרם', 400);
    const wHeeboBold = measure('"Heebo"', 'אינסטגרם', 700);
    const wGveret = measure('"Gveret Levin"', 'אינסטגרם', 400);
    const wSerif = measure('serif', 'אינסטגרם', 400);
    const loaded = [...document.fonts].map((f) => `${f.family} ${f.weight} ${f.status}`);

    const stage = document.querySelector('.stage').getBoundingClientRect();
    const safe = { left: pad, right: W - pad, top: pad, bottom: H - pad };
    for (const el of document.querySelectorAll('[data-check]')) {
      const text = el.textContent.trim().slice(0, 30);
      // a word wider than the box forces a mid-word overflow
      if (el.scrollWidth > el.clientWidth + 1) problems.push(`overflow (word too long): "${text}"`);
      const range = document.createRange();
      range.selectNodeContents(el);
      const rects = [...range.getClientRects()].filter((q) => q.width > 0);
      if (!rects.length) continue;
      const left = Math.min(...rects.map((q) => q.left));
      const right = Math.max(...rects.map((q) => q.right));
      const top = Math.min(...rects.map((q) => q.top));
      const bottom = Math.max(...rects.map((q) => q.bottom));
      if (left < safe.left - 2 || right > safe.right + 2) problems.push(`outside safe area (x): "${text}" ${Math.round(left)}-${Math.round(right)}`);
      const fs = parseFloat(getComputedStyle(el).fontSize);
      const yTol = Math.max(2, fs * 0.16);
      if (top < safe.top - yTol || bottom > safe.bottom + yTol) problems.push(`outside safe area (y): "${text}" ${Math.round(top)}-${Math.round(bottom)}`);
      // right alignment: the widest line must touch the right edge of the box
      if (!el.classList.contains('hand')) {
        const boxRight = el.getBoundingClientRect().right - parseFloat(getComputedStyle(el).paddingRight);
        if (Math.abs(right - boxRight) > 6) problems.push(`not right-aligned: "${text}" (${Math.round(right)} vs ${Math.round(boxRight)})`);
      }
    }
    return { fontsOk, widths: { wHeebo, wHeeboBold, wGveret, wSerif }, loaded, problems, stage: [stage.left, stage.top, stage.right, stage.bottom] };
  }, { pad: 120, W, H });
}

// ---------------------------------------------------------------- main
(async () => {
  fs.mkdirSync(SLIDES_DIR, { recursive: true });
  fs.mkdirSync(OUT_DIR, { recursive: true });

  slides.forEach((s, i) => {
    const file = path.join(SLIDES_DIR, `slide-${String(i + 1).padStart(2, '0')}.html`);
    fs.writeFileSync(file, renderSlide(s, i), 'utf8');
  });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  let failed = false;
  const outFiles = [];

  for (let i = 0; i < slides.length; i++) {
    const name = `slide-${String(i + 1).padStart(2, '0')}`;
    await page.goto('file://' + path.join(SLIDES_DIR, name + '.html'));
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => Promise.all([...document.images].map((im) => im.decode().catch(() => {}))));
    await page.evaluate((maxLines) => {
      const el = document.querySelector('.item .title');
      if (!el || el.style.fontSize) return;
      const lines = () => {
        const r = document.createRange(); r.selectNodeContents(el);
        const tops = new Set([...r.getClientRects()].filter((q) => q.width > 0).map((q) => Math.round(q.top)));
        return tops.size;
      };
      let size = parseFloat(getComputedStyle(el).fontSize);
      // try one line down to 96px, then two lines down to 88px
      const targets = maxLines === 1 ? [[1, 96]] : [[1, 96], [2, 88]];
      for (const [want, min] of targets.slice(0, maxLines)) {
        while (lines() > want && size > min) { size -= 2; el.style.fontSize = size + 'px'; }
        if (lines() <= want) return;
      }
    }, slides[i].titleLines || 2);
    const a = await auditPage(page);
    const fontFail = !a.fontsOk.heebo || !a.fontsOk.gveret || a.widths.wGveret === a.widths.wSerif || a.widths.wHeebo === a.widths.wSerif;
    if (fontFail) {
      failed = true;
      console.error(`[${name}] FONT PROBLEM`, a.fontsOk, a.widths, a.loaded);
    }
    if (a.problems.length) {
      failed = true;
      console.error(`[${name}] LAYOUT PROBLEMS\n  - ` + a.problems.join('\n  - '));
    }
    const out = path.join(OUT_DIR, name + '.png');
    await page.screenshot({ path: out, clip: { x: 0, y: 0, width: W, height: H } });
    outFiles.push(name + '.png');
    console.log(`${name}.png  fonts: heebo=${a.fontsOk.heebo} gveret=${a.fontsOk.gveret}  bold≠regular=${a.widths.wHeeboBold !== a.widths.wHeebo}  problems=${a.problems.length}`);
  }

  // contact sheet
  const sheetHtml = path.join(SLIDES_DIR, 'contact-sheet.html');
  fs.writeFileSync(sheetHtml, renderContactSheet(outFiles), 'utf8');
  const sheet = await browser.newPage({ viewport: { width: 2760, height: 1500 }, deviceScaleFactor: 1 });
  await sheet.goto('file://' + sheetHtml);
  await sheet.evaluate(() => Promise.all([...document.images].map((im) => im.decode())));
  await sheet.screenshot({ path: path.join(OUT_DIR, 'contact-sheet.png'), fullPage: true });
  console.log('contact-sheet.png');

  await browser.close();
  if (failed) {
    console.error('\nBuild finished WITH PROBLEMS (see above).');
    process.exit(1);
  }
})();
