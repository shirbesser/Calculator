// Shared illustration kit for Luli art boards. Builds layered SVG with soft
// "3D storybook" lighting: radial-gradient volumes, rim light, soft shadows.
const NS = 'http://www.w3.org/2000/svg';
let seed = 7;
function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
function setSeed(s) { seed = s; }
const PICS = '../../magic-letters/art/pics/';
const SRC = '../src/';

const DEFS = `
<defs>
  <radialGradient id="gCloud" cx="45%" cy="30%" r="75%">
    <stop offset="0" stop-color="#ffffff"/>
    <stop offset=".55" stop-color="#fff6fb"/>
    <stop offset="1" stop-color="#f0d6f2"/>
  </radialGradient>
  <radialGradient id="gCloudPink" cx="45%" cy="25%" r="80%">
    <stop offset="0" stop-color="#fffafd"/>
    <stop offset=".5" stop-color="#fde3f1"/>
    <stop offset="1" stop-color="#e9c4ee"/>
  </radialGradient>
  <radialGradient id="gCloudLilac" cx="45%" cy="25%" r="80%">
    <stop offset="0" stop-color="#fbf6ff"/>
    <stop offset=".55" stop-color="#e6d6fb"/>
    <stop offset="1" stop-color="#c9b0f0"/>
  </radialGradient>
  <linearGradient id="gHillFar" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#b9e6a8"/><stop offset="1" stop-color="#8fcf8f"/>
  </linearGradient>
  <linearGradient id="gHillMid" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#a7e07c"/><stop offset=".6" stop-color="#6fc25c"/><stop offset="1" stop-color="#4fa64e"/>
  </linearGradient>
  <linearGradient id="gHillNear" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#9ee06a"/><stop offset=".5" stop-color="#5fb84a"/><stop offset="1" stop-color="#3f9640"/>
  </linearGradient>
  <linearGradient id="gHillLilac" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#dccbf8"/><stop offset="1" stop-color="#bba3ee"/>
  </linearGradient>
  <radialGradient id="gBush" cx="40%" cy="30%" r="70%">
    <stop offset="0" stop-color="#9fe27a"/><stop offset=".6" stop-color="#5cb54c"/><stop offset="1" stop-color="#2f8a3d"/>
  </radialGradient>
  <radialGradient id="gBushDark" cx="40%" cy="30%" r="70%">
    <stop offset="0" stop-color="#7fcf68"/><stop offset=".6" stop-color="#3f9a45"/><stop offset="1" stop-color="#21703a"/>
  </radialGradient>
  <linearGradient id="gLeaf" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#a6e57f"/><stop offset=".55" stop-color="#55b04d"/><stop offset="1" stop-color="#2e8540"/>
  </linearGradient>
  <linearGradient id="gGold" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fff6c4"/><stop offset=".45" stop-color="#ffd85a"/><stop offset="1" stop-color="#f2a93b"/>
  </linearGradient>
  <linearGradient id="gPath" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fff3c0"/><stop offset="1" stop-color="#ffd977"/>
  </linearGradient>
  <radialGradient id="gGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0" stop-color="#fffbe6" stop-opacity="1"/>
    <stop offset=".35" stop-color="#fff0b8" stop-opacity=".75"/>
    <stop offset="1" stop-color="#ffe9a0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="gGlowWhite" cx="50%" cy="50%" r="50%">
    <stop offset="0" stop-color="#ffffff" stop-opacity=".95"/>
    <stop offset=".5" stop-color="#ffffff" stop-opacity=".45"/>
    <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
  </radialGradient>
  <filter id="fSoft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.1"/></filter>
  <filter id="fBlur4" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fBlur10" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10"/></filter>
  <filter id="fBlur24" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="24"/></filter>
  <filter id="fGlow" x="-100%" y="-100%" width="300%" height="300%">
    <feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <filter id="fDrop" x="-30%" y="-30%" width="160%" height="170%">
    <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#6b3fa8" flood-opacity=".22"/>
  </filter>
  <filter id="fDropGreen" x="-30%" y="-30%" width="160%" height="170%">
    <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#1f5e2c" flood-opacity=".28"/>
  </filter>
  <filter id="fCloudShade" x="-20%" y="-20%" width="140%" height="160%">
    <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#b48bd6" flood-opacity=".28"/>
  </filter>
</defs>`;

function svgOpen(w, h, extra = '') { return `<svg xmlns="${NS}" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" ${extra}>${DEFS}`; }

