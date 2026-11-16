'use strict';
const iconPaths={
  home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21v-7h6v7"/>',
  book:'<path d="M12 7c-3-2-6-2-9-1v13c3-1 6-1 9 1 3-2 6-2 9-1V6c-3-1-6-1-9 1z"/><path d="M12 7v13"/>',
  parent:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
  sound:'<polygon points="3 9 7 9 12 5 12 19 7 15 3 15 3 9"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19 6a9 9 0 0 1 0 12"/>',
  mute:'<polygon points="3 9 7 9 12 5 12 19 7 15 3 15 3 9"/><path d="m16 9 5 6m0-6-5 6"/>',
  arrow:'<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
  check:'<path d="m5 12 5 5L20 7"/>',
  star:'<path d="m12 2.8 2.8 5.8 6.4.9-4.6 4.5 1.1 6.4-5.7-3-5.7 3 1.1-6.4-4.6-4.5 6.4-.9z"/>',
  trophy:'<path d="M8 21h8m-4-4v4M5 4h14v6a7 7 0 0 1-14 0z"/><path d="M5 6H2v3a4 4 0 0 0 4 4M19 6h3v3a4 4 0 0 1-4 4"/>',
  settings:'<path d="M4 7h16M4 17h16M8 4v6M16 14v6"/>',
  replay:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  heart:'<path d="M20.8 8.5c0 4-8.8 10-8.8 10S3.2 12.5 3.2 8.5a4.7 4.7 0 0 1 8.8-2.2 4.7 4.7 0 0 1 8.8 2.2z"/>',
  sparkles:'<path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/><path d="m20 17 .7 2.3L23 20l-2.3.7L20 23l-.7-2.3L17 20l2.3-.7z"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  puzzle:'<path d="M4 4h6c0 4 4 4 4 0h6v6c-4 0-4 4 0 4v6h-6c0-4-4-4-4 0H4v-6c4 0 4-4 0-4z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.8-4 3.8-6.5 7.5-6.5s6.7 2.5 7.5 6.5"/>',
  chev:'<path d="m15 18-6-6 6-6"/>',
  play:'<path d="M7 4.5v15a1 1 0 0 0 1.5.9l12-7.5a1 1 0 0 0 0-1.8l-12-7.5A1 1 0 0 0 7 4.5z" fill="currentColor"/>',
  close:'<path d="M6 6l12 12M18 6 6 18"/>',
  family:'<circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="9.5" r="2.5"/><path d="M3 20c.5-3.6 2.9-6 6-6s5.5 2.4 6 6"/><path d="M15.5 14.2c2.6-.3 4.8 1.6 5.3 4.8"/>',
  hand:'<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12m0-1V4a1.5 1.5 0 0 1 3 0v7m0-5.5a1.5 1.5 0 0 1 3 0V13m0-4a1.5 1.5 0 0 1 3 0v5a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-2.7L3.6 14a1.6 1.6 0 0 1 2.6-1.8L8 14"/>',
  ear:'<path d="M6 9a6 6 0 1 1 12 0c0 3-2 4.2-3 5.5-.8 1-1 2-1 3a3 3 0 0 1-6 0"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-1.5 2-1.5 3.5"/>',
  map:'<path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>'
};
function icon(name,filled=false){return '<svg viewBox="0 0 24 24" fill="'+(filled?'currentColor':'none')+'" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(iconPaths[name]||iconPaths.star)+'</svg>'}
function mascot(){return `<img src="./art/luli-wand.webp" alt="" aria-hidden="true" width="230" height="230">`}
function mascotJump(){return `<img src="./art/luli-jump.webp" alt="" aria-hidden="true" width="230" height="230">`}
// Self-contained vector art: illustrations work without downloading anything.
const artwork={
 sun:'<g stroke="#f4b54b" stroke-width="6" stroke-linecap="round"><path d="M65 7v15m0 86v15M7 65h15m86 0h15M24 24l11 11m60 60 11 11M106 24 95 35M35 95l-11 11"/></g><circle cx="65" cy="65" r="34" fill="#ffe083"/><circle cx="53" cy="62" r="3.5" fill="#70523f"/><circle cx="76" cy="62" r="3.5" fill="#70523f"/><path d="M55 76q10 10 20 0" fill="none" stroke="#70523f" stroke-width="3" stroke-linecap="round"/>',
 house:'<path d="M18 58 64 17l48 41" fill="none" stroke="#9871c8" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 56v59h73V56L64 28z" fill="#facbd6"/><rect x="57" y="75" width="22" height="40" rx="4" fill="#9973d9"/><rect x="33" y="66" width="19" height="19" rx="4" fill="#fff6cb"/><rect x="86" y="66" width="10" height="19" rx="3" fill="#fff6cb"/><circle cx="74" cy="94" r="2" fill="white"/>',
 fish:'<path d="M100 69l25-24v49l-25-22" fill="#b4d9ef"/><ellipse cx="64" cy="70" rx="48" ry="32" fill="#ffa982"/><path d="M54 48 71 25l14 23M48 87l16 18 15-18" fill="#ffca9e"/><circle cx="37" cy="65" r="5" fill="#454074"/><path d="M22 78q10 9 22 1" fill="none" stroke="#df856e" stroke-width="3"/><circle cx="105" cy="21" r="5" fill="none" stroke="#a5d9f7" stroke-width="3"/>',
 water:'<path d="M33 17h64l-8 94H41z" fill="#eaf7ff" stroke="#82bcdd" stroke-width="5" stroke-linejoin="round"/><path d="M39 66q11-10 22 0t26 0l-4 39H45z" fill="#9cd8f4"/><path d="M30 17h70" stroke="#8bb9cc" stroke-width="5" stroke-linecap="round"/><path d="M52 81q10-6 20 0" stroke="#fff" stroke-width="4" stroke-linecap="round" fill="none"/>',
 heart:'<path d="M65 114C38 93 13 75 13 49c0-19 13-32 30-32 12 0 20 6 24 15 5-9 14-15 26-15 18 0 30 13 30 32 0 26-26 47-58 65z" fill="#fd93ab" stroke="#ec789c" stroke-width="3"/><path d="M36 38q7-11 19-9" fill="none" stroke="#ffe8ee" stroke-linecap="round" stroke-width="5"/>',
 book:'<path d="M65 27C47 16 26 16 12 21v75c20-6 37-3 53 7 18-10 38-13 53-7V21c-19-5-38-4-53 6" fill="#c7ddff" stroke="#719acc" stroke-width="5" stroke-linejoin="round"/><path d="M65 27v76" stroke="#719acc" stroke-width="5"/><path d="M24 40c10-2 23 1 31 6M24 56c10-2 23 1 31 6m20-16c11-7 21-8 33-6M75 62c11-6 22-8 33-6" stroke="white" stroke-linecap="round" stroke-width="4"/>',
 flower:'<path d="M65 61v57" stroke="#5aab84" stroke-width="8" stroke-linecap="round"/><path d="M65 91q-17-13-31-6 8 17 31 17m0-16q13-15 30-11-3 17-30 24" fill="#80cba0"/><g fill="#fab6cd"><ellipse cx="65" cy="34" rx="15" ry="21"/><ellipse cx="65" cy="86" rx="15" ry="21"/><ellipse cx="39" cy="60" rx="21" ry="15"/><ellipse cx="91" cy="60" rx="21" ry="15"/></g><circle cx="65" cy="60" r="17" fill="#ffe18a"/>',
 ball:'<circle cx="65" cy="65" r="49" fill="#ffcd85" stroke="#f5a660" stroke-width="4"/><path d="M24 38q46 20 82 65M28 96q49-52 77-57" fill="none" stroke="#fff7ec" stroke-width="8"/><path d="M16 65h98" stroke="#ee9a6d" stroke-width="4" opacity=".65"/>',
 train:'<rect x="19" y="24" width="92" height="78" rx="15" fill="#9cb8f9"/><rect x="29" y="35" width="32" height="27" rx="5" fill="#e9f8ff"/><rect x="70" y="35" width="32" height="27" rx="5" fill="#e9f8ff"/><rect x="34" y="75" width="15" height="12" rx="4" fill="#fff0b8"/><rect x="81" y="75" width="15" height="12" rx="4" fill="#fff0b8"/><path d="M35 104 24 122M96 104l10 18M19 115h92" stroke="#6179c9" stroke-width="7" stroke-linecap="round"/>',
 candle:'<rect x="45" y="44" width="40" height="67" rx="6" fill="#a8c6ff"/><path d="M65 47V31" stroke="#4a3b54" stroke-width="4"/><path d="M65 32c-18-10-3-25 0-32 8 12 19 23 0 32z" fill="#ffbc55"/><path d="M30 113h70" stroke="#8b73cc" stroke-width="9" stroke-linecap="round"/>',
 tree:'<path d="M64 69v49" stroke="#b57c56" stroke-width="14" stroke-linecap="round"/><circle cx="49" cy="55" r="29" fill="#9bdab0"/><circle cx="78" cy="54" r="28" fill="#7acb9c"/><circle cx="65" cy="29" r="28" fill="#a1e2ae"/>',
 hand:'<path d="M39 107 28 80q-4-10 3-14 8-5 14 6V31q0-11 9-11t9 11v24-35q0-9 9-9t8 9v38-29q0-9 9-9t8 9v35-18q0-10 9-10t9 10v36q0 39-31 42H55q-9 0-16-17z" fill="#f6c09f" stroke="#d99e85" stroke-width="3" stroke-linejoin="round"/>',
 basket:'<path d="M27 53h76l-9 56H36z" fill="#f5c986" stroke="#c49a67" stroke-width="4" stroke-linejoin="round"/><path d="M45 52q2-44 20-44t20 44" fill="none" stroke="#b48657" stroke-width="7"/><path d="M29 72h72M47 55l8 51M81 55l-8 51" stroke="#fff1d4" stroke-width="5"/>',
 roof:'<path d="M16 79 65 23l49 56" fill="none" stroke="#ce81a7" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 69v46h59V69" fill="#ffd8ba"/>',
};
function art(type){return '<svg viewBox="0 0 130 130" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">'+(artwork[type]||artwork.star||artwork.sun)+'</svg>'}
const letterNames={'א':'אלף','ב':'בית','ג':'גימל','ד':'דלת','ה':'הא','ו':'וו','ז':'זין','ח':'חית','ט':'טית','י':'יוד','כ':'כף','ך':'כף סופית','ל':'למד','מ':'מם','ם':'מם סופית','נ':'נון','ן':'נון סופית','ס':'סמך','ע':'עין','פ':'פא','ף':'פא סופית','צ':'צדי','ץ':'צדי סופית','ק':'קוף','ר':'ריש','ש':'שין','ת':'תו'};
const voiceLetterNames={"א":"אָלֶף","ב":"בֵּית","ג":"גִּימֶל","ד":"דָּלֶת","ה":"הֵא","ו":"וָו","ז":"זַיִן","ח":"חֵית","ט":"טֵית","י":"יוֹד","כ":"כַּף","ך":"כַּף סוֹפִית","ל":"לָמֶד","מ":"מֵם","ם":"מֵם סוֹפִית","נ":"נוּן","ן":"נוּן סוֹפִית","ס":"סָמֶךְ","ע":"עַיִן","פ":"פֵּא","ף":"פֵּא סוֹפִית","צ":"צָדִי","ץ":"צָדִי סוֹפִית","ק":"קוֹף","ר":"רֵישׁ","ש":"שִׁין","ת":"תָּו"};
const soundBank=[
 {letter:'מ',sound:'מַ',word:'מַיִם',spoken:'מים',picture:'water'},
 {letter:'ב',sound:'בַּ',word:'בַּיִת',spoken:'בית',picture:'house'},
 {letter:'ש',sound:'שֶׁ',word:'שֶׁמֶשׁ',spoken:'שמש',picture:'sun'},
 {letter:'ד',sound:'דָּ',word:'דָּג',spoken:'דג',picture:'fish'},
 {letter:'ל',sound:'לֵ',word:'לֵב',spoken:'לב',picture:'heart'},
 {letter:'ס',sound:'סֵ',word:'סֵפֶר',spoken:'ספר',picture:'book'},
 {letter:'פ',sound:'פֶּ',word:'פֶּרַח',spoken:'פרח',picture:'flower'},
 {letter:'כ',sound:'כַּ',word:'כַּדּוּר',spoken:'כדור',picture:'ball'},
 {letter:'ר',sound:'רַ',word:'רַכֶּבֶת',spoken:'רכבת',picture:'train'},
 {letter:'נ',sound:'נֵ',word:'נֵר',spoken:'נר',picture:'candle'}
];
const wordBank=[{"word":"יָד","spoken":"יד","emoji":"✋","tier":1,"letters":["יָ","ד"]},{"word":"דָּג","spoken":"דג","emoji":"🐟","tier":1,"letters":["דָּ","ג"]},{"word":"סַל","spoken":"סל","emoji":"🧺","tier":1,"letters":["סַ","ל"]},{"word":"לֵב","spoken":"לב","emoji":"❤️","tier":1,"letters":["לֵ","ב"]},{"word":"נֵר","spoken":"נר","emoji":"🕯️","tier":1,"letters":["נֵ","ר"]},{"word":"גַּן","spoken":"גן","emoji":"🛝","tier":1,"letters":["גַּ","ן"]},{"word":"גַּג","spoken":"גג","emoji":"🏠","tier":1,"letters":["גַּ","ג"]},{"word":"יָם","spoken":"ים","emoji":"🌊","tier":1,"letters":["יָ","ם"]},{"word":"דַּף","spoken":"דף","emoji":"📄","tier":1,"letters":["דַּ","ף"]},{"word":"עֵץ","spoken":"עץ","emoji":"🌳","tier":1,"letters":["עֵ","ץ"]},{"word":"כַּד","spoken":"כד","emoji":"🏺","tier":1,"letters":["כַּ","ד"]},{"word":"כּוֹס","spoken":"כוס","emoji":"🥤","tier":1,"letters":["כּ","וֹ","ס"]},{"word":"פַּר","spoken":"פר","emoji":"🐂","tier":1,"letters":["פַּ","ר"]},{"word":"דֹּב","spoken":"דב","emoji":"🐻","tier":1,"letters":["דֹּ","ב"]},{"word":"חַם","spoken":"חם","emoji":"☀️","tier":1,"letters":["חַ","ם"]},{"word":"קַר","spoken":"קר","emoji":"❄️","tier":1,"letters":["קַ","ר"]},{"word":"בֵּן","spoken":"בן","emoji":"👦","tier":1,"letters":["בֵּ","ן"]},{"word":"בַּת","spoken":"בת","emoji":"👧","tier":1,"letters":["בַּ","ת"]},{"word":"אָב","spoken":"אב","emoji":"👨","tier":1,"letters":["אָ","ב"]},{"word":"אֵם","spoken":"אם","emoji":"👩","tier":1,"letters":["אֵ","ם"]},{"word":"פַּח","spoken":"פח","emoji":"🗑️","tier":1,"letters":["פַּ","ח"]},{"word":"הַר","spoken":"הר","emoji":"⛰️","tier":1,"letters":["הַ","ר"]},{"word":"עֵט","spoken":"עט","emoji":"🖊️","tier":1,"letters":["עֵ","ט"]},{"word":"שֵׁן","spoken":"שן","emoji":"🦷","tier":1,"letters":["שֵׁ","ן"]},{"word":"צָב","spoken":"צב","emoji":"🐢","tier":1,"letters":["צָ","ב"]},{"word":"פִּיל","spoken":"פיל","emoji":"🐘","tier":1,"letters":["פִּ","י","ל"]},{"word":"תּוֹף","spoken":"תוף","emoji":"🥁","tier":1,"letters":["תּ","וֹ","ף"]},{"word":"בָּרָק","spoken":"ברק","emoji":"⚡","tier":2,"letters":["בָּ","רָ","ק"]},{"word":"שֶׁמֶשׁ","spoken":"שמש","emoji":"☀️","tier":2,"letters":["שֶׁ","מֶ","שׁ"]},{"word":"פֶּרַח","spoken":"פרח","emoji":"🌸","tier":2,"letters":["פֶּ","רַ","ח"]},{"word":"סֵפֶר","spoken":"ספר","emoji":"📚","tier":2,"letters":["סֵ","פֶ","ר"]},{"word":"כֶּלֶב","spoken":"כלב","emoji":"🐕","tier":2,"letters":["כֶּ","לֶ","ב"]},{"word":"חָתוּל","spoken":"חתול","emoji":"🐈","tier":2,"letters":["חָ","ת","וּ","ל"]},{"word":"תּוּת","spoken":"תות","emoji":"🍓","tier":2,"letters":["תּ","וּ","ת"]},{"word":"בַּיִת","spoken":"בית","emoji":"🏡","tier":2,"letters":["בַּ","יִ","ת"]},{"word":"תִּיק","spoken":"תיק","emoji":"🎒","tier":2,"letters":["תִּ","י","ק"]},{"word":"גֶּזֶר","spoken":"גזר","emoji":"🥕","tier":2,"letters":["גֶּ","זֶ","ר"]},{"word":"מֶלַח","spoken":"מלח","emoji":"🧂","tier":2,"letters":["מֶ","לַ","ח"]},{"word":"לֶחֶם","spoken":"לחם","emoji":"🍞","tier":2,"letters":["לֶ","חֶ","ם"]},{"word":"חָלָב","spoken":"חלב","emoji":"🥛","tier":2,"letters":["חָ","לָ","ב"]},{"word":"מַפָּה","spoken":"מפה","emoji":"🗺️","tier":2,"letters":["מַ","פָּ","ה"]},{"word":"בֵּיצָה","spoken":"ביצה","emoji":"🥚","tier":2,"letters":["בֵּ","י","צָ","ה"]},{"word":"זַיִת","spoken":"זית","emoji":"🫒","tier":2,"letters":["זַ","יִ","ת"]},{"word":"חָצִיל","spoken":"חציל","emoji":"🍆","tier":2,"letters":["חָ","צִ","י","ל"]},{"word":"מֶלֶךְ","spoken":"מלך","emoji":"🤴","tier":2,"letters":["מֶ","לֶ","ךְ"]},{"word":"שׁוּק","spoken":"שוק","emoji":"🛒","tier":2,"letters":["שׁ","וּ","ק"]},{"word":"סוּס","spoken":"סוס","emoji":"🐎","tier":2,"letters":["ס","וּ","ס"]},{"word":"דֶּלֶת","spoken":"דלת","emoji":"🚪","tier":2,"letters":["דֶּ","לֶ","ת"]},{"word":"חַלּוֹן","spoken":"חלון","emoji":"🪟","tier":2,"letters":["חַ","לּ","וֹ","ן"]},{"word":"מִטָּה","spoken":"מטה","emoji":"🛏️","tier":2,"letters":["מִ","טָּ","ה"]},{"word":"בֶּגֶד","spoken":"בגד","emoji":"👕","tier":2,"letters":["בֶּ","גֶ","ד"]},{"word":"חֶדֶר","spoken":"חדר","emoji":"🛋️","tier":2,"letters":["חֶ","דֶ","ר"]},{"word":"דֶּגֶל","spoken":"דגל","emoji":"🚩","tier":2,"letters":["דֶּ","גֶ","ל"]},{"word":"גֶּשֶׁם","spoken":"גשם","emoji":"🌧️","tier":2,"letters":["גֶּ","שֶׁ","ם"]},{"word":"עָנָן","spoken":"ענן","emoji":"☁️","tier":2,"letters":["עָ","נָ","ן"]},{"word":"רֶגֶל","spoken":"רגל","emoji":"🦶","tier":2,"letters":["רֶ","גֶ","ל"]},{"word":"יוֹם","spoken":"יום","emoji":"🌅","tier":2,"letters":["י","וֹ","ם"]},{"word":"לַיְלָה","spoken":"לילה","emoji":"🌙","tier":2,"letters":["לַ","יְ","לָ","ה"]},{"word":"פָּרָה","spoken":"פרה","emoji":"🐄","tier":2,"letters":["פָּ","רָ","ה"]},{"word":"שָׁעוֹן","spoken":"שעון","emoji":"⏰","tier":2,"letters":["שָׁ","ע","וֹ","ן"]},{"word":"דְּבַשׁ","spoken":"דבש","emoji":"🍯","tier":2,"letters":["דְּ","בַ","שׁ"]},{"word":"קַיִץ","spoken":"קיץ","emoji":"🏖️","tier":2,"letters":["קַ","יִ","ץ"]},{"word":"חוֹרֶף","spoken":"חורף","emoji":"☃️","tier":2,"letters":["ח","וֹ","רֶ","ף"]},{"word":"שֶׁלֶג","spoken":"שלג","emoji":"❄️","tier":2,"letters":["שֶׁ","לֶ","ג"]},{"word":"כַּדּוּר","spoken":"כדור","emoji":"⚽","tier":3,"letters":["כַּ","דּ","וּ","ר"]},{"word":"בּוּבָּה","spoken":"בובה","emoji":"🪆","tier":3,"letters":["בּ","וּ","בָּ","ה"]},{"word":"בָּנָנָה","spoken":"בננה","emoji":"🍌","tier":3,"letters":["בָּ","נָ","נָ","ה"]},{"word":"תַּפּוּחַ","spoken":"תפוח","emoji":"🍎","tier":3,"letters":["תַּ","פּ","וּ","חַ"]},{"word":"תַּפּוּז","spoken":"תפוז","emoji":"🍊","tier":3,"letters":["תַּ","פּ","וּ","ז"]},{"word":"לִימוֹן","spoken":"לימון","emoji":"🍋","tier":3,"letters":["לִ","י","מ","וֹ","ן"]},{"word":"אֲבַטִּיחַ","spoken":"אבטיח","emoji":"🍉","tier":3,"letters":["אֲ","בַ","טִּ","י","חַ"]},{"word":"אַגָּס","spoken":"אגס","emoji":"🍐","tier":3,"letters":["אַ","גָּ","ס"]},{"word":"אַרְיֵה","spoken":"אריה","emoji":"🦁","tier":3,"letters":["אַ","רְ","יֵ","ה"]},{"word":"דְּבוֹרָה","spoken":"דבורה","emoji":"🐝","tier":3,"letters":["דְּ","ב","וֹ","רָ","ה"]},{"word":"פַּרְפַּר","spoken":"פרפר","emoji":"🦋","tier":3,"letters":["פַּ","רְ","פַּ","ר"]},{"word":"נָמֵר","spoken":"נמר","emoji":"🐆","tier":3,"letters":["נָ","מֵ","ר"]},{"word":"קִפּוֹד","spoken":"קפוד","emoji":"🦔","tier":3,"letters":["קִ","פּ","וֹ","ד"]},{"word":"קֶשֶׁת","spoken":"קשת","emoji":"🌈","tier":3,"letters":["קֶ","שֶׁ","ת"]},{"word":"כּוֹכָב","spoken":"כוכב","emoji":"⭐","tier":3,"letters":["כּ","וֹ","כָ","ב"]},{"word":"יָרֵחַ","spoken":"ירח","emoji":"🌙","tier":3,"letters":["יָ","רֵ","חַ"]},{"word":"מָטוֹס","spoken":"מטוס","emoji":"✈️","tier":3,"letters":["מָ","ט","וֹ","ס"]},{"word":"רַכֶּבֶת","spoken":"רכבת","emoji":"🚂","tier":3,"letters":["רַ","כֶּ","בֶ","ת"]},{"word":"מְכוֹנִית","spoken":"מכונית","emoji":"🚗","tier":3,"letters":["מְ","כ","וֹ","נִ","י","ת"]},{"word":"סִירָה","spoken":"סירה","emoji":"⛵","tier":3,"letters":["סִ","י","רָ","ה"]},{"word":"מִגְדָּל","spoken":"מגדל","emoji":"🏰","tier":3,"letters":["מִ","גְ","דָּ","ל"]},{"word":"מַחְבֶּרֶת","spoken":"מחברת","emoji":"📓","tier":3,"letters":["מַ","חְ","בֶּ","רֶ","ת"]},{"word":"עִפָּרוֹן","spoken":"עפרון","emoji":"✏️","tier":3,"letters":["עִ","פָּ","ר","וֹ","ן"]},{"word":"מַחְשֵׁב","spoken":"מחשב","emoji":"💻","tier":3,"letters":["מַ","חְ","שֵׁ","ב"]},{"word":"מַפְתֵּחַ","spoken":"מפתח","emoji":"🔑","tier":3,"letters":["מַ","פְ","תֵּ","חַ"]},{"word":"מִטְרִיָּה","spoken":"מטריה","emoji":"☂️","tier":3,"letters":["מִ","טְ","רִ","יָּ","ה"]},{"word":"מַתָּנָה","spoken":"מתנה","emoji":"🎁","tier":3,"letters":["מַ","תָּ","נָ","ה"]},{"word":"בַּלוֹן","spoken":"בלון","emoji":"🎈","tier":3,"letters":["בַּ","ל","וֹ","ן"]},{"word":"עוּגָה","spoken":"עוגה","emoji":"🍰","tier":3,"letters":["ע","וּ","גָ","ה"]},{"word":"מַגָּף","spoken":"מגף","emoji":"🥾","tier":3,"letters":["מַ","גָּ","ף"]},{"word":"כִּסֵּא","spoken":"כסא","emoji":"🪑","tier":3,"letters":["כִּ","סֵּ","א"]},{"word":"סַנְדָּל","spoken":"סנדל","emoji":"👡","tier":3,"letters":["סַ","נְ","דָּ","ל"]},{"word":"חוּלְצָה","spoken":"חולצה","emoji":"👕","tier":3,"letters":["ח","וּ","לְ","צָ","ה"]},{"word":"כּוֹבַע","spoken":"כובע","emoji":"🧢","tier":3,"letters":["כּ","וֹ","בַ","ע"]},{"word":"מְעִיל","spoken":"מעיל","emoji":"🧥","tier":3,"letters":["מְ","עִ","י","ל"]},{"word":"נַעַל","spoken":"נעל","emoji":"👟","tier":3,"letters":["נַ","עַ","ל"]},{"word":"שׁוֹקוֹלָד","spoken":"שוקולד","emoji":"🍫","tier":3,"letters":["שׁ","וֹ","ק","וֹ","לָ","ד"]},{"word":"פִּיצָה","spoken":"פיצה","emoji":"🍕","tier":3,"letters":["פִּ","י","צָ","ה"]},{"word":"גְּלִידָה","spoken":"גלידה","emoji":"🍦","tier":3,"letters":["גְּ","לִ","י","דָ","ה"]},{"word":"עֲנָבִים","spoken":"ענבים","emoji":"🍇","tier":3,"letters":["עֲ","נָ","בִ","י","ם"]},{"word":"גַּרְבַּיִם","spoken":"גרבים","emoji":"🧦","tier":3,"letters":["גַּ","רְ","בַּ","יִ","ם"]},{"word":"פַּנָּס","spoken":"פנס","emoji":"🔦","tier":3,"letters":["פַּ","נָּ","ס"]},{"word":"מְנוֹרָה","spoken":"מנורה","emoji":"💡","tier":3,"letters":["מְ","נ","וֹ","רָ","ה"]},{"word":"קוּפְסָה","spoken":"קופסה","emoji":"📦","tier":3,"letters":["ק","וּ","פְּ","סָ","ה"]},{"word":"מַחַט","spoken":"מחט","emoji":"🪡","tier":3,"letters":["מַ","חַ","ט"]},{"word":"פַּעֲמוֹן","spoken":"פעמון","emoji":"🔔","tier":3,"letters":["פַּ","עֲ","מ","וֹ","ן"]},{"word":"סֻכָּרִיָּה","spoken":"סכריה","emoji":"🍬","tier":3,"letters":["סֻ","כָּ","רִ","יָּ","ה"]},{"word":"מַצְלֵמָה","spoken":"מצלמה","emoji":"📷","tier":3,"letters":["מַ","צְ","לֵ","מָ","ה"]},{"word":"עֲגָלָה","spoken":"עגלה","emoji":"🛒","tier":3,"letters":["עֲ","גָ","לָ","ה"]},{"word":"עֲפִיפוֹן","spoken":"עפיפון","emoji":"🪁","tier":3,"letters":["עֲ","פִ","י","פ","וֹ","ן"]},{"word":"חֲצָצְרָה","spoken":"חצצרה","emoji":"🎺","tier":3,"letters":["חֲ","צָ","צְ","רָ","ה"]},{"word":"גִּיטָרָה","spoken":"גיטרה","emoji":"🎸","tier":3,"letters":["גִּ","י","טָ","רָ","ה"]},{"word":"תַּרְנְגוֹל","spoken":"תרנגול","emoji":"🐓","tier":4,"letters":["תַּ","רְ","נְ","ג","וֹ","ל"]},{"word":"מַסּוֹק","spoken":"מסוק","emoji":"🚁","tier":4,"letters":["מַ","סּ","וֹ","ק"]},{"word":"תַּנִּין","spoken":"תנין","emoji":"🐊","tier":4,"letters":["תַּ","נִּ","י","ן"]},{"word":"פִּינְגְּוִין","spoken":"פינגוין","emoji":"🐧","tier":4,"letters":["פִּ","י","נְ","גְּ","וִ","י","ן"]},{"word":"פִּטְרִיָּה","spoken":"פטריה","emoji":"🍄","tier":4,"letters":["פִּ","טְ","רִ","יָּ","ה"]},{"word":"אֲרוּחָה","spoken":"ארוחה","emoji":"🍽️","tier":4,"letters":["אֲ","ר","וּ","חָ","ה"]},{"word":"מַדְרֵגָה","spoken":"מדרגה","emoji":"🪜","tier":4,"letters":["מַ","דְ","רֵ","גָ","ה"]},{"word":"מַסְרֵק","spoken":"מסרק","emoji":"🪮","tier":4,"letters":["מַ","סְ","רֵ","ק"]},{"word":"מִקְלַחַת","spoken":"מקלחת","emoji":"🚿","tier":4,"letters":["מִ","קְ","לַ","חַ","ת"]},{"word":"כַּפָּפוֹת","spoken":"כפפות","emoji":"🧤","tier":4,"letters":["כַּ","פָּ","פ","וֹ","ת"]},{"word":"מַצֶּקֶת","spoken":"מצקת","emoji":"🥄","tier":4,"letters":["מַ","צֶּ","קֶ","ת"]},{"word":"מִסְפָּרַיִם","spoken":"מספרים","emoji":"✂️","tier":4,"letters":["מִ","סְ","פָּ","רַ","יִ","ם"]},{"word":"מִזְוָדָה","spoken":"מזודה","emoji":"🧳","tier":4,"letters":["מִ","זְ","וָ","דָ","ה"]},{"word":"אֲרָנָב","spoken":"ארנב","emoji":"🐇","tier":4,"letters":["אֲ","רָ","נָ","ב"]},{"word":"בַּרְוָז","spoken":"ברוז","emoji":"🦆","tier":4,"letters":["בַּ","רְ","וָ","ז"]},{"word":"מַחְבֵּט","spoken":"מחבט","emoji":"🎾","tier":4,"letters":["מַ","חְ","בֵּ","ט"]},{"word":"רַמְזוֹר","spoken":"רמזור","emoji":"🚦","tier":4,"letters":["רַ","מְ","ז","וֹ","ר"]},{"word":"שַׁבְּלוּל","spoken":"שבלול","emoji":"🐌","tier":4,"letters":["שַׁ","בְּ","ל","וּ","ל"]},{"word":"כַּרְטִיס","spoken":"כרטיס","emoji":"🎟️","tier":4,"letters":["כַּ","רְ","טִ","י","ס"]},{"word":"אֲנָנָס","spoken":"אננס","emoji":"🍍","tier":4,"letters":["אֲ","נָ","נָ","ס"]},{"word":"מִדְבָּר","spoken":"מדבר","emoji":"🏜️","tier":4,"letters":["מִ","דְ","בָּ","ר"]}];
const lettersByLevel={beginner:['י','ע','ל','מ','ש','ב','ד','ס'],intermediate:['י','ע','ל','מ','ש','ב','ד','ס','ג','נ','ר','ת','כ','פ','ה'],advanced:['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת','ך','ם','ן','ף','ץ'],expert:['א','ב','ג','ד','ה','ו','ז','ח','ט','י','כ','ל','מ','נ','ס','ע','פ','צ','ק','ר','ש','ת','ך','ם','ן','ף','ץ']};
// 24 short progressive levels. Each level has its own question difficulty and mastery.
// The group labels are approximate entry points, not age-based tests.
const STAGES=[
{id:'s01',group:'4',mode:'picture',title:'שומעים ומצביעים',desc:'איזו תמונה שמענו? שתי אפשרויות',choices:2,max:4},
{id:'s02',group:'4',mode:'picture',title:'אוזניים קשובות',desc:'מוצאים מילה מתוך שלוש תמונות',choices:3,max:4},
{id:'s03',group:'4',mode:'rhymes',title:'חרוזים ראשונים',desc:'בוחרים מבין שתי תמונות',choices:2,max:4},
{id:'s04',group:'4',mode:'firstSyllable',title:'אותה התחלה',desc:'מקשיבים להברה הפותחת, שתי תמונות',choices:2,max:4},
{id:'s05',group:'4',mode:'firstSyllable',title:'מי נשמע דומה?',desc:'הברה פותחת מתוך שלוש תמונות',choices:3,max:4},
{id:'s06',group:'4',mode:'rhymes',title:'מתחרזים ביחד',desc:'מוצאים חרוז מתוך שלוש תמונות',choices:3,max:4},
{id:'s07',group:'4',mode:'syllables',title:'כפיים למילה',desc:'מילה של הברה אחת או שתיים',choices:2,counts:[1,2],max:4},
{id:'s08',group:'4',mode:'letters',title:'שלום לאותיות',desc:'מזהים אות לפי השם שלה, שתי אותיות',choices:2,max:4},
{id:'s09',group:'5',mode:'letters',title:'חברות חדשות',desc:'מזהים אות מתוך שלוש',choices:3,max:5},
{id:'s10',group:'5',mode:'firstLetter',title:'אות פותחת',desc:'נָחָשׁ ונֵר — אותה אות, לא אותה הברה',choices:2,max:5},
{id:'s11',group:'5',mode:'firstLetter',title:'מי מתחיל באותה אות?',desc:'שלוש תמונות, אותה אות ראשונה',choices:3,max:5},
{id:'s12',group:'5',mode:'firstSyllable',title:'שומעים את ההבדל',desc:'הברה פותחת מבין ארבע תמונות',choices:4,max:5},
{id:'s13',group:'5',mode:'syllables',title:'רכבת ההברות',desc:'הברה אחת, שתיים או שלוש',choices:3,counts:[1,2,3],max:5},
{id:'s14',group:'5',mode:'rhymes',title:'אתגר החרוזים',desc:'חרוז מתוך ארבע תמונות',choices:4,max:5},
{id:'s15',group:'5',mode:'mapping',title:'הצליל והאות',desc:'מילה נשמעת ואות מתאימה',choices:2,max:5},
{id:'s16',group:'5',mode:'final',title:'קולות בסוף',desc:'אותו צליל סוגר בשתי תמונות',choices:2,max:5},
{id:'s17',group:'6',mode:'final',title:'בלשי הסוף',desc:'מזהים צליל סוגר מתוך שלוש',choices:3,max:5},
{id:'s18',group:'6',mode:'mapping',title:'מוצאים את האות',desc:'אות מתאימה מתוך ארבע',choices:4,max:5},
{id:'s19',group:'6',mode:'phonemes',title:'כמה צלילים?',desc:'סופרים צלילים בודדים, לא הברות',choices:3,counts:[2,3,4],max:5},
{id:'s20',group:'6',mode:'read2',title:'קוראים שתי אותיות',desc:'מילה מנוקדת ושתי תמונות',choices:2,max:5},
{id:'s21',group:'6',mode:'read2',title:'קוראים ובוחרים',desc:'מילה מנוקדת וארבע תמונות',choices:4,max:5},
{id:'s22',group:'6',mode:'words',title:'מרכיבים מילה',desc:'מסדרים אותיות מנוקדות',choices:3,max:5,wordTiers:[1]},
{id:'s23',group:'6',mode:'read',title:'מילים חדשות',desc:'קוראים מילים של 2–3 הברות',choices:3,max:5,wordTiers:[1,2]},
{id:'s24',group:'6',mode:'words',title:'אלופי המילים',desc:'מילים ארוכות ומאתגרות',choices:4,max:5,wordTiers:[2,3,4]}
];
const JOURNEY=STAGES.map(s=>s.id);
const STAGE_GROUPS=[{id:'4',title:'הרפתקאות ראשונות',subtitle:'מתאים גם לגיל 4 · מתחילים בהקשבה',tone:'peach'},{id:'5',title:'אותיות וצלילים',subtitle:'עוד מיומנויות · אות פותחת והברה פותחת',tone:'lavender'},{id:'6',title:'מגלים את הקריאה',subtitle:'מילים, צלילים קטנים ואתגרי קריאה',tone:'mint'}];
const STAGE_BY_ID=Object.fromEntries(STAGES.map(s=>[s.id,s]));

const gameInfo={
 picture:{title:'מה שמעתם?',desc:'מזהים מילה ששומעים ובוחרים תמונה',icon:'sound',bg:'pink'},
 firstSyllable:{title:'הברה פותחת',desc:'מוצאים מילים שנפתחות באותה הברה',icon:'sound',bg:'yellow'},
 firstLetter:{title:'אות פותחת',desc:'מוצאים מילים שמתחילות באותה אות',icon:'book',bg:'purple'},
 first:{title:'בלשי הצליל הפותח',desc:'איזו תמונה מתחילה באותו צליל?',icon:'sound',bg:'pink',subtitle:'שומעים ומגלים'},
 syllables:{title:'רכבת ההברות',desc:'מוחאים כפיים ומפרקים מילה להברות',icon:'puzzle',bg:'yellow',subtitle:'מפרקים להברות'},
 phonemes:{title:'ציידי הצלילים',desc:'סופרים צלילים בודדים, לא הברות',icon:'target',bg:'blue',subtitle:'מקשיבים ממש טוב'},
 mapping:{title:'מהצליל לאות',desc:'מקשרים בין הצליל ששמענו לאות',icon:'book',bg:'purple',subtitle:'מגלים את האות'},
 rhymes:{title:'ארץ החרוזים',desc:'מוצאים מילים עם סיומת דומה',icon:'heart',bg:'pink',subtitle:'שומעים מה מתחרז'},
 final:{title:'סוד הצליל האחרון',desc:'איזו מילה מסתיימת באותו צליל?',icon:'sound',bg:'blue',subtitle:'מגלים את הסוף'},
 read2:{title:'קוראים שתי אותיות',desc:'קוראים מילה קצרה ובוחרים את התמונה',icon:'book',bg:'mint',subtitle:'קוראים לבד'},
 letters:{title:'תופסים אותיות',desc:'מקשיבים ומוצאים את האות הנכונה',icon:'target',bg:'purple'},
 sounds:{title:'בלשי הצלילים – קלאסי',desc:'מוצאים תמונה שמתחילה בצליל המבוקש',icon:'sound',bg:'pink'},
 name:{title:'השם שלי',desc:'מרכיבים את השם שלי מאותיות',icon:'heart',bg:'yellow'},
 words:{title:'בונים מילים',desc:'מרכיבים מילים עם אותיות מנוקדות',icon:'puzzle',bg:'blue'},
 read:{title:'קוראים ומגלים',desc:'מילים ארוכות יותר, בלי רמז קולי',icon:'book',bg:'mint'}
};

// Hand-curated Hebrew phonological materials. These sets are separate from the
// letter-learning order in the kindergarten (which is intentionally unspecified).
// Pronunciation strings include niqqud; visual labels may be undotted.
const initialPairs=[
 {letter:'ד',words:[['דָּג','דג','🐟'],['דֶּלֶת','דלת','🚪'],['דֻּבִּי','דובי','🧸']]},
 {letter:'מ',words:[['מַיִם','מים','💧'],['מַפָּה','מפה','🗺️'],['מִטָּה','מיטה','🛏️']]},
 {letter:'ש',words:[['שֶׁמֶשׁ','שמש','☀️'],['שׁוּעָל','שועל','🦊'],['שָׁעוֹן','שעון','⌚']]},
 {letter:'ב',words:[['בַּיִת','בית','🏠'],['בּוּבָּה','בובה','🪆'],['בָּנָנָה','בננה','🍌']]},
 {letter:'ס',words:[['סֵפֶר','ספר','📖'],['סוּס','סוס','🐎'],['סַל','סל','🧺']]},
 {letter:'פ',words:[['פֶּרַח','פרח','🌸'],['פָּרָה','פרה','🐄'],['פַּנָּס','פנס','🔦']]},
 {letter:'ל',words:[['לֵב','לב','❤️'],['לֶחֶם','לחם','🍞'],['לִימוֹן','לימון','🍋']]},
 {letter:'נ',words:[['נֵר','נר','🕯️'],['נָחָשׁ','נחש','🐍'],['נַעַל','נעל','👟']]},
 {letter:'ר',words:[['רַכֶּבֶת','רכבת','🚂'],['רִמּוֹן','רימון','🍎'],['רֶגֶל','רגל','🦶']]},
 {letter:'כ',words:[['כַּדּוּר','כדור','⚽'],['כּוֹבַע','כובע','🧢'],['כֶּלֶב','כלב','🐕']]},
 {letter:'ג',words:[['גַּג','גג','🏠'],['גֶּזֶר','גזר','🥕'],['גָּמָל','גמל','🐪']]},
 {letter:'ת',words:[['תּוּת','תות','🍓'],['תּוֹף','תוף','🥁'],['תִּיק','תיק','🎒']]}
];
// Opening spoken syllable is NOT the same as opening written letter.
// בַּלוֹן / בָּנָנָה: both /ba/; נָחָשׁ / נֵר: same נ but /na/ vs /ne/.
const openingItems=[
 ['בַּלוֹן','בלון','🎈','ב','ba'],['בָּנָנָה','בננה','🍌','ב','ba'],['בַּיִת','בית','🏠','ב','ba'],['בּוּבָּה','בובה','🪆','ב','bu'],['בּוּר','בור','🕳️','ב','bu'],
 ['נָחָשׁ','נחש','🐍','נ','na'],['נַעַל','נעל','👟','נ','na'],['נַעֲרָה','נערה','👧','נ','na'],['נֵר','נר','🕯️','נ','ne'],['נֶשֶׁר','נשר','🦅','נ','ne'],
 ['מַפָּה','מפה','🗺️','מ','ma'],['מַיִם','מים','💧','מ','ma'],['מַתָּנָה','מתנה','🎁','מ','ma'],['מִיץ','מיץ','🧃','מ','mi'],['מִטָּה','מיטה','🛏️','מ','mi'],
 ['שָׁעָה','שעה','⏰','ש','sha'],['שָׁלוֹם','שלום','👋','ש','sha'],['שָׁפָן','שפן','🐇','ש','sha'],['שֶׁמֶשׁ','שמש','☀️','ש','she'],['שֶׁלֶג','שלג','❄️','ש','she'],
 ['דָּג','דג','🐟','ד','da'],['דַּף','דף','📄','ד','da'],['דָּלִי','דלי','🪣','ד','da'],['דֶּלֶת','דלת','🚪','ד','de'],['דֶּגֶל','דגל','🚩','ד','de'],
 ['גַּג','גג','🏠','ג','ga'],['גַּן','גן','🛝','ג','ga'],['גָּמָל','גמל','🐪','ג','ga'],['גֶּשֶׁם','גשם','🌧️','ג','ge'],['גֶּזֶר','גזר','🥕','ג','ge'],
 ['פָּרָה','פרה','🐄','פ','pa'],['פַּרְפַּר','פרפר','🦋','פ','pa'],['פַּח','פח','🗑️','פ','pa'],['פֶּרַח','פרח','🌸','פ','pe'],['פֶּסֶל','פסל','🗿','פ','pe'],
 ['כַּדּוּר','כדור','⚽','כ','ka'],['כַּד','כד','🏺','כ','ka'],['כֶּלֶב','כלב','🐕','כ','ke'],['כֶּתֶר','כתר','👑','כ','ke'],
 ['רַכֶּבֶת','רכבת','🚂','ר','ra'],['רַגְלַיִם','רגליים','🦶','ר','ra'],['רִמּוֹן','רימון','🍎','ר','ri'],['רִקּוּד','ריקוד','💃','ר','ri']
].map(([word,label,emoji,letter,opening],i)=>({id:'o'+i,word,label,emoji,letter,opening}));
// Compact, concrete pictures for independent listening at age four.
const listeningItems=openingItems.filter(x=>['בלון','בננה','בית','בובה','נחש','נעל','נר','נשר','מפה','מים','מתנה','מיץ','מיטה','שפן','שמש','שלג','דג','דף','דלי','דלת','גג','גן','גמל','גזר','פרה','פרפר','פרח','כדור','כלב','כתר','רכבת'].includes(x.label));
const phonicsItems=initialPairs.flatMap((g,gi)=>g.words.map((w,wi)=>({id:'i'+gi+'-'+wi,word:w[0],label:w[1],emoji:w[2],first:g.letter})));
const syllableItems=[
 ['דָּג','דג','🐟',['דָּג']],['יָד','יד','✋',['יָד']],['תּוּת','תות','🍓',['תּוּת']],
 ['בּוּבָּה','בובה','🪆',['בּוּ','בָּה']],['מַפָּה','מפה','🗺️',['מַ','פָּה']],['שֶׁמֶשׁ','שמש','☀️',['שֶׁ','מֶשׁ']],
 ['דֶּלֶת','דלת','🚪',['דֶּ','לֶת']],['כַּדּוּר','כדור','⚽',['כַּ','דּוּר']],['סֵפֶר','ספר','📖',['סֵ','פֶר']],
 ['גֶּזֶר','גזר','🥕',['גֶּ','זֶר']],['פֶּרַח','פרח','🌸',['פֶּ','רַח']],['כֶּלֶב','כלב','🐕',['כֶּ','לֶב']],
 ['פַּרְפַּר','פרפר','🦋',['פַּרְ','פַּר']],['סַנְדָּל','סנדל','👡',['סַנְ','דָּל']],
 ['בָּנָנָה','בננה','🍌',['בָּ','נָ','נָה']],['עֲגָלָה','עגלה','🛒',['עֲ','גָ','לָה']],
 ['מַתָּנָה','מתנה','🎁',['מַ','תָּ','נָה']],['רַכֶּבֶת','רכבת','🚂',['רַ','כֶּ','בֶת']],
 ['תַּפּוּחַ','תפוח','🍎',['תַּ','פּוּ','חַ']],['שׁוֹקוֹלָד','שוקולד','🍫',['שׁוֹ','קוֹ','לָד']],
 ['מַחְבֶּרֶת','מחברת','📓',['מַחְ','בֶּ','רֶת']],
 ['סֻכָּרִיָּה','סוכריה','🍬',['סֻ','כָּ','רִ','יָּה']]
].map(([word,label,emoji,parts],i)=>({id:'s'+i,word,label,emoji,parts,count:parts.length}));
// Phoneme counts (not letter counts): CVC=3, CV=2, CVCV=4.
// Here individual phonemes are intentionally represented by dots rather than
// mechanically voicing a consonant alone through unreliable browser TTS.
const phonemeItems=[
 ['פֶּה','פה','👄',2],['מִי','מי','🙋',2],['מָה','מה','❓',2],['בָּא','בא','🚶',2],
 ['דָּג','דג','🐟',3],['יָד','יד','✋',3],['סַל','סל','🧺',3],['נֵר','נר','🕯️',3],
 ['גַּג','גג','🏠',3],['חַם','חם','☀️',3],['כֵּן','כן','👍',3],
 ['בּוּבָּה','בובה','🪆',4],['מַפָּה','מפה','🗺️',4],['פָּרָה','פרה','🐄',4]
].map(([word,label,emoji,count],i)=>({id:'p'+i,word,label,emoji,count}));
const rhymePairs=[
 [['דָּג','דג','🐟'],['גַּג','גג','🏠']],
 [['יָד','יד','✋'],['כַּד','כד','🏺']],
 [['בַּיִת','בית','🏠'],['זַיִת','זית','🫒']],
 [['בַּלּוֹן','בלון','🎈'],['חַלּוֹן','חלון','🪟']],
 [['פֶּרַח','פרח','🌸'],['קֶרַח','קרח','🧊']],
 [['סִיר','סיר','🍲'],['קִיר','קיר','🧱']],
 [['סַל','סל','🧺'],['טַל','טל','💧']],
 [['שָׁלוֹם','שלום','👋'],['חֲלוֹם','חלום','💭']]
].map((pair,i)=>pair.map((w,j)=>({id:'r'+i+'-'+j,word:w[0],label:w[1],emoji:w[2],rhymeId:i})));
const finalItems=[
 ['דָּג','דג','🐟','ג'],['סַל','סל','🧺','ל'],['כַּד','כד','🏺','ד'],['נֵר','נר','🕯️','ר'],
 ['כּוֹס','כוס','🥤','ס'],['גַּן','גן','🛝','ן'],['חַם','חם','☀️','ם'],['פַּח','פח','🗑️','ח'],
 ['שַׁק','שק','💰','ק'],['תּוּת','תות','🍓','ת'],['שֵׁן','שן','🦷','ן'],['פֶּרַח','פרח','🌸','ח']
].map(([word,label,emoji,last],i)=>({id:'f'+i,word,label,emoji,last}));
// Children compare the *spoken* last phoneme, before letter-ending tasks.
const finalSoundPairs=[
 [['דָּג','דג','🐟'],['גַּג','גג','🏠']],
 [['סַל','סל','🧺'],['גָּמָל','גמל','🐪']],
 [['נֵר','נר','🕯️'],['כַּדּוּר','כדור','⚽']],
 [['פַּח','פח','🗑️'],['פֶּרַח','פרח','🌸']],
 [['גַּן','גן','🛝'],['בַּלּוֹן','בלון','🎈']],
 [['חַם','חם','☀️'],['שָׁלוֹם','שלום','👋']],
 [['תּוּת','תות','🍓'],['דֶּלֶת','דלת','🚪']],
 [['כַּד','כד','🏺'],['יָד','יד','✋']],
 [['כּוֹס','כוס','🥤'],['סוּס','סוס','🐎']],
 [['דַּף','דף','📄'],['חוֹף','חוף','🏖️']]
].map((pair,i)=>pair.map((w,j)=>({id:'end'+i+'-'+j,word:w[0],label:w[1],emoji:w[2],group:i})));
const twoLetterItems=[
 ['יָד','יד','✋'],['דָּג','דג','🐟'],['סַל','סל','🧺'],['לֵב','לב','❤️'],
 ['נֵר','נר','🕯️'],['כַּד','כד','🏺'],['גַּג','גג','🏠'],['דַּף','דף','📄'],
 ['שֵׁן','שן','🦷'],['שַׁק','שק','💰'],['יָם','ים','🌊'],['גַּן','גן','🛝'],
 ['עֵץ','עץ','🌳'],['פַּח','פח','🗑️'],['צָב','צב','🐢'],['בַּת','בת','👧'],
 ['בֵּן','בן','👦'],['חָג','חג','🎉'],['טַל','טל','💧'],['חַם','חם','☀️']
].map(([word,label,emoji],i)=>({id:'w2-'+i,word,label,spoken:label,emoji}));
const baseProgress={name:'',level:'intermediate',sound:true,narration:true,stars:0,sessions:0,history:[],completed:[],mastery:{},lastMode:null,lastPlayed:null};
const STORAGE_KEY='otiyot-kesem-local-v1';
const ACTIVE_KEY='otiyot-kesem-active-v1';
let profiles=loadProfiles();
let data=profiles.find(x=>x.id===readActiveId())||profiles[0]||null;
let screen=data?'home':'welcome';
let game=null;let toastTimer=null;let audioCtx=null;let speechToken=0;let nextStepTimer=null;
let selectedLevel='beginner';
function readActiveId(){try{return localStorage.getItem(ACTIVE_KEY)}catch(e){return null}}
function loadProfiles(){try{const arr=JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');return Array.isArray(arr)?arr.filter(x=>x&&typeof x.id==='string'&&typeof x.name==='string').map(x=>({...baseProgress,...x,history:Array.isArray(x.history)?x.history:[],completed:Array.isArray(x.completed)?x.completed:[],mastery:x.mastery&&typeof x.mastery==='object'?x.mastery:{}})):[]}catch(e){return []}}
function persistProfiles(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(profiles));if(data)localStorage.setItem(ACTIVE_KEY,data.id);else localStorage.removeItem(ACTIVE_KEY)}catch(e){/* Device may block storage. */}}
function save(){if(!data)return;profiles=profiles.map(x=>x.id===data.id?data:x);persistProfiles()}
function cleanName(n){return String(n||'').trim().replace(/[^\u05d0-\u05ea \-']/gi,'').replace(/\s+/g,' ').slice(0,18)}
function createProfile(){const input=document.getElementById('welcome-name');const name=cleanName(input?.value);if(name.replace(/[ \-']/g,'').length<2){toast('מקלידים שם פרטי בעברית, לפחות שתי אותיות');input?.focus();return}
 const id='kid-'+Date.now()+'-'+Math.floor(Math.random()*100000);data={...baseProgress,id,name,level:selectedLevel,history:[],completed:[],mastery:{},startGroup:selectedLevel==='beginner'?'4':selectedLevel==='intermediate'?'5':'6'};profiles.push(data);save();screen='home';render();window.scrollTo({top:0});speak(voiceLines.welcome);}
function useProfile(id){const match=profiles.find(p=>p.id===id);if(!match)return;data=match;save();screen='home';game=null;render();window.scrollTo({top:0});}
function addProfile(){selectedLevel='beginner';screen='welcome';game=null;render();window.scrollTo({top:0});}
function removeProfile(){if(!data)return;const oldName=data.name;if(!confirm('למחוק את ההתקדמות של '+oldName+' במכשיר הזה?'))return;profiles=profiles.filter(p=>p.id!==data.id);data=profiles[0]||null;screen=data?'home':'welcome';persistProfiles();render();toast('הפרופיל נמחק מהמכשיר');}
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
function sample(a,n){return shuffle(a).slice(0,n)}
function esc(v){return String(v).replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]))}
// Every phrase sent to the narrator is fully vowelized, including all instructions,
// congratulations, retry messages, and the words joined to those sentences.
// Visible UI feedback stays unvowelized; children see familiar text, while the voice
// gets explicit Hebrew niqqud. Personal names are intentionally not spoken because
// we cannot guess the vowelization of an arbitrary child's name.
const voiceLines={
 welcome:'אֵיזֶה כֵּיף! מַתְחִילִים לְשַׂחֵק!',
 hello:'שָׁלוֹם! אֵיזֶה כֵּיף לְשַׂחֵק כָּאן!',
 testSuccess:'שָׁלוֹם! אֵיזֶה יוֹפִי! מַתְחִילִים לְשַׂחֵק!',
 step:'יָפֶה מְאוֹד! עַכְשָׁיו הָאוֹת הַבָּאָה.',
 completed:'כָּל הַכָּבוֹד! סִיַּמְנוּ אֶת הַמִּשְׂחָק!',
 pronunciationTest:'אֵיזוֹ מִלָּה מַתְחִילָה בַּצְּלִיל מַ? מַיִם. מַפָּה. כִּמְעַט! בּוֹאוּ נְנַסֶּה שׁוּב.'
};
const praiseLines=[
 {display:'כל הכבוד!',spoken:'כָּל הַכָּבוֹד!'},
 {display:'בדיוק!',spoken:'בְּדִיּוּק!'},
 {display:'איזה יופי!',spoken:'אֵיזֶה יוֹפִי!'},
 {display:'יש! כל הכבוד!',spoken:'יֵשׁ! כָּל הַכָּבוֹד!'},
 {display:'נהדר! מצאנו!',spoken:'נֶהְדָּר! מָצָאנוּ!'}
];
const retryLines=[
 {display:'כמעט! בואו ננסה שוב.',spoken:'כִּמְעַט! בּוֹאוּ נְנַסֶּה שׁוּב.'},
 {display:'לא נורא, ננסה עוד פעם!',spoken:'לֹא נוֹרָא, נְנַסֶּה עוֹד פַּעַם!'},
 {display:'עוד ניסיון קטן, אפשר להצליח!',spoken:'עוֹד נִסָּיוֹן קָטָן, אֶפְשָׁר לְהַצְלִיחַ!'}
];

// Real MP3 recordings replace device-dependent Hebrew text-to-speech.
// The files are two audio sprites with exact word/phrase boundaries.
const recordedManifest=window.LULI_RECORDED||null;
const recordedPlayers={};
// If the parent later adds two MP3 files to /audio/, use permanent same-site copies.
// Until then, the freshly generated fal media URLs provide the recordings.
if(recordedManifest && typeof fetch==='function'){
 for(const [sheet,spec] of Object.entries(recordedManifest)){
  const local='./audio/luli-'+sheet+'.mp3';
  fetch(local,{method:'HEAD',cache:'no-cache'}).then(r=>{if(r.ok)spec.url=local}).catch(()=>{});
 }
}
let recordedGeneration=0, recordedTimer=null;
let lastRecordedStats={total:0,matched:0,unknown:[]};
function recordingText(t){return String(t||'').normalize('NFC').replace(/[^\u0591-\u05EA]+/g,' ').trim().replace(/\s+/g,' ')}
function plainRecordingText(t){return recordingText(t).replace(/[\u0591-\u05C7]/g,'')}
const recordedEntries=[];
if(recordedManifest){
 for(const [sheet,spec] of Object.entries(recordedManifest)){
  const a=spec.starts.split('.').map(v=>parseInt(v,36)/100),b=spec.ends.split('.').map(v=>parseInt(v,36)/100);
  for(let i=0;i<spec.items.length;i++){
   const key=recordingText(spec.items[i]);
   recordedEntries.push({sheet,key,plain:plainRecordingText(key),words:key.split(' '),start:a[i],end:b[i]});
  }
 }
 recordedEntries.sort((a,b)=>b.words.length-a.words.length||b.key.length-a.key.length);
}
function findRecordedSegments(message){
 const exact=recordingText(message).split(' ').filter(Boolean),raw=plainRecordingText(message).split(' ').filter(Boolean);
 const parts=[],unknown=[];
 for(let i=0;i<exact.length;){
  let found=null;
  for(const v of recordedEntries){
   const size=v.words.length;if(size>exact.length-i)continue;
   const direct=exact.slice(i,i+size).join(' ')===v.key;
   const fuzzy=raw.slice(i,i+size).join(' ')===v.plain;
   if(direct||fuzzy){found=v;break}
  }
  if(!found && raw[i]?.startsWith('ו') && raw[i].length>2){
   // Hebrew conjunction before a spoken word (e.g. וּבּוּבָּה).
   found=recordedEntries.find(v=>v.words.length===1 && v.plain===raw[i].slice(1));
  }
  if(found){parts.push(found);i+=found.words.length}else{unknown.push(exact[i]);i++}
 }
 lastRecordedStats={total:exact.length,matched:exact.length-unknown.length,unknown};
 return parts;
}
function getRecordedPlayer(sheet){
 if(recordedPlayers[sheet])return recordedPlayers[sheet];
 const spec=recordedManifest?.[sheet];if(!spec)return null;
 const el=new Audio();el.src=spec.url;el.preload='auto';el.volume=1;
 recordedPlayers[sheet]=el;return el;
}
function stopRecorded(){
 recordedGeneration++;clearTimeout(recordedTimer);recordedTimer=null;
 for(const player of Object.values(recordedPlayers)){try{player.pause()}catch(_){}}
}
function playRecorded(parts,onFinish){
 stopRecorded();const gen=recordedGeneration;let index=0,done=false;
 const finish=()=>{if(done||gen!==recordedGeneration)return;done=true;clearTimeout(recordedTimer);onFinish?.()};
 const next=()=>{
  if(gen!==recordedGeneration)return;
  if(index>=parts.length){soundState='recorded';soundError='';finish();return}
  const part=parts[index++],player=getRecordedPlayer(part.sheet);
  if(!player){finish();return}
  let segmentDone=false;let poll=null;
  const endSegment=()=>{
   if(segmentDone||gen!==recordedGeneration)return;
   segmentDone=true;clearInterval(poll);clearTimeout(recordedTimer);player.pause();next();
  };
  const start=()=>{
   if(gen!==recordedGeneration)return;
   const begin=Math.max(0,part.start+.01),end=Math.max(begin+.12,part.end-.06);
   try{player.pause();player.currentTime=begin;}catch(_){endSegment();return}
   const result=player.play();
   const monitor=()=>{
    if(gen!==recordedGeneration){clearInterval(poll);return}
    if(player.currentTime>=end){endSegment()}
   };
   poll=setInterval(monitor,45);
   recordedTimer=setTimeout(endSegment,Math.max(900,(end-begin+1.8)*1000));
   if(result?.catch)result.catch(()=>{soundState='recorded-error';soundError='הדפדפן לא הצליח לנגן הקלטה';if(index===1)toast('לא הצלחנו להשמיע את ההקלטה. בדקו חיבור לאינטרנט ולחצו שוב על הרמקול.');endSegment()});
  };
  if(player.readyState>=1)start();
  else{
   const onMeta=()=>{player.removeEventListener('loadedmetadata',onMeta);start()};
   player.addEventListener('loadedmetadata',onMeta,{once:true});
   player.load();
   recordedTimer=setTimeout(()=>{player.removeEventListener('loadedmetadata',onMeta);endSegment()},7000);
  }
 };
 next();
}

function voiceAvailable(){return !!(window.speechSynthesis&&window.SpeechSynthesisUtterance)}
let soundActivated=false, hebrewVoices=[], soundState='untried', soundError='';
let speechFallbackTimer=null, activeUtterance=null;
function refreshVoices(){
 try{hebrewVoices=voiceAvailable()?window.speechSynthesis.getVoices().filter(v=>/^he(?:-|$)/i.test(v.lang||'')):[]}catch(_){hebrewVoices=[]}
 return hebrewVoices;
}
if(voiceAvailable()){
 refreshVoices();
 try{window.speechSynthesis.addEventListener('voiceschanged',refreshVoices)}catch(e){}
}
// Called synchronously from an actual tap to satisfy mobile audio activation.
function activateAudio(){
 soundActivated=true;
 try{
  const AC=window.AudioContext||window.webkitAudioContext;
  if(AC){audioCtx=audioCtx||new AC();if(audioCtx.state==='suspended')audioCtx.resume().catch(()=>{});}
 }catch(_){/*visual feedback still works*/}
 refreshVoices();
}
function stopSpeech(){stopRecorded();speechToken++;clearTimeout(speechFallbackTimer);activeUtterance=null;try{if(voiceAvailable())speechSynthesis.cancel()}catch(e){}}
function speak(message,onFinish){
 const token=++speechToken;
 stopRecorded();clearTimeout(speechFallbackTimer);
 if(!data?.sound||data.narration===false){onFinish?.();return false}
 if(recordedManifest){
  const parts=findRecordedSegments(message);
  if(parts.length){playRecorded(parts,onFinish);return true}
 }
 if(!voiceAvailable()){soundState='unavailable';soundError='הדפדפן אינו תומך בקריינות';onFinish?.();return false}
 try{
  // On Android, voices can arrive after page load; querying again prevents empty-voice bugs.
  const voices=refreshVoices();
  const utterance=new SpeechSynthesisUtterance(String(message).normalize('NFC'));
  utterance.lang='he-IL';utterance.rate=.84;utterance.pitch=1.06;utterance.volume=1;
  const he=voices.find(v=>v.lang.toLowerCase()==='he-il')||voices[0];
  if(he)utterance.voice=he;
  if(!he){soundState='no-hebrew';soundError='לא נמצא קול עברי במכשיר';}
  let finished=false;
  const finish=(isError=false)=>{if(finished||token!==speechToken)return;finished=true;clearTimeout(speechFallbackTimer);if(isError){soundState='error';soundError='הדפדפן לא הצליח להפעיל את הקריינות';}else{soundState='ok';soundError=''};onFinish?.()};
  utterance.onstart=()=>{soundState='ok';soundError=''};
  utterance.onend=()=>finish(false);
  utterance.onerror=(evt)=>{soundState='error';soundError='שגיאת קריינות: '+(evt?.error||'לא ידועה');finish(true)};
  activeUtterance=utterance;
  speechSynthesis.cancel();
  if(speechSynthesis.paused)speechSynthesis.resume();
  speechSynthesis.speak(utterance);
  speechFallbackTimer=setTimeout(()=>{if(token===speechToken&&!finished){soundState='timeout';soundError='הקריינות לא התחילה. נסו להפעיל קול עברי בהגדרות המכשיר.';finish(true)}},10000);
  return true;
 }catch(e){soundState='error';soundError=String(e?.message||e);onFinish?.();return false}
}
// Short sound effects are real local WAV files.  This path deliberately avoids
// AudioContext timing/resume quirks on some Android browsers.
const cueCache={};
let lastCueStatus='not-tested';
function playCue(type='correct'){
 if(!data?.sound)return Promise.resolve(false);
 const cueType=type==='retry'?'retry':'correct';
 try{
  const player=cueCache[cueType]||new Audio('./audio/'+cueType+'.wav');
  cueCache[cueType]=player;
  player.preload='auto';player.volume=.75;player.pause();player.currentTime=0;
  const promise=player.play();
  if(promise&&typeof promise.then==='function')return promise.then(()=>{lastCueStatus='works';return true}).catch(e=>{lastCueStatus='blocked: '+(e.name||'unknown');return false});
  lastCueStatus='works';return Promise.resolve(true)
 }catch(e){lastCueStatus='error: '+String(e?.message||e);return Promise.resolve(false)}
}
function advanceAfterPraise(message,oldGame,minimumDisplayMs=1800){
 const startAt=Date.now();let advanced=false;
 const advance=()=>{
  if(advanced)return;
  advanced=true;clearTimeout(nextStepTimer);
  const wait=Math.max(320,minimumDisplayMs-(Date.now()-startAt));
  nextStepTimer=setTimeout(()=>{if(screen==='play'&&game===oldGame)nextQuestion()},wait);
 };
 clearTimeout(nextStepTimer);
 nextStepTimer=setTimeout(advance,9000);
 speak(message,advance);
}
function toast(msg){const old=document.querySelector('.toast');if(old)old.remove();const e=document.createElement('div');e.className='toast';e.setAttribute('role','status');e.textContent=msg;document.body.append(e);clearTimeout(toastTimer);toastTimer=setTimeout(()=>e.remove(),3200)}
function topAndNav(){
 document.body.dataset.screen=screen;
 const brand=document.querySelector('.brand span');brand.textContent='אותיות של קסם';
 const soundBtn=document.getElementById('sound-toggle');soundBtn.hidden=!data;
 const parentBtn=document.querySelector('.topbar [data-nav="parent"]');parentBtn.hidden=!data;
 const bottom=document.querySelector('.bottom-nav');bottom.hidden=!data;
 if(data){soundBtn.innerHTML=icon(data.sound?'sound':'mute');soundBtn.setAttribute('aria-label',data.sound?'כיבוי קול':'הפעלת קול');}
 document.querySelectorAll('[data-nav]').forEach(b=>{
  const which=b.dataset.nav;
  const active=which===screen||(which==='games'&&(screen==='play'||screen==='world'));
  b.classList.toggle('active',active);
  if(b.classList.contains('nav-button')){
   const name=which==='home'?'הבית':which==='games'?'עולמות':'שחקנים';
   b.innerHTML='<span class="nav-ico">'+icon(which==='home'?'home':which==='games'?'book':'parent')+'</span><span>'+name+'</span>';
   if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');
  }else if(b.classList.contains('icon-button')&&which==='parent'){b.innerHTML=icon('settings')}
 });
}
function nav(s){if(s==='play')return;clearTimeout(nextStepTimer);stopSpeech();if(!data&&s!=='welcome')return;screen=s;game=null;render();window.scrollTo({top:0,behavior:'smooth'})}
function logoMarkup(small=false){return `<h1 class="logo ${small?'logo-small':''}" aria-label="אותיות של קסם"><img class="logo-cloud" src="./art/logo-cloud.webp" alt="" aria-hidden="true"><span class="logo-top" aria-hidden="true">אותיות</span><span class="logo-ribbon" aria-hidden="true"><img class="logo-wand-star" src="./art/star.svg" alt=""><span>של קסם</span></span></h1>`}
function welcome(){const levels=[['beginner','קטנטנים','מתחילים במשחקי הקשבה'],['intermediate','מכירים אותיות','מתקדמים ביחד'],['advanced','בדרך לקריאה','אתגרים נוספים'],['expert','קוראים סקרנים','הכי מאתגר']];const cur=levels.find(l=>l[0]===selectedLevel)||levels[0];return `<section class="welcome">
${logoMarkup()}
<div class="welcome-stage" aria-hidden="true"><img class="welcome-book" src="./art/welcome-hero.webp" alt="" width="380" height="370"><img class="welcome-luli float-luli" src="./art/luli-wand.webp" alt="" width="236" height="236"></div>
<p class="welcome-lead">ברוכים הבאים להרפתקה<br>קסומה בעולם האותיות!</p>
<label class="name-label" for="welcome-name">איך קוראים לך? <img src="./art/star.svg" alt="" aria-hidden="true"></label>
<div class="name-field">${icon('user')}<input id="welcome-name" type="text" autocomplete="off" maxlength="18" placeholder="למשל: יעל" dir="rtl" aria-required="true"></div>
<button class="btn-magic" data-create-profile>${icon('sparkles')} בואו נתחיל!</button>
<details class="start-level"><summary><span class="start-level-tag">להורים</span> מאיפה מתחילים? <b>${cur[1]}</b><span class="start-level-arrow" aria-hidden="true">${icon('chev')}</span></summary><div class="pick-levels">${levels.map(([v,t,d])=>`<button class="pick-level ${selectedLevel===v?'selected':''}" type="button" data-welcome-level="${v}" aria-pressed="${selectedLevel===v}"><span class="level-dot"></span><strong>${t}</strong><small>${d}</small></button>`).join('')}</div></details>
${profiles.length?`<button class="link-btn" data-open-profiles>כבר שיחקנו פה? בוחרים שחקן ${icon('chev')}</button>`:''}
<p class="setup-footnote">בלי חשבון ובלי פרסומות. השם וההתקדמות נשמרים במכשיר בלבד.</p>
</section>${meadow()}`}
function meadow(){return `<div class="meadow" aria-hidden="true"></div>`}
const AVATARS=['1f430','1f98a','1f43b','1f984','1f43c','1f438','1f431','1f436','1f427','1f981','1f428','1f42f','1f989','1f992'];
const KID_TONES=[['#ffe1ef','#f8c4e0','#e05b9a'],['#e2ecff','#c3d7fb','#4f78d8'],['#dff7ea','#bfe9d4','#2f9a6c'],['#fff1cf','#ffe09a','#c98a12'],['#efe4ff','#d8c3fb','#7d47d6'],['#ffe6da','#ffc9b2','#d86a3d']];
function kidHash(id){let h=0;for(const c of String(id))h=(h*31+c.charCodeAt(0))>>>0;return h}
function kidLook(p){const h=kidHash(p.id);return {animal:AVATARS[h%AVATARS.length],tone:KID_TONES[(h>>>3)%KID_TONES.length]}}
function avatar(p,cls='kid-avatar'){const k=kidLook(p);return `<span class="${cls}" style="--k1:${k.tone[0]};--k2:${k.tone[1]};--k3:${k.tone[2]}"><img src="./art/pics/${k.animal}.webp" alt="" aria-hidden="true"></span>`}
function profilePicker(){return `<section class="profiles-hero"><img class="profiles-luli float-luli" src="./art/luli-wand.webp" alt="" aria-hidden="true"><div><span class="kicker">לכל ילד הרפתקה משלו</span><h1>מי בא לשחק?</h1><p>בוחרים שחקן וממשיכים בדיוק מאיפה שעצרנו.</p></div></section>
<div class="profiles-list">${profiles.map(p=>{const k=kidLook(p),done=Object.values(p.mastery||{}).filter(m=>m&&m.passed).length;return `<button type="button" class="kid-card ${data?.id===p.id?'active':''}" style="--k1:${k.tone[0]};--k2:${k.tone[1]};--k3:${k.tone[2]}" data-select-profile="${esc(p.id)}" aria-label="${esc(p.name)}, ${p.stars||0} כוכבים">${data?.id===p.id?'<span class="kid-now">משחקים עכשיו</span>':''}${avatar(p)}<strong>${esc(p.name)}</strong><span class="kid-stars"><img src="./art/star.svg" alt="" aria-hidden="true">${p.stars||0}</span><span class="kid-meter"><i style="width:${done/24*100}%"></i></span><small>${done} מתוך 24 תחנות</small></button>`}).join('')}<button type="button" class="kid-card kid-add" data-add-profile><span class="kid-plus" aria-hidden="true">+</span><strong>עוד ילד או ילדה</strong><small>פרופיל חדש</small></button></div>
<p class="setup-footnote">הפרופילים נשמרים בנפרד במכשיר הזה בלבד.</p>`}
function miniArt(type,bg){return '<div class="art-circle" style="background:'+bg+'">'+icon(type)+'</div>'}
function masteryStatus(key){return data.mastery&&data.mastery[key]?.passed===true}
function stageBase(id){return STAGE_BY_ID[id]||STAGES[0]}
function recommendedStage(){
 const group=data.startGroup|| (data.level==='beginner'?'4':data.level==='intermediate'?'5':'6');
 return STAGES.find(s=>s.group===group&&!masteryStatus(s.id))?.id || STAGES.find(s=>!masteryStatus(s.id))?.id || 's01';
}
function nextStageAfter(id){const index=JOURNEY.indexOf(id);return STAGES.slice(index+1).find(s=>!masteryStatus(s.id))?.id||STAGES[Math.min(index+1,STAGES.length-1)].id}
function stagesForGroup(group){return STAGES.filter(s=>s.group===group)}
const WORLD_THEMES={
 '4':{number:'01',title:'עולם הקולות',summary:'שומעים, מזהים ומשחקים',tag:'מתאים גם לגיל 4',icon:'sound',decor:'♪',badge:'הכי טוב להתחלה'},
 '5':{number:'02',title:'עולם האותיות',summary:'מגלים אותיות והתחלות',tag:'מכירים אותיות',icon:'book',decor:'א',badge:'מכירים עוד'},
 '6':{number:'03',title:'עולם המילים',summary:'בונים מילים וקוראים',tag:'אתגר חדש',icon:'puzzle',decor:'אב',badge:'מתקדמים לקריאה'}
};
let selectedWorld='4';
const WORLD_ART={'4':'sounds','5':'letters','6':'words'};
function worldObject(gid){const k=WORLD_ART[gid];
 if(k==='letters')return `<span class="wo wo-letters"><img src="./art/book.webp" alt=""><span class="wo-glyph">א</span><span class="tile t1">ב</span><span class="tile t2">ג</span><img class="wo-star" src="./art/star.svg" alt=""></span>`;
 if(k==='words')return `<span class="wo wo-words"><img src="./art/words.webp" alt=""><span class="cube c1">א</span><span class="cube c2">ב</span><span class="cube c3">ג</span></span>`;
 return `<span class="wo wo-sounds"><img src="./art/sounds.webp" alt=""></span>`}
function worldCards(compact=false){return `<div class="worlds-grid ${compact?'compact':''}">${STAGE_GROUPS.map(g=>{const w=WORLD_THEMES[g.id],stages=stagesForGroup(g.id),done=stages.filter(s=>masteryStatus(s.id)).length,[first,...rest]=w.title.split(' ');return `<button class="world-card wc-${WORLD_ART[g.id]}" type="button" data-open-world="${g.id}" aria-label="${w.title}. ${done} מתוך שמונה שלבים הושלמו"><span class="wc-scene" aria-hidden="true"></span><span class="wc-art" aria-hidden="true">${worldObject(g.id)}</span><span class="wc-text"><small>${first}</small><strong>${rest.join(' ')}</strong>${compact?'':`<span class="wc-sub">${w.summary}</span>`}</span><span class="wc-progress"><img src="./art/star.svg" alt="" aria-hidden="true">${done}/8</span>${compact?'':`<span class="wc-go" aria-hidden="true">${icon('chev')}</span>`}</button>`}).join('')}</div>`}
function stageGroupCards(){return worldCards()}
function world(){const group=STAGE_GROUPS.find(g=>g.id===selectedWorld)||STAGE_GROUPS[0],w=WORLD_THEMES[group.id],key=WORLD_ART[group.id],stages=stagesForGroup(group.id),done=stages.filter(s=>masteryStatus(s.id)).length,next=stages.find(s=>!masteryStatus(s.id))||stages[stages.length-1];
 const pos=[[50,6.6],[75,16.79],[49,26.98],[24,37.17],[50,47.36],[76,57.55],[50,67.74],[24.5,77.92]];
 return `<div class="world-screen ws-${key}"><button class="back-btn" data-nav="games">${icon('arrow')} כל העולמות</button>
<section class="world-banner wc-${key}"><span class="wc-scene" aria-hidden="true"></span><span class="wc-art" aria-hidden="true">${worldObject(group.id)}</span><div class="wb-text"><span class="kicker">${w.tag}</span><h1>${w.title}</h1><p>${w.summary}</p><span class="wc-progress"><img src="./art/star.svg" alt="" aria-hidden="true">${done} מתוך 8 תחנות</span></div></section>
<button class="btn-magic world-primary" data-start-stage="${next.id}">${icon('play')} ${done===8?'משחקים שוב':'ממשיכים להרפתקה'}</button>
<div class="trail-head"><h2>מסלול הקסם</h2><span>כל התחנות פתוחות</span></div>
<div class="trail" style="background-image:url(./art/trail-${key}.webp)">${stages.map((st,i)=>{const isDone=masteryStatus(st.id),isNext=st.id===next.id&&done<8,[x,y]=pos[i];return `<button class="station ${isDone?'done':''} ${isNext?'next':''}" style="--x:${x}%;--y:${y}%" type="button" data-start-stage="${st.id}" aria-label="תחנה ${i+1}: ${esc(st.title)}${isDone?' (הושלמה)':''}"><span class="station-stone">${isDone?`<img src="./art/star.svg" alt="">`:''}<b>${i+1}</b></span><span class="station-label">${esc(st.title)}</span>${isNext?`<img class="station-luli" src="./art/luli-wand.webp" alt="" aria-hidden="true">`:''}</button>`}).join('')}<span class="trail-goal" style="--x:53.5%;--y:96%">${done===8?'הגעת לטירה!':'הטירה של לולי'}</span></div></div>`}
const EXTRA_PICS={letters:'1f3af',sounds:'1f50a',name:'1f49d',words:'1f9e9',read:'1f4da'};
function extrasCards(){const extras=['letters','sounds','name','words','read'];return `<div class="games">${extras.map(key=>{const g=gameInfo[key];return `<button type="button" class="game-card gc-${g.bg}" data-start="${key}"><span class="gc-pic"><img src="./art/pics/${EXTRA_PICS[key]}.webp" alt="" aria-hidden="true"></span><strong>${esc(g.title)}</strong><span>${esc(g.desc)}</span></button>`}).join('')}</div>`}
function soundBanner(){return `<div class="sound-setup pearl"><span class="sound-setup-pic"><img src="./art/pics/1f50a.webp" alt="" aria-hidden="true"></span><div class="sound-setup-text"><strong>רוצים לשמוע את לולי?</strong><small>לולי מדברת בהקלטות עבריות מוכנות, גם באנדרואיד. צריך חיבור לאינטרנט.</small></div><button type="button" class="sound-enable" data-enable-audio>מפעילים קול</button></div>`}
function home(){const id=recommendedStage(),st=stageBase(id),done=JOURNEY.filter(masteryStatus).length;return `
<section class="home-hero"><img class="hero-luli float-luli" src="./art/luli-wand.webp" alt="" aria-hidden="true" width="236" height="236"><div class="hero-copy"><span class="hero-hi">היי, ${esc(data.name)}!</span><h1>לולי מחכה<br>לשחק איתך!</h1></div></section>
<button class="btn-magic home-play" data-start-stage="${id}"><span class="play-ico">${icon('play')}</span> ממשיכים לשחק!</button>
<section class="journey pearl"><img class="journey-castle" src="./art/castle.webp" alt="" aria-hidden="true"><div class="journey-text"><h2>המסע של ${esc(data.name)}</h2><small>התחנה הבאה: ${esc(st.title)}</small><span class="journey-bar" role="progressbar" aria-valuemin="0" aria-valuemax="24" aria-valuenow="${done}" aria-label="${done} מתוך 24 תחנות"><i style="width:${Math.max(4,done/24*100)}%"></i></span><small class="journey-count">${done} מתוך 24 תחנות</small></div><span class="stars-pill"><img src="./art/star.svg" alt="" aria-hidden="true">${data.stars||0}<span class="sr-only"> כוכבים</span></span></section>
<div class="section-title"><h2>העולמות של לולי</h2><button type="button" class="see-all" data-nav="games">לכל העולמות ${icon('chev')}</button></div>
${worldCards(true)}
<button type="button" class="menu-card pearl" data-open-profiles>${avatar(data,'menu-avatar')}<span class="menu-text"><strong>מחליפים שחקן</strong><small>לכל ילד מסע משלו</small></span>${icon('chev')}</button>
<button type="button" class="menu-card pearl" data-nav="parent"><span class="menu-icon">${icon('family')}</span><span class="menu-text"><strong>אזור ההורים</strong><small>ניהול הגדרות והתקדמות</small></span>${icon('chev')}</button>
<button class="bonus-link" type="button" data-nav="games"><img src="./art/pics/2728.webp" alt="" aria-hidden="true"> עוד משחקים והפתעות ${icon('chev')}</button>
${soundBanner()}
<p class="family-note">משחקים קצרים, בלי לחץ ובלי מבחנים. נבנה באהבה לילדי גן גומא.</p>`}
function games(){return `<button class="back-btn" data-nav="home">${icon('arrow')} הבית של לולי</button><div class="games-heading"><span class="kicker">העולמות של לולי</span><h1>לאן נטוס היום?</h1><p>בוחרים עולם ונכנסים להרפתקה. אפשר להתחיל מכל מקום.</p></div>${worldCards()}<details class="bonus-details pearl"><summary><img src="./art/pics/2728.webp" alt="" aria-hidden="true"> <span>עוד משחקים שאפשר לנסות</span><span class="bonus-arrow" aria-hidden="true">${icon('chev')}</span></summary><div class="bonus-content">${extrasCards()}</div></details>`}
function audioDiagnosticText(){return 'הקריינות עכשיו מבוססת על הקלטות MP3 אמיתיות, ולא תלויה בקול עברי במכשיר. לחצו על ״הפעלה ובדיקת קול״. אם אין קול, בדקו חיבור לאינטרנט ועוצמת מדיה.'}
function parent(){const practiced=[...new Set(data.history.filter(q=>q.mode==='letters').map(q=>q.target))];const levelOpts=[['beginner','מתחילים','פחות אפשרויות בכל שאלה, מילים מוכרות'],['intermediate','מכירים אותיות','יותר אפשרויות ודוגמאות מגוונות'],['advanced','מתחילים לקרוא','גם אתגרי צלילים ומילים קצרות'],['expert','מחפשים אתגר','יותר מסיחים ומילים ארוכות במשחקי הבונוס']];return `<button class="back-btn" data-nav="home">${icon('arrow')} הבית של לולי</button><div class="parent-title pearl"><img class="parent-pic" src="./art/pics/1f46a.webp" alt="" aria-hidden="true"><span class="eyebrow">בשביל ההורים</span><h1>האזור של ההורים</h1><p class="muted">כאן אפשר להתאים את המשחק ל${esc(data.name)} ולראות התקדמות במכשיר הזה.</p></div>
<section class="parent-card"><h2>ההתקדמות במשחקים</h2><div class="stat-grid"><div class="stat"><strong>${data.stars}</strong><span>כוכבים</span></div><div class="stat"><strong>${data.sessions}</strong><span>משחקים שהושלמו</span></div><div class="stat"><strong>${practiced.length}</strong><span>אותיות שתרגלנו</span></div></div><p class="practice-note">${data.lastPlayed?'משחק אחרון: '+new Date(data.lastPlayed).toLocaleDateString('he-IL'):'עדיין לא שיחקנו. בקרוב יופיעו כאן ההצלחות.'}</p></section>
<section class="parent-card"><h2>מתאימים את הרמה</h2><p>זה לא מבחן. רמת הבונוס משפיעה על משחקי הבונוס בלבד; כל שלב במסלול מותאם מראש לקושי שלו. מאגר המשחק הנוסף כולל ${wordBank.length} מילים מנוקדות.</p><div class="level-options">${levelOpts.map(x=>`<button class="level-option ${data.level===x[0]?'selected':''}" data-level="${x[0]}"><strong>${x[1]}</strong><small>${x[2]}</small></button>`).join('')}</div></section>
<section class="parent-card"><h2>בחירת מסלול התחלה</h2><p>לא צריך לעבור מבחן. כל 24 השלבים פתוחים ואפשר להחליף מסלול בכל רגע. מומלץ להתחיל בפשוט ולשחק יחד כמה דקות.</p><div class="level-options">${STAGE_GROUPS.map(g=>`<button class="level-option ${(data.startGroup||'4')===g.id?'selected':''}" data-group="${g.id}"><strong>${g.id==='4'?'מתחילים · מתאים גם לגיל 4':g.id==='5'?'מכירים אותיות · מסלול ביניים':'ראשית קריאה · מסלול מתקדם'}</strong><small>${g.subtitle}</small></button>`).join('')}</div><p class="practice-note">ההתקדמות לכל שלב נשמרת בנפרד, גם אם משנים מסלול.</p></section><section class="parent-card"><h2>הבחנה חשובה בין צליל לאות</h2><p><strong>הברה פותחת:</strong> בַּלוֹן ובָּנָנָה נשמעות /ba/ בתחילתן. <strong>אות פותחת:</strong> נָחָשׁ ונֵר מתחילות באות נ, אבל בהברות /na/ ו־/ne/ — שונות. העיצור הראשוני שלהן דווקא זהה.</p><p>הברה, עיצור, אות ושם אות נלמדים במשימות נפרדות כדי למנוע בלבול.</p></section>
<section class="parent-card"><h2>התאמה אישית</h2><label for="child-name" class="parent-label">מה השם הפרטי?</label><input id="child-name" class="parent-input" maxlength="18" value="${esc(data.name)}" inputmode="text"><p style="margin-top:9px">השם יופיע במשחק "השם שלי" ובברכות. שינוי השם אינו מוחק את ההתקדמות.</p><button class="secondary" data-save-name>שומרים את השם</button></section>
<section class="parent-card"><h2>עוד ילדים במשפחה?</h2><p>אפשר ליצור פרופיל נוסף באותו מכשיר. לכל ילד נשמרת התקדמות בנפרד.</p><button class="secondary" data-open-profiles>בוחרים או מוסיפים שחקן</button></section>
<section class="parent-card"><div class="settings-switch"><div><h2>הוראות ופידבק בקול</h2><p style="margin:0;max-width:260px">הוראות נשמעות בכל סבב. תשובה נכונה או ניסיון נוסף מלווים בצליל ובמשפט עידוד. הקריינות בעברית מגיעה מהקלטות מוכנות ונשמעת גם באנדרואיד עם חיבור לאינטרנט.</p></div><button class="toggle ${data.sound?'on':''}" data-audio-toggle aria-label="${data.sound?'לכבות':'להפעיל'} קול" aria-pressed="${data.sound}"></button></div><div class="week-note">הקול של לולי מבוסס על מאגר הקלטות עבריות מוכן. אין צורך להתקין קול עברי באנדרואיד. מומלץ לבדוק באייפון ובאנדרואיד לפני השיתוף.</div><button class="sound-btn" data-test-sound>${icon('sound')} שומעים הצלחה</button> <button class="sound-btn" data-test-retry>${icon('sound')} שומעים ניסיון נוסף</button> <button class="sound-btn" data-test-pronunciation>${icon('sound')} בודקים משפט מנוקד</button><div class="audio-diagnostic" id="audio-diagnostic">${audioDiagnosticText()}</div><p class="practice-note"><a href="./sound-check.html" target="_blank" rel="noopener" style="color:#6748d5;font-weight:900;text-decoration:underline">בודקים את הצלילים באנדרואיד</a></p><button class="secondary" type="button" data-enable-audio style="margin-top:10px">${icon('sound')} הפעלה ובדיקת קול באנדרואיד / אייפון</button></section>
<section class="parent-card"><div class="settings-switch"><div><h2>קריינות בעברית</h2><p>משתמשים בהקלטות עבריות כדי להימנע משיבושי ההגייה של הקריינית המובנית. אפשר לכבות את הדיבור ולהשאיר צלילי משחק.</p></div><button class="toggle ${data.narration!==false?'on':''}" data-narration-toggle aria-label="הפעלה או כיבוי של קריינות" aria-pressed="${data.narration!==false}"></button></div></section>
<section class="parent-card"><h2>פרטיות והזדמנות ללמידה יחד</h2><p>אין חשבון, פרסומות או מעקב. השם הפרטי וההתקדמות נשמרים רק בדפדפן במכשיר הזה. במכשיר אחר לא מופיעה אותה התקדמות, ומחיקת נתוני האתר תמחק אותה. כדאי לשלב גם ספרים ומשחקים מחוץ למסך.</p><button class="danger-text" data-reset>איפוס ההתקדמות של ${esc(data.name)}</button><button class="danger-text" data-remove-profile style="display:block;margin-top:12px">מחיקת הפרופיל מהמכשיר</button></section>`}
function start(id){const stage=STAGE_BY_ID[id]||null;const mode=stage?.mode||id;if(!gameInfo[mode])return;clearTimeout(nextStepTimer);stopSpeech();screen='play';game={mode,stageId:stage?.id||null,stage,round:0,max:stage?.max||(mode==='name'?Array.from(data.name.replace(/\s/g,'')).length:(mode==='words'||mode==='read'?7:5)),correct:0,clean:0,hadWrong:false,locked:false,lastTarget:null,usedWords:[],usedItems:[],usedGroups:[],usedCounts:{},selected:[],pos:0,feedback:'',feedbackVoice:'',feedbackKind:'',question:null};nextQuestion();window.scrollTo({top:0,behavior:'smooth'})}
function stageOptions(defaultCount=3){return game?.stage?.choices||defaultCount}
function easyStage(){return game?.stage?stageOptions()<=2:data.level==='beginner'}
function challengeStage(){return game?.stage?stageOptions()>=4:data.level==='expert'||data.level==='advanced'}
function chooseFresh(items){const unseen=items.filter(x=>!game.usedItems.includes(x.id));const selection=sample(unseen.length?unseen:items,1)[0];game.usedItems.push(selection.id);return selection}
function balancedCountItem(items,allowed){
 const usage=game.usedCounts||{};const least=Math.min(...allowed.map(n=>usage[n]||0));
 const counts=allowed.filter(n=>(usage[n]||0)===least);
 const chosen=sample(counts,1)[0];game.usedCounts[chosen]=(usage[chosen]||0)+1;
 return chooseFresh(items.filter(x=>x.count===chosen));
}
function freshInitial(){
 const items=phonicsItems.filter(x=>!game.usedGroups.includes(x.first));
 const source=chooseFresh(items.length?items:phonicsItems);game.usedGroups.push(source.first);return source;
}
function openingQuestion(kind){
 const letterMode=kind==='firstLetter', key=letterMode?'letter':'opening';
 const groups=[...new Set(openingItems.map(x=>x[key]))].filter(g=>openingItems.filter(x=>x[key]===g).length>=2);
 const fresh=groups.filter(g=>!game.usedGroups.includes(key+g));
 const g=sample(fresh.length?fresh:groups,1)[0];game.usedGroups.push(key+g);
 const pair=sample(openingItems.filter(x=>x[key]===g),2);let source=pair[0];const contrast=letterMode?openingItems.filter(x=>x.letter===g&&x.opening!==source.opening):[];let match=contrast.length?sample(contrast,1)[0]:pair[1];
 if(game.round===0 && ['s04','s12'].includes(game.stageId)){source=openingItems.find(x=>x.label==='בלון');match=openingItems.find(x=>x.label==='בננה');}
 if(game.round===0 && ['s10','s11'].includes(game.stageId)){source=openingItems.find(x=>x.label==='נחש');match=openingItems.find(x=>x.label==='נר');}
 // Opening-syllable distractors can start with the same LETTER yet a different spoken vowel.
 const actualGroup=source[key];const others=openingItems.filter(x=>x[key]!==actualGroup && ![source.label,match.label].includes(x.label));
 const distinct=[];
 for(const x of shuffle(others)){if(distinct.length>=stageOptions(3)-1)break;if(!distinct.some(d=>d.label===x.label))distinct.push(x)}
 const options=shuffle([match,...distinct]);
 return {target:match.id,source,match,options,
  prompt:letterMode?'איזו תמונה מתחילה באותה אות כמו '+source.label+'?':'איזו תמונה מתחילה באותה הברה כמו '+source.label+'?',
  voicePrompt:letterMode?'הַקְשִׁיבוּ: '+source.word+'. אֵיזוֹ תְּמוּנָה מַתְחִילָה בְּאוֹתָהּ אוֹת?': 'הַקְשִׁיבוּ: '+source.word+'. אֵיזוֹ תְּמוּנָה מַתְחִילָה בְּהֲבָרָה דּוֹמָה?',
  revealText:source.word+' — '+match.word+(letterMode?' · '+source.letter:' · הברה דומה'),
  revealVoice:letterMode?'יָפֶה! '+source.word+' וְ'+match.word+' מַתְחִילוֹת בְּאוֹתָהּ אוֹת.':'יָפֶה! '+source.word+' וְ'+match.word+' מַתְחִילוֹת בְּהֲבָרָה דּוֹמָה.'};
}
function listeningQuestion(){
 const w=chooseFresh(listeningItems),options=shuffle([w,...sample(listeningItems.filter(x=>x.id!==w.id&&x.emoji!==w.emoji),stageOptions(2)-1)]);
 return {target:w.id,options,item:w,prompt:'הקשיבו. איזו תמונה שמעתם?',voicePrompt:'הַקְשִׁיבוּ טוֹב. אֵיפֹה '+w.word+'?',revealText:w.word,revealVoice:'נָכוֹן! זוֹ הַמִּלָּה '+w.word+'.'};
}
function initialQuestion(){
 const eligible=phonicsItems.filter(x=>initialPairs.some(p=>p.letter===x.first&&p.words.length>=2));
 const source=freshInitial();
 const match=sample(phonicsItems.filter(x=>x.first===source.first&&x.id!==source.id),1)[0];
 const extra=sample(phonicsItems.filter(x=>x.first!==source.first&&x.emoji!==match.emoji&&x.emoji!==source.emoji),Math.max(1,stageOptions(4)-1));
 return {target:match.id,options:shuffle([match,...extra]),source,match,
 prompt:'איזו תמונה מתחילה באותו צליל כמו '+source.label+'?',
 voicePrompt:'הַקְשִׁיבוּ לַמִּלָּה: '+source.word+'. אֵיזוֹ תְּמוּנָה מַתְחִילָה בְּאוֹתוֹ צְלִיל?',
 revealText:source.word+' — '+match.word,
 revealVoice:'שְׁתֵּי הַמִּלִּים, '+source.word+' וְ'+match.word+', מַתְחִילוֹת בְּאוֹתוֹ צְלִיל.'};
}
function syllableQuestion(){
 const counts=game?.stage?.counts||(challengeStage()?[1,2,3,4]:[1,2,3]);const eligible=syllableItems.filter(x=>counts.includes(x.count));const w=balancedCountItem(eligible,counts);
 return {target:String(w.count),options:counts.map(String),item:w,
 prompt:'כמה הברות יש במילה '+w.label+'?',voicePrompt:'הַקְשִׁיבוּ: '+w.word+'. כַּמָּה הֲבָרוֹת יֵשׁ בַּמִּלָּה? נִמְחָא כַּפַּיִם בְּכָל הֲבָרָה.',
 revealText:w.parts.join(' · '),revealVoice:'יָפֶה! הַמִּלָּה '+w.word+' מִתְחַלֶּקֶת לַהֲבָרוֹת.'};
}
function phonemeQuestion(){
 const counts=game?.stage?.counts||(challengeStage()?[2,3,4]:[2,3]);const eligible=phonemeItems.filter(x=>counts.includes(x.count));const w=balancedCountItem(eligible,counts);
 return {target:String(w.count),options:counts.map(String),item:w,
 prompt:'כמה צלילים בודדים שומעים במילה '+w.label+'?',
 voicePrompt:'הַקְשִׁיבוּ: '+w.word+'. כַּמָּה צְלִילִים קְטַנִּים שׁוֹמְעִים? לֹא סוֹפְרִים אוֹתִיּוֹת.',
 revealText:'● '.repeat(w.count).trim(),revealVoice:'מְצוּיָּן! הַקְשִׁיבוּ שׁוּב לַמִּלָּה: '+w.word+'.'};
}
function mappingQuestion(){
 const w=freshInitial();
 const letters=initialPairs.map(g=>g.letter);
 return {target:w.first,options:shuffle([w.first,...sample(letters.filter(x=>x!==w.first),stageOptions(4)-1)]),item:w,
 prompt:'איזו אות מייצגת את הצליל הראשון במילה '+w.label+'?',
 voicePrompt:'הַקְשִׁיבוּ: '+w.word+'. אֵיזוֹ אוֹת מַתְאִימָה לַצְּלִיל הָרִאשׁוֹן?',
 revealText:w.word+' — '+w.first,revealVoice:'מְצוּיָּן! מָצָאנוּ אֶת הָאוֹת הַמַּתְאִימָה לַמִּלָּה '+w.word+'.'};
}
function rhymeQuestion(){
 const pairId=chooseFresh(rhymePairs.map((x,i)=>({id:'pair-'+i,pair:x}))).id;
 const pair=rhymePairs[Number(pairId.split('-')[1])];const reversed=Math.random()<.5;
 const source=pair[reversed?1:0],match=pair[reversed?0:1];
 const extra=sample(rhymePairs.filter(p=>p[0].rhymeId!==source.rhymeId).map(p=>p[Math.random()<.5?0:1]).filter(x=>x.emoji!==source.emoji&&x.emoji!==match.emoji),Math.max(1,stageOptions(4)-1));
 return {target:match.id,options:shuffle([match,...extra]),source,match,
 prompt:'מה מתחרז עם '+source.label+'?',voicePrompt:'הַקְשִׁיבוּ לַמִּלָּה '+source.word+'. מָה מִתְחָרֵז אִתָּהּ?',
 revealText:source.word+' — '+match.word,revealVoice:'מְצוּיָּן! '+source.word+'. '+match.word+'. הֵן מִתְחָרְזוֹת.'};
}
function finalQuestion(){
 const pool=finalSoundPairs.map((pair,i)=>({id:'finalpair-'+i,pair}));
 const pick=chooseFresh(pool),pair=pick.pair;
 const reverse=Math.random()<.5;
 const source=pair[reverse?1:0],match=pair[reverse?0:1];
 const extras=sample(finalSoundPairs.filter(g=>g[0].group!==source.group).map(g=>g[Math.random()<.5?0:1]).filter(x=>x.emoji!==source.emoji&&x.emoji!==match.emoji),Math.max(1,stageOptions(4)-1));
 return {target:match.id,options:shuffle([match,...extras]),source,match,
  prompt:'איזו מילה נגמרת באותו צליל כמו '+source.label+'?',
  voicePrompt:'הַקְשִׁיבוּ לַמִּלָּה '+source.word+'. אֵיזוֹ מִלָּה נִגְמֶרֶת בְּאוֹתוֹ צְלִיל?',
  revealText:source.word+' — '+match.word,
  revealVoice:'יָפֶה מְאוֹד! '+source.word+'. '+match.word+'. בִּשְׁתֵּי הַמִּלִּים שׁוֹמְעִים אוֹתוֹ צְלִיל בַּסּוֹף.'};
}
function readTwoQuestion(){
 const w=chooseFresh(twoLetterItems);const pool=twoLetterItems.filter(x=>x.id!==w.id&&x.emoji!==w.emoji);
 const choices=[w,...sample(pool,stageOptions(4)-1)];
 return {target:w.label,word:w,options:shuffle(choices),prompt:'קוראים את המילה ובוחרים תמונה מתאימה.',
 voicePrompt:'קוֹרְאִים לְבַד. אֵיזוֹ תְּמוּנָה מַתְאִימָה לַמִּלָּה שֶׁכְּתוּבָה?',
 revealText:w.word,revealVoice:'מְצוּיָּן! קְרָאתֶם אֶת הַמִּלָּה: '+w.word+'.'};
}
function possibleLetters(){return lettersByLevel[data.level]||lettersByLevel.beginner}
function wordPoolForRound(){
 const lvl=data.level||'intermediate';
 const correct=game?.correct||0;
 const tiers=game?.stage?.wordTiers|| (lvl==='beginner'?[1]:lvl==='intermediate'?(correct>=3?[1,2]:[1,2]):lvl==='advanced'?(correct>=2?[2,3]:[1,2,3]):(correct>=2?[3,4]:[2,3,4]));
 const pool=wordBank.filter(w=>tiers.includes(w.tier) && (game.mode==='read'||w.letters.length<=7));
 const recent=new Set(data.history.filter(h=>['words','read'].includes(h.mode)&&h.correct).slice(-Math.min(24,Math.floor(pool.length/2))).map(h=>h.target));
 const fresh=pool.filter(w=>!recent.has(w.spoken)&&!game.usedWords.includes(w.spoken));
 const unseen=pool.filter(w=>!game.usedWords.includes(w.spoken));
 return fresh.length?fresh:unseen.length?unseen:pool;
}
function chooseWord(){
 const pool=wordPoolForRound();
 const picked=sample(pool,1)[0]||wordBank[0];
 game.lastTarget=picked.spoken;
 game.usedWords.push(picked.spoken);
 return picked;
}
function nextQuestion(){
 if(!game||(game.round>=game.max)){endGame();return}
 game.locked=false;game.feedback='';game.feedbackVoice='';game.feedbackKind='';game.hadWrong=false;game.selected=[];game.pos=0;
 const mode=game.mode;
 if(mode==='picture')game.question=listeningQuestion();
 if(mode==='firstSyllable'||mode==='first')game.question=openingQuestion('firstSyllable');
 else if(mode==='firstLetter')game.question=openingQuestion('firstLetter');
 else if(mode==='syllables')game.question=syllableQuestion();
 else if(mode==='phonemes')game.question=phonemeQuestion();
 else if(mode==='mapping')game.question=mappingQuestion();
 else if(mode==='rhymes')game.question=rhymeQuestion();
 else if(mode==='final')game.question=finalQuestion();
 else if(mode==='read2')game.question=readTwoQuestion();
 else if(mode==='letters'){
  const pool=possibleLetters();const opts=pool.filter(x=>x!==game.lastTarget);const target=sample(opts.length?opts:pool,1)[0];game.lastTarget=target;
  const optionCount=game.stage?stageOptions(3):(data.level==='expert'?5:data.level==='advanced'?4:3);
  game.question={target,options:shuffle([target,...sample(pool.filter(x=>x!==target),optionCount-1)]),prompt:'איפה האות '+letterNames[target]+'?',voicePrompt:'אֵיפֹה הָאוֹת '+(voiceLetterNames[target]||letterNames[target])+'?'};
 }else if(mode==='sounds'){
  const bank=soundBank.filter(x=>data.level!=='beginner'||possibleLetters().includes(x.letter));const choices=bank.length>=3?bank:soundBank;
  const target=sample(choices.filter(x=>x.letter!==game.lastTarget),1)[0]||choices[0];game.lastTarget=target.letter;
  game.question={target:target.letter,options:shuffle([target,...sample(soundBank.filter(x=>x.letter!==target.letter),3)]),prompt:'איזו מילה מתחילה בצליל '+target.sound+'?',voicePrompt:'אֵיזוֹ מִלָּה מַתְחִילָה בַּצְּלִיל '+target.sound+'?'};
 }else if(mode==='name'){
  const char=Array.from(data.name.replace(/\s/g,''))[game.round];const pool=[...new Set([...possibleLetters(),...Array.from(data.name)])].filter(x=>x!==char);
  game.question={target:char,options:shuffle([char,...sample(pool,3)]),prompt:'מרכיבים את השם '+data.name+'. איפה האות '+(letterNames[char]||char)+'?',voicePrompt:'מַרְכִּיבִים אֶת הַשֵּׁם. אֵיפֹה הָאוֹת '+(voiceLetterNames[char]||char)+'?'};
 }else if(mode==='words'){
  const target=chooseWord();
  const distractionBank=[...new Set(wordBank.filter(w=>w.tier<=target.tier+1).flatMap(x=>x.letters).filter(x=>!target.letters.includes(x)))];
  const distract=sample(distractionBank,Math.max(2,target.letters.length<=3?3:2));
  game.question={target:target.spoken,word:target,options:shuffle([...target.letters,...distract]),prompt:'מרכיבים את המילה שבתמונה.',voicePrompt:'מַרְכִּיבִים אֶת הַמִּלָּה: '+target.word+'.'};
 }else if(mode==='read'){
  const target=chooseWord();
  const sameTier=wordBank.filter(w=>w.spoken!==target.spoken && w.emoji!==target.emoji && Math.abs(w.tier-target.tier)<=1);
  const picked=sample(shuffle(sameTier),stageOptions(4)-1);
  const seen=new Set(picked.map(w=>w.emoji));
  const opts=[target,...picked.filter(w=>w.emoji!==target.emoji)].filter((w,i,arr)=>arr.findIndex(a=>a.emoji===w.emoji)===i);
  if(opts.length<stageOptions(4))opts.push(...sample(wordBank.filter(w=>w.spoken!==target.spoken && !seen.has(w.emoji) && w.emoji!==target.emoji),stageOptions(4)-opts.length));
  game.question={target:target.spoken,word:target,options:shuffle(opts),prompt:'מה כתוב? קוראים ובוחרים תמונה.',voicePrompt:'מָה כָּתוּב? קוֹרְאִים וּבוֹחֲרִים אֶת הַתְּמוּנָה הַמַּתְאִימָה.'};
 }
 render();speak(game.question.voicePrompt||game.question.prompt);
}
function luliImg(){return game&&game.feedbackKind==='good'?'luli-jump':'luli-wand'}
function playStars(){const lit=Math.min(3,Math.ceil((game.correct||0)*3/Math.max(1,game.max)));return Array.from({length:3},(_,i)=>`<img src="./art/${i<lit?'star':'star-dim'}.svg" alt="">`).join('')}
function questionHeader(){const mode=game.mode,info=game.stage?{...gameInfo[mode],...game.stage}:gameInfo[mode],num=game.round+1,total=game.max;return `<div class="play-top"><button class="round-btn" ${game.stage?`data-open-world="${game.stage.group}"`:'data-nav="games"'} aria-label="יציאה מהמשחק">${icon('close')}</button><div class="play-progress" aria-label="משימה ${num} מתוך ${total}"><span class="play-stars" aria-hidden="true">${playStars()}</span><span class="play-bar"><i style="width:${game.round/total*100}%"></i></span><span class="round-counter">${num}/${total}</span></div><button class="round-btn" data-audio-toggle aria-label="${data.sound?'כיבוי קול':'הפעלת קול'}">${icon(data.sound?'sound':'mute')}</button></div>
<div class="ask"><img class="ask-luli luli-${game.feedbackKind||'idle'}" id="ask-luli" src="./art/${luliImg()}.webp" alt="" aria-hidden="true"><div class="bubble"><span class="ask-kicker">לולי שואלת:</span><h1>${esc(info.title)}</h1><p class="instruction">${esc(game.question.prompt)}</p></div></div>
<button class="hear-again" data-repeat aria-label="להשמיע שוב את השאלה"><span class="hear-ico">${icon('sound')}</span> <span>שומעים שוב</span></button>`}
function picCode(e){return Array.from(String(e||'')).map(c=>c.codePointAt(0).toString(16)).filter(c=>c!=='fe0f').join('-')}
function pic(e,cls='pic'){return `<img class="${cls}" src="./art/pics/${picCode(e)}.webp" data-e="${esc(e)}" alt="" aria-hidden="true" draggable="false">`}
function pictureForWord(word){return `<div class="emoji-picture" role="img" aria-label="${esc(word.spoken)}">${pic(word.emoji)}</div>`}
function soundOptions(q){return `<div class="pick-grid n${q.options.length}">${q.options.map((item,i)=>`<div class="pick-wrap"><button type="button" data-answer="${esc(item.id)}" class="pick-card" aria-label="לבחור ${esc(item.label)}"><span class="pick-pic">${pic(item.emoji)}</span><strong>${esc(item.label)}</strong></button><button type="button" class="hear-choice" data-hear-choice="${i}" aria-label="לשמוע ${esc(item.label)}">${icon('sound')}</button></div>`).join('')}</div>`}
function targetPicture(item,caption=''){return `<div class="target-card">${caption?`<span class="source-caption">${caption}</span>`:''}<span class="target-pic">${pic(item.emoji)}</span><strong>${esc(item.label)}</strong></div>`}
function countingOptions(q,unit){return `${targetPicture(q.item)}<div class="count-help">${icon(unit==='הברות'?'hand':'ear')} ${unit==='הברות'?'מוחאים כפיים בכל הברה':'מקשיבים לכל צליל קטן במילה'}</div><div class="count-options">${q.options.map(n=>`<button type="button" class="count-btn" data-answer="${n}"><b>${n}</b><small>${esc(unit)}</small></button>`).join('')}</div>`}
function letterOptions(q){return `${targetPicture(q.item)}<div class="answer-grid n${q.options.length}">${q.options.map(x=>`<button type="button" class="letter-tile" data-answer="${esc(x)}" aria-label="האות ${esc(letterNames[x]||x)}">${esc(x)}</button>`).join('')}</div>`}
function newModeAnswer(q){
 const m=game.mode;
 if(m==='picture')return soundOptions(q);
 if(m==='first'||m==='firstSyllable'||m==='firstLetter'||m==='rhymes'||m==='final')return targetPicture(q.source,'הקשיבו למילה')+soundOptions(q);
 if(m==='syllables'||m==='phonemes')return countingOptions(q,m==='syllables'?'הברות':'צלילים');
 if(m==='mapping')return letterOptions(q);
 if(m==='read2')return `<div class="read-word"><span>${esc(q.word.word)}</span></div><div class="read-hint">קוראים לבד ובוחרים תמונה</div><div class="pick-grid n${q.options.length}">${q.options.map(x=>`<button class="pick-card read-choice" type="button" data-read-choice="${esc(x.label)}" aria-label="${esc(x.label)}"><span class="pick-pic">${pic(x.emoji)}</span></button>`).join('')}</div>`;
 return '';
}
function showPedagogicReveal(){if(!game||!game.stage)return;const el=document.getElementById('pedagogic-reveal');if(el){el.hidden=false;const q=game.question;if(game.mode==='syllables'){el.innerHTML=`<span class="reveal-label">ככה מחלקים להברות</span><div class="syllable-bubbles">${q.item.parts.map(part=>`<span>${esc(part)}</span>`).join('')}</div>`}
 else if(game.mode==='phonemes'){el.innerHTML=`<span class="reveal-label">${q.item.count} צלילים קטנים שמענו</span><div class="sound-dots">${Array.from({length:q.item.count},()=>'<i></i>').join('')}</div>`}
 else {el.innerHTML=`<span class="reveal-label">כל הכבוד, זה מתאים!</span><div class="reveal-word">${esc(q.revealText||'')}</div>`}}
}
function renderPlay(){
 if(!game)return home();const q=game.question;let answer='';
 if(game.stage && !['letters','words','read','sounds','name'].includes(game.mode))answer=newModeAnswer(q);
 else if(game.mode==='letters')answer=`<div class="answer-grid n${q.options.length}">${q.options.map(x=>`<button type="button" data-answer="${esc(x)}" class="letter-tile" aria-label="האות ${esc(letterNames[x])}">${esc(x)}</button>`).join('')}</div>`;
 else if(game.mode==='sounds')answer=`<div class="pick-grid n${q.options.length}">${q.options.map(x=>`<button type="button" data-answer="${esc(x.letter)}" class="pick-card" aria-label="${esc(x.spoken)}"><span class="pick-pic">${pic(SOUND_PICS[x.picture]||'⭐')}</span><strong>${esc(x.word)}</strong></button>`).join('')}</div>`;
 else if(game.mode==='name'){
  const chars=Array.from(data.name.replace(/\s/g,''));
  answer=`<div class="name-preview" aria-label="השם ${esc(data.name)}">${chars.map((x,i)=>`<div class="letter-slot ${i<game.round?'filled':''}">${i<game.round?esc(x):''}</div>`).join('')}</div><div class="answer-grid n${q.options.length}">${q.options.map(x=>`<button class="letter-tile" data-answer="${esc(x)}" aria-label="האות ${esc(letterNames[x]||x)}">${esc(x)}</button>`).join('')}</div>`;
 }else if(game.mode==='words'){
  const word=q.word,finished=game.pos===word.letters.length;
  answer=`<div class="word-picture">${pictureForWord(word)}</div><div class="word-preview ${finished?'word-finished':''}" style="--slots:${word.letters.length}" aria-label="${finished?'המילה המלאה '+esc(word.spoken):'מרכיבים מילה'}">${word.letters.map((ch,i)=>`<div class="letter-slot ${i<game.pos?'filled':''} ${i===game.pos-1?'newly-filled':''}">${i<game.pos?esc(ch):''}</div>`).join('')}</div>${finished?`<div class="word-readout">המילה היא <strong>${esc(word.word)}</strong></div>`:''}<div class="word-tiles">${q.options.map((ch,i)=>`<button class="word-tile ${game.selected.includes(i)?'used':''}" data-word-choice="${i}" ${game.selected.includes(i)?'disabled':''}>${esc(ch)}</button>`).join('')}</div>`;
 }else if(game.mode==='read')answer=`<div class="read-word"><span>${esc(q.word.word)}</span></div><div class="read-hint">קוראים לבד. איזו תמונה מתאימה למילה?</div><div class="pick-grid n${q.options.length}">${q.options.map(x=>`<button class="pick-card read-choice" type="button" data-read-choice="${esc(x.spoken)}" aria-label="${esc(x.spoken)}"><span class="pick-pic">${pic(x.emoji)}</span></button>`).join('')}</div>`;
 return `<div class="play play-${game.mode}">`+questionHeader()+`<div class="answers">${answer}</div><div id="pedagogic-reveal" class="pedagogic-reveal" hidden></div><div class="feedback ${game.feedbackKind}" id="feedback" role="status" aria-live="polite">${feedbackInner(game.feedback||'מה בוחרים?',game.feedbackKind)}</div></div>${meadow()}`;
}
const SOUND_PICS={water:'💧',house:'🏠',sun:'☀️',fish:'🐟',heart:'❤️',book:'📖',flower:'🌸',ball:'⚽',train:'🚂',candle:'🕯️'};
function feedbackInner(text,kind){if(kind==='good')return `<span class="fb-stars" aria-hidden="true"><img src="./art/star.svg" alt=""><img src="./art/star.svg" alt=""><img src="./art/star.svg" alt=""></span><span class="fb-ribbon"><span>${esc(text)}</span></span>`;if(kind==='try')return `<span class="fb-try"><img src="./art/pics/1f49d.webp" alt="" aria-hidden="true">${esc(text)}</span>`;return `<span class="fb-idle">${esc(text)}</span>`}
function setLuliMood(kind){const img=document.getElementById('ask-luli');if(!img)return;img.className='ask-luli luli-'+(kind||'idle');void img.offsetWidth;img.src='./art/'+(kind==='good'?'luli-jump':'luli-wand')+'.webp';img.classList.add('react')}
function showFeedback(textMsg,kind,voiceMsg=''){game.feedback=textMsg;game.feedbackVoice=voiceMsg;game.feedbackKind=kind;const e=document.getElementById('feedback');if(e){e.innerHTML=feedbackInner(textMsg,kind);e.className='feedback '+kind}setLuliMood(kind);const stars=document.querySelector('.play-stars');if(stars)stars.innerHTML=playStars();if(kind==='good'&&e&&e.getBoundingClientRect().bottom>window.innerHeight){try{e.scrollIntoView({block:'end',behavior:'smooth'})}catch(_){}}}
function record(target,correct){data.history.push({date:new Date().toISOString(),mode:game.mode,target,correct});data.history=data.history.slice(-200);data.lastPlayed=new Date().toISOString();save()}
function successOne(target){
 playCue('correct');data.stars+=1;game.correct+=1;record(target,true);
 const line=sample(praiseLines,1)[0];
 showFeedback(line.display,'good',line.spoken);return line.spoken;
}
function markWrong(btn){
 if(btn){btn.classList.add('wrong');setTimeout(()=>{if(btn.isConnected)btn.classList.remove('wrong')},550)}
 game.hadWrong=true;record(game.question.target,false);
 const line=sample(retryLines,1)[0];
 showFeedback(line.display,'try',line.spoken);playCue('retry');speak(line.spoken);
}
function answer(value,btn){
 if(!game||game.locked)return;
 if(value!==game.question.target){markWrong(btn);return}
 const oldGame=game;game.locked=true;btn.classList.add('correct');
 const wasFirst=!game.hadWrong;if(wasFirst)game.clean++;const praise=successOne(value);
 if(game.stage){showPedagogicReveal();const follow=game.question.revealVoice||'';game.round++;advanceAfterPraise(praise+(follow?' '+follow:''),oldGame,3000)}
 else {game.round++;advanceAfterPraise(praise,oldGame)}
}
function wordChoice(index,btn){
 if(!game||game.locked)return;
 const q=game.question,expected=q.word.letters[game.pos],got=q.options[index];
 if(game.selected.includes(index))return;
 if(got!==expected){markWrong(btn);return}
 game.selected.push(index);game.pos++;btn.classList.add('correct');
 if(game.pos===q.word.letters.length){
   const oldGame=game;game.locked=true;
   // RENDER FIRST: the final letter must fill its slot immediately. Previously,
   // the next question arrived without ever showing the completed word.
   render();
   if(!game.hadWrong)game.clean++;
   const praise=successOne(q.word.spoken);
   showFeedback('יש! בנית את המילה '+q.word.spoken+'!','good',praise+' הַמִּלָּה הִיא: '+q.word.word+'.');
   game.round++;
   // Speak the finished word aloud and hold it visibly for at least 2.7 seconds.
   advanceAfterPraise(praise+' הַמִּלָּה הִיא: '+q.word.word+'.',oldGame,Math.max(2800,1900+q.word.letters.length*240));
 }else{
   playCue('step');render();
   const message=voiceLines.step;
   showFeedback('יפה מאוד! עכשיו האות הבאה.','good',message);speak(message);
 }
}
function readChoice(value,btn){
 if(!game||game.locked)return;
 if(value!==game.question.target){markWrong(btn);return}
 const oldGame=game;game.locked=true;btn.classList.add('correct');
 const wasFirst=!game.hadWrong;if(wasFirst)game.clean++;const message=successOne(value);showPedagogicReveal();game.round++;
 showFeedback('מצוין! קראת את המילה '+game.question.word.word+'!','good',message+' '+(game.question.revealVoice||'הַמִּלָּה הִיא: '+game.question.word.word+'.'));
 advanceAfterPraise(message+' '+(game.question.revealVoice||'הַמִּלָּה הִיא '+game.question.word.word+'.'),oldGame,3100);
}
function endGame(){
 if(!game)return;
 const mode=game.mode,count=game.correct,clean=game.clean||0;data.sessions++;
 const entry={mode,date:new Date().toISOString(),count,clean};data.completed.push(entry);data.completed=data.completed.slice(-200);
 if(game.stage){const key=game.stageId,old=data.mastery?.[key]||{};data.mastery={...(data.mastery||{}),[key]:{best:Math.max(old.best||0,clean),passed:!!old.passed||clean>=Math.max(3,Math.ceil(game.max*.8)),plays:(old.plays||0)+1,last:entry.date}};data.lastMode=game.stageId}
 save();game={...game,earned:count,firstTry:clean,passed:game.stage?masteryStatus(game.stageId):false};screen='complete';render();playCue('correct');speak(voiceLines.completed);
}
function completed(){const n=game?.earned||0;const stage=game?.stage,next=stage?nextStageAfter(game.stageId):null;const max=game?.max||1,clean=game?.firstTry||0;const lit=stage?(game.passed&&clean>=Math.ceil(max*.8)?3:clean>=Math.ceil(max*.5)?2:1):(n>=max?3:n>=Math.ceil(max/2)?2:1);return `<div class="celebration"><span class="cel-rays" aria-hidden="true"></span>${Array.from({length:10},(_,i)=>`<span class="confetti c${i}" aria-hidden="true"></span>`).join('')}<img class="cel-luli" src="./art/luli-jump.webp" alt="" aria-hidden="true"><div class="cel-stars" role="img" aria-label="${lit} מתוך 3 כוכבים">${[0,1,2].map(i=>`<img class="cel-star s${i} ${i<lit?'lit':''}" src="./art/${i<lit?'star':'star-dim'}.svg" alt="">`).join('')}</div><div class="cel-ribbon"><h1>כל הכבוד!</h1></div><p>${stage?game.passed?'השלמת את התחנה!':'עשית עבודה נהדרת. אפשר להתאמן עוד!':'סיימת את המשחק!'} לולי ממש גאה בך.</p><div class="celebration-score"><img src="./art/star.svg" alt="" aria-hidden="true"> ${n} כוכבים במשחק הזה</div><button class="btn-magic" data-start-stage="${stage?next:''}" data-start="${stage?'':game?.mode||'letters'}">${icon('sparkles')} ${stage&&next!==game.stageId?'יאללה, לשלב הבא!':'עוד משחק!'}</button>${stage?`<button class="btn-soft" data-open-world="${stage.group}">${icon('map')} בחזרה לעולם</button>`:`<button class="btn-soft" data-nav="games">בוחרים הרפתקה אחרת</button>`}<button class="quiet-home" data-nav="home">חוזרים לבית של לולי</button></div>${meadow()}`}
function render(){topAndNav();document.getElementById('screen').innerHTML=screen==='welcome'?welcome():screen==='profiles'?profilePicker():screen==='home'?home():screen==='games'?games():screen==='world'?world():screen==='parent'?parent():screen==='play'?renderPlay():screen==='complete'?completed():welcome()}
document.addEventListener('click',e=>{
const b=e.target.closest('button');if(!b)return;
if(b.hasAttribute('data-welcome-level')){selectedLevel=b.dataset.welcomeLevel;document.querySelectorAll('[data-welcome-level]').forEach(x=>{x.classList.toggle('selected',x.dataset.welcomeLevel===selectedLevel);x.setAttribute('aria-pressed',String(x.dataset.welcomeLevel===selectedLevel))});const cur=document.querySelector('.start-level summary b');if(cur)cur.textContent=b.querySelector('strong')?.textContent||'';return}
if(b.hasAttribute('data-create-profile')){activateAudio();createProfile();return}
if(b.hasAttribute('data-open-profiles')){screen='profiles';game=null;render();return}
if(b.hasAttribute('data-select-profile')){useProfile(b.dataset.selectProfile);return}
if(b.hasAttribute('data-add-profile')){addProfile();return}
if(b.hasAttribute('data-remove-profile')){removeProfile();return}
if(!data)return;
if(b.hasAttribute('data-narration-toggle')){data.narration=data.narration===false;save();stopSpeech();render();toast(data.narration?'הקריינות פועלת':'הקריינות כבויה, צלילי המשחק נשארו פועלים');return}
if(b.hasAttribute('data-enable-audio')){activateAudio();data.sound=true;data.narration=true;save();playCue('correct');speak('שָׁלוֹם! אֲנִי לוּלִי! בּוֹאוּ נְשַׂחֵק בְּיַחַד!');toast('לולי משתמשת בהקלטות קול: ודאו שהטלפון מחובר לאינטרנט ושהצלילים פועלים.');return}
if(b.id==='sound-toggle'||b.hasAttribute('data-audio-toggle')){activateAudio();data.sound=!data.sound;save();if(!data.sound){clearTimeout(nextStepTimer);stopSpeech()}render();if(data.sound)speak(voiceLines.hello);return}
if(b.hasAttribute('data-open-world')){clearTimeout(nextStepTimer);stopSpeech();selectedWorld=b.dataset.openWorld;screen='world';game=null;render();window.scrollTo({top:0,behavior:'smooth'});return}
if(b.dataset.nav){nav(b.dataset.nav);return}
if(b.hasAttribute('data-start-stage')&&b.dataset.startStage){activateAudio();start(b.dataset.startStage);return}
if(b.dataset.start){activateAudio();start(b.dataset.start);return}
if(b.hasAttribute('data-repeat')){activateAudio();if(game)speak(game.locked&&game.feedbackVoice?game.feedbackVoice:game.question.voicePrompt);return}
if(b.hasAttribute('data-hear-choice')){activateAudio();if(game?.question?.options){const w=game.question.options[Number(b.dataset.hearChoice)];if(w)speak(w.word)}return}
if(b.hasAttribute('data-answer')){activateAudio();answer(b.dataset.answer,b);return}
if(b.hasAttribute('data-word-choice')){activateAudio();wordChoice(Number(b.dataset.wordChoice),b);return}
if(b.hasAttribute('data-read-choice')){activateAudio();readChoice(b.dataset.readChoice,b);return}
if(b.hasAttribute('data-replay')){start(game?.mode||'letters');return}
if(b.hasAttribute('data-group')){data.startGroup=b.dataset.group;save();render();toast('מסלול ההתחלה עודכן');return}
if(b.hasAttribute('data-level')){data.level=b.dataset.level;save();render();toast('הרמה עודכנה');return}
if(b.hasAttribute('data-save-name')){const input=document.getElementById('child-name');const next=cleanName(input?.value);if(next.replace(/[ \-']/g,'').length<2){toast('כדאי לבחור שם עברי בן שתי אותיות לפחות');return}data.name=next;save();render();toast('השם נשמר');return}
if(b.hasAttribute('data-test-sound')){activateAudio();
 if(!data.sound){toast('הקול כבוי. אפשר להפעיל אותו למעלה.');return}
 playCue('correct');speak(voiceLines.testSuccess);
 if(!recordedManifest)toast('לא נטען מאגר ההקלטות. רעננו את הדף.');
 return
}
if(b.hasAttribute('data-test-pronunciation')){activateAudio();if(!data.sound){toast('הקול כבוי');return} speak(voiceLines.pronunciationTest);return}
if(b.hasAttribute('data-test-retry')){activateAudio();if(!data.sound){toast('הקול כבוי. אפשר להפעיל אותו למעלה.');return}playCue('retry');speak(retryLines[0].spoken);return}

if(b.hasAttribute('data-reset')){if(window.confirm('לאפס את הכוכבים ואת ההתקדמות? אי אפשר לבטל את הפעולה.')){const old={id:data.id,name:data.name,level:data.level,sound:data.sound,narration:data.narration};data={...baseProgress,...old,history:[],completed:[],mastery:{}};save();render();toast('ההתקדמות אופסה')}return}
});
document.addEventListener('error',e=>{const t=e.target;if(t&&t.tagName==='IMG'&&t.dataset&&t.dataset.e){const s=document.createElement('span');s.className=t.className+' pic-fallback';s.textContent=t.dataset.e;t.replaceWith(s)}},true);
render();
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('./sw.js').catch(()=>{});