// Puffy marshmallow cloud: unified silhouette (mask) + per-puff lighting
let cloudId = 0;
const CLOUD_TONES = {
  gCloud: ['#ffffff', '#fbeef8', '#e9cdee'],
  gCloudWhite: ['#ffffff', '#fefaff', '#e8dbf5'],
  gCloudPink: ['#fffafd', '#fbdcee', '#e7b9e4'],
  gCloudLilac: ['#f7f0ff', '#e2d2fa', '#c3a8ee'],
  gCloudPeach: ['#fffaf0', '#ffe6cf', '#f6c7b0'],
  gCloudMint: ['#fbfffd', '#e2f6ef', '#bfe3d8'],
  gCloudBlue: ['#fbfdff', '#e3eefc', '#bdd2f2'],
};
function cloudShape(bumps, base, tone, opacity = 1, shade = true) {
  const id = 'cm' + (++cloudId), [hi, mid, lo] = CLOUD_TONES[tone] || CLOUD_TONES.gCloud;
  const minY = Math.min(...bumps.map(b => b[1] - b[2])), maxY = base[1] + base[3];
  let shape = `<rect x="${base[0]}" y="${base[1]}" width="${base[2]}" height="${base[3]}" rx="${base[3] / 2}"/>`;
  for (const [x, y, r] of bumps) shape += `<circle cx="${x}" cy="${y}" r="${r}"/>`;
  let g = `<g opacity="${opacity}">`;
  g += `<defs><mask id="${id}" maskUnits="userSpaceOnUse" x="-2000" y="-2000" width="4000" height="4000"><g fill="#fff">${shape}</g></mask>
    <linearGradient id="${id}g" gradientUnits="userSpaceOnUse" x1="0" y1="${minY}" x2="0" y2="${maxY}"><stop offset="0" stop-color="${hi}"/><stop offset=".55" stop-color="${mid}"/><stop offset="1" stop-color="${lo}"/></linearGradient></defs>`;
  if (shade) g += `<g fill="#b98ad8" opacity=".22" filter="url(#fBlur10)" transform="translate(0 10)">${shape}</g>`;
  g += `<g mask="url(#${id})"><rect x="-2000" y="${minY - 10}" width="4000" height="${maxY - minY + 20}" fill="url(#${id}g)"/>`;
  // per-puff shading: darker underside of each puff, bright cap
  for (const [x, y, r] of bumps) {
    g += `<circle cx="${x}" cy="${y + r * .55}" r="${r * .95}" fill="${lo}" opacity=".35" filter="url(#fBlur10)"/>`;
    g += `<circle cx="${x - r * .2}" cy="${y - r * .35}" r="${r * .55}" fill="${hi}" opacity=".95" filter="url(#fBlur10)"/>`;
  }
  g += `<rect x="-2000" y="${maxY - 14}" width="4000" height="30" fill="${lo}" opacity=".45" filter="url(#fBlur4)"/>`;
  g += `</g></g>`;
  return g;
}
function cloud(x, y, s = 1, tone = 'gCloud', opacity = 1) {
  const bumps = [[-62, 4, 30], [-30, -14, 40], [8, -26, 48], [46, -8, 38], [74, 8, 28], [-86, 16, 22]];
  return `<g transform="translate(${x} ${y}) scale(${s})">` + cloudShape(bumps, [-104, -4, 206, 40], tone, opacity) + `</g>`;
}
// long low cloud bank
function cloudBank(x, y, w, s = 1, tone = 'gCloudPink', n = 7, opacity = 1, fade = false, h = 120) {
  const bumps = [];
  for (let i = 0; i < n; i++) { const r = 30 + rnd() * 34; bumps.push([(i + .5) * w / n + (rnd() - .5) * 20, 14 - r * .35, r]); }
  let inner = cloudShape(bumps, [0, 0, w, h], tone, opacity, !fade);
  if (fade) {
    const id = 'bf' + (++cloudId);
    inner = `<defs><linearGradient id="${id}g" gradientUnits="userSpaceOnUse" x1="0" y1="-60" x2="0" y2="${h}"><stop offset=".35" stop-color="#fff"/><stop offset="1" stop-color="#000"/></linearGradient><mask id="${id}" maskUnits="userSpaceOnUse" x="-2000" y="-2000" width="4000" height="4000"><rect x="-2000" y="-200" width="4000" height="${h + 400}" fill="url(#${id}g)"/></mask></defs><g mask="url(#${id})">${inner}</g>`;
  }
  return `<g transform="translate(${x} ${y}) scale(${s})">` + inner + `</g>`;
}
function sparklePath(s) { // 4-point star
  const a = s, b = s * .22;
  return `M0 ${-a} C ${b} ${-b} ${b} ${-b} ${a} 0 C ${b} ${b} ${b} ${b} 0 ${a} C ${-b} ${b} ${-b} ${b} ${-a} 0 C ${-b} ${-b} ${-b} ${-b} 0 ${-a}Z`;
}
function sparkle(x, y, s = 10, color = '#fff6c8', glow = true, op = 1) {
  return `<g transform="translate(${x} ${y})" opacity="${op}">${glow ? `<circle r="${s * 1.1}" fill="url(#gGlow)"/>` : ''}<path d="${sparklePath(s)}" fill="${color}" ${glow ? 'filter="url(#fGlow)"' : ''}/></g>`;
}
function dust(x0, y0, w, h, n, color = '#fff3b0', maxR = 2.6) {
  let g = '';
  for (let i = 0; i < n; i++) {
    const r = .6 + rnd() * maxR;
    g += `<circle cx="${x0 + rnd() * w}" cy="${y0 + rnd() * h}" r="${r}" fill="${color}" opacity="${.45 + rnd() * .55}"/>`;
  }
  return `<g filter="url(#fGlow)">${g}</g>`;
}
function bush(x, y, s = 1, dark = false) {
  const grad = dark ? 'gBushDark' : 'gBush';
  const parts = [[-34, 6, 26], [-10, -12, 32], [20, -4, 28], [40, 10, 20], [-50, 16, 16]];
  let g = `<g transform="translate(${x} ${y}) scale(${s})" filter="url(#fDropGreen)">`;
  for (const [bx, by, r] of parts) g += `<circle cx="${bx}" cy="${by}" r="${r}" fill="url(#${grad})"/>`;
  g += `<ellipse cx="-14" cy="-30" rx="12" ry="5" fill="#d7ffb0" opacity=".55" filter="url(#fBlur4)"/>`;
  g += `<ellipse cx="18" cy="-22" rx="9" ry="4" fill="#d7ffb0" opacity=".5" filter="url(#fBlur4)"/>`;
  return g + `</g>`;
}
function leaf(x, y, s = 1, rot = 0, flip = 1) {
  return `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s * flip} ${s})" filter="url(#fDropGreen)">
    <path d="M0 0 C 18 -22 52 -30 78 -16 C 56 6 22 12 0 0Z" fill="url(#gLeaf)"/>
    <path d="M4 -1 C 26 -10 50 -15 72 -15" stroke="#d9ffc2" stroke-width="2.2" fill="none" opacity=".75" stroke-linecap="round"/>
  </g>`;
}
function tuft(x, y, s = 1, c = '#5fb84a') {
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-10 0 Q-8 -14 -14 -24 Q-2 -12 0 0 Q2 -18 0 -30 Q8 -14 6 0 Q10 -10 18 -18 Q14 -6 12 0Z" fill="${c}"/></g>`;
}
function pic(name, x, y, w, extra = '') { // fluent 3D picture
  return `<image href="${PICS}${name}.webp" x="${x}" y="${y}" width="${w}" height="${w}" ${extra}/>`;
}
function src(name, x, y, w, extra = '') { return `<image href="${SRC}${name}.png" x="${x}" y="${y}" width="${w}" height="${w}" ${extra}/>`; }
// glowing golden trail with dotted sparkles following path d
function goldTrail(d, width = 14, fade = null) {
  // fade: [x1,y1,x2,y2] gradient direction; stroke fades in/out at both ends
  const id = 'gt' + (++cloudId);
  const [x1, y1, x2, y2] = fade || [0, 0, 400, 0];
  const grad = (c, o) => `<linearGradient id="${id}${c}" gradientUnits="userSpaceOnUse" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${o}" stop-opacity="0"/><stop offset=".25" stop-color="${o}" stop-opacity="1"/><stop offset=".75" stop-color="${o}" stop-opacity="1"/><stop offset="1" stop-color="${o}" stop-opacity="0"/></linearGradient>`;
  return `<g><defs>${grad('a', '#ffe27a')}${grad('b', '#ffcf4d')}${grad('c', '#fffbe3')}${grad('d', '#ffffff')}</defs>
   <path d="${d}" stroke="url(#${id}a)" stroke-width="${width * 2.4}" fill="none" stroke-linecap="round" opacity=".45" filter="url(#fBlur10)"/>
   <path d="${d}" stroke="url(#${id}b)" stroke-width="${width}" fill="none" stroke-linecap="round" opacity=".85"/>
   <path d="${d}" stroke="url(#${id}c)" stroke-width="${width * .32}" fill="none" stroke-linecap="round"/>
   <path d="${d}" stroke="url(#${id}d)" stroke-width="${width * .55}" stroke-dasharray="1 ${width * 1.7}" fill="none" stroke-linecap="round" filter="url(#fGlow)"/>
  </g>`;
}
function mount(svg) { document.getElementById('art').innerHTML = svg; }

// Open magic book, 3/4 front view, centered at spine bottom (0,0). Width ~320.
function magicBook(x, y, s = 1, opts = {}) {
  const cover = opts.cover || ['#b07bf0', '#7b3fd0', '#5a25a8'];
  const id = 'bk' + (++cloudId);
  let g = `<g transform="translate(${x} ${y}) scale(${s})">
  <defs>
   <linearGradient id="${id}c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${cover[0]}"/><stop offset=".5" stop-color="${cover[1]}"/><stop offset="1" stop-color="${cover[2]}"/></linearGradient>
   <linearGradient id="${id}pL" x1="1" y1="0" x2="0" y2="0"><stop offset="0" stop-color="#f3dcc0"/><stop offset=".25" stop-color="#fff6e6"/><stop offset="1" stop-color="#fffaf1"/></linearGradient>
   <linearGradient id="${id}pR" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f3dcc0"/><stop offset=".25" stop-color="#fff6e6"/><stop offset="1" stop-color="#fffaf1"/></linearGradient>
   <linearGradient id="${id}e" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1dc"/><stop offset="1" stop-color="#e9c99f"/></linearGradient>
   <radialGradient id="${id}glow" cx="50%" cy="60%" r="55%"><stop offset="0" stop-color="#fffbe0" stop-opacity="1"/><stop offset=".5" stop-color="#ffe9a6" stop-opacity=".55"/><stop offset="1" stop-color="#ffe9a6" stop-opacity="0"/></radialGradient>
  </defs>
  <ellipse cx="0" cy="16" rx="190" ry="26" fill="#7b4cc0" opacity=".25" filter="url(#fBlur10)"/>
  <!-- cover slab -->
  <path d="M-182 -20 Q-96 -46 0 -14 Q96 -46 182 -20 L176 4 Q92 -16 0 14 Q-92 -16 -176 4Z" fill="url(#${id}c)"/>
  <path d="M-176 4 Q-92 -16 0 14 Q92 -16 176 4 L176 12 Q92 -6 0 22 Q-92 -6 -176 12Z" fill="${cover[2]}"/>
  <path d="M-180 -19 Q-96 -44 0 -12" stroke="#e2c6ff" stroke-width="3" fill="none" opacity=".8"/>
  <path d="M180 -19 Q96 -44 0 -12" stroke="#e2c6ff" stroke-width="3" fill="none" opacity=".8"/>
  <!-- page edges (thickness) -->
  <path d="M-166 -30 Q-88 -54 0 -22 L0 -6 Q-88 -38 -166 -14Z" fill="url(#${id}e)"/>
  <path d="M166 -30 Q88 -54 0 -22 L0 -6 Q88 -38 166 -14Z" fill="url(#${id}e)"/>
  ${[0, 1, 2, 3].map(i => `<path d="M-164 ${-26 + i * 3.5} Q-88 ${-50 + i * 3.5} 0 ${-19 + i * 3.5}" stroke="#d8b78f" stroke-width=".9" fill="none" opacity=".7"/><path d="M164 ${-26 + i * 3.5} Q88 ${-50 + i * 3.5} 0 ${-19 + i * 3.5}" stroke="#d8b78f" stroke-width=".9" fill="none" opacity=".7"/>`).join('')}
  <!-- top pages -->
  <path d="M-170 -32 Q-162 -92 -132 -108 Q-56 -132 0 -86 L0 -22 Q-88 -60 -170 -32Z" fill="url(#${id}pL)"/>
  <path d="M170 -32 Q162 -92 132 -108 Q56 -132 0 -86 L0 -22 Q88 -60 170 -32Z" fill="url(#${id}pR)"/>
  <path d="M-150 -86 Q-80 -104 -18 -76 M-148 -72 Q-80 -90 -18 -62 M-152 -58 Q-84 -74 -22 -48" stroke="#ead8c0" stroke-width="2" fill="none" opacity=".7"/>
  <path d="M150 -86 Q80 -104 18 -76 M148 -72 Q80 -90 18 -62 M152 -58 Q84 -74 22 -48" stroke="#ead8c0" stroke-width="2" fill="none" opacity=".7"/>
  <path d="M0 -86 L0 -22" stroke="#d9b98f" stroke-width="3"/><path d="M-26 -84 Q-8 -78 0 -86 L0 -22 Q-10 -30 -30 -34Z" fill="#c9a074" opacity=".18"/><path d="M26 -84 Q8 -78 0 -86 L0 -22 Q10 -30 30 -34Z" fill="#c9a074" opacity=".18"/>
  <!-- gold corners -->
  <path d="M-182 -20 l18 -5 l-4 18 Z" fill="#ffd45a"/><path d="M182 -20 l-18 -5 l4 18 Z" fill="#ffd45a"/>
  <!-- magic glow from pages -->
  <ellipse cx="0" cy="-80" rx="150" ry="70" fill="url(#${id}glow)" opacity="${opts.glow ?? .9}"/>
  ${opts.ribbon !== false ? `<path d="M30 6 L30 46 L40 38 L50 46 L50 0Z" fill="#f58cba"/><path d="M30 6 L30 46 L40 38" fill="#e06e9f" opacity=".5"/>` : ''}
  </g>`;
  return g;
}

// Winding magic trail for a world map. Returns {svg, stations:[[x%,y%]...]}
const TRAIL_THEMES = {
  sounds: { sky: ['#fff1d6', '#ffe2bd', '#fdeedd'], cloud: 'gCloudPeach', cliff: '#f2c79a', cliff2: '#dda478' },
  letters: { sky: ['#e1ecfd', '#e4d9fb', '#efe6fd'], cloud: 'gCloudBlue', cliff: '#c8b1f0', cliff2: '#a98bdf' },
  words: { sky: ['#daf5ea', '#cdeee3', '#e9f8f1'], cloud: 'gCloudMint', cliff: '#a9dccb', cliff2: '#86c4b0' },
};
function trailScene(themeName) {
  const T = TRAIL_THEMES[themeName];
  const W = 400, H = 1060;
  const pts = [[200, 70], [300, 178], [196, 286], [96, 394], [200, 502], [304, 610], [200, 718], [98, 826]];
  const end = [214, 950];
  const all = [[200, -20], ...pts, end];
  // Catmull-Rom -> cubic Bezier
  let d = `M${all[0][0]} ${all[0][1]}`;
  for (let i = 0; i < all.length - 1; i++) {
    const p0 = all[Math.max(0, i - 1)], p1 = all[i], p2 = all[i + 1], p3 = all[Math.min(all.length - 1, i + 2)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0]} ${p2[1]}`;
  }
  let s = svgOpen(W, H);
  s += `<linearGradient id="tsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.sky[0]}"/><stop offset=".5" stop-color="${T.sky[1]}"/><stop offset="1" stop-color="${T.sky[2]}"/></linearGradient>`;
  s += `<rect width="${W}" height="${H}" fill="url(#tsky)"/>`;
  s += cloud(30, 236, .5, T.cloud, .9); s += cloud(380, 450, .55, T.cloud, .9); s += cloud(20, 670, .5, T.cloud, .85); s += cloud(390, 866, .5, T.cloud, .85); s += cloud(360, 20, .4, T.cloud, .8);
  // floating grass islands (3D: top surface, lit rim, cliff underside)
  const blob = (cx, cy, rx, ry, n = 14) => {
    const P = [];
    for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2, k = .9 + rnd() * .16; P.push([cx + Math.cos(a) * rx * k, cy + Math.sin(a) * ry * k]); }
    let d = '';
    for (let i = 0; i < n; i++) { const p = P[i], q = P[(i + 1) % n], m = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2]; d += (i ? ' Q' : `M${((P[n - 1][0] + p[0]) / 2).toFixed(1)} ${((P[n - 1][1] + p[1]) / 2).toFixed(1)} Q`) + `${p[0].toFixed(1)} ${p[1].toFixed(1)} ${m[0].toFixed(1)} ${m[1].toFixed(1)}`; }
    return d + 'Z';
  };
  s += `<linearGradient id="isTop" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8f29a"/><stop offset=".5" stop-color="#9fdc78"/><stop offset="1" stop-color="#7cc761"/></linearGradient>
  <linearGradient id="isCliff" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${T.cliff}"/><stop offset="1" stop-color="${T.cliff2}"/></linearGradient>`;
  const islands = [[200, 126, 178, 96], [192, 342, 170, 92], [208, 556, 174, 94], [196, 772, 172, 92], [214, 958, 156, 82]];
  for (const [cx, cy, rx, ry] of islands) {
    const d0 = blob(cx, cy, rx, ry);
    s += `<path d="${d0}" fill="#6b4aa8" opacity=".16" filter="url(#fBlur10)" transform="translate(0 38)"/>`;
    s += `<path d="${d0}" fill="url(#isCliff)" transform="translate(0 22)"/>`;
    s += `<path d="${d0}" fill="#5aa94a" transform="translate(0 8)"/>`;
    s += `<path d="${d0}" fill="url(#isTop)"/>`;
    s += `<path d="${d0}" fill="none" stroke="#e6ffcc" stroke-width="3" opacity=".7" transform="translate(0 -1)"/>`;
    for (let i = 0; i < 9; i++) { const a = rnd() * Math.PI * 2, r = .3 + rnd() * .55; s += tuft(cx + Math.cos(a) * rx * r, cy + Math.sin(a) * ry * r, .4 + rnd() * .3, '#6cc05a'); }
  }
  // road
  s += `<path d="${d}" stroke="#7a4fb8" stroke-width="44" fill="none" stroke-linecap="round" opacity=".2" filter="url(#fBlur10)" transform="translate(0 8)"/>`;
  s += `<path d="${d}" stroke="#ffe27a" stroke-width="70" fill="none" stroke-linecap="round" opacity=".28" filter="url(#fBlur10)"/>`;
  s += `<path d="${d}" stroke="#f3c75e" stroke-width="40" fill="none" stroke-linecap="round"/>`;
  s += `<path d="${d}" stroke="url(#gPath)" stroke-width="32" fill="none" stroke-linecap="round"/>`;
  s += `<path d="${d}" stroke="#fffbe8" stroke-width="10" fill="none" stroke-linecap="round" opacity=".8"/>`;
  s += `<path d="${d}" stroke="#ffffff" stroke-width="5" stroke-dasharray="1 22" fill="none" stroke-linecap="round" filter="url(#fGlow)"/>`;
  // bushes, trees & flowers planted on the islands (away from the road)
  const deco = [[64, 124, 'b'], [336, 96, 't'], [332, 336, 'b'], [74, 300, 't'], [76, 560, 'b'], [346, 520, 't'], [324, 768, 'b'], [70, 742, 't'], [100, 966, 'b'], [330, 966, 'b']];
  for (const [x, y, k] of deco) s += k === 'b' ? bush(x, y, .55, rnd() > .5) : pic('1f333', x - 32, y - 58, 64);
  const fl = ['1f338', '1f33c', '1f337'];
  const spots = [[112, 168], [296, 156], [128, 76], [262, 62], [108, 384], [292, 300], [272, 394], [122, 604], [302, 592], [140, 500], [282, 806], [112, 824], [282, 722], [154, 1000], [292, 1004], [58, 188], [352, 372], [56, 620], [350, 826]];
  spots.forEach(([x, y], i) => { s += pic(fl[i % 3], x - 12, y - 18, 22 + rnd() * 8); });
  for (const y of [236, 452, 668, 866]) { s += sparkle(80 + rnd() * 40, y, 6, '#fffbe6', true); s += sparkle(300 + rnd() * 40, y + 12, 5, '#fffbe6', true); }
  for (let i = 0; i < 10; i++) s += sparkle(20 + rnd() * 360, 20 + rnd() * 1000, 3 + rnd() * 3, '#fffbe6', true, .8);
  s += dust(0, 0, W, H, 70, '#fff6c0', 1.6);
  // goal castle
  s += `<circle cx="${end[0]}" cy="${end[1] - 30}" r="120" fill="url(#gGlow)" opacity=".9"/>`;
  s += src('castle', end[0] - 110, end[1] - 165, 220);
  s += '</svg>';
  return { svg: s, stations: pts.map(([x, y]) => [+(x / W * 100).toFixed(2), +(y / H * 100).toFixed(2)]) };
}
