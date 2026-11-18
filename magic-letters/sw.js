// Network-first for pages and scripts (a new deploy is picked up on the next visit),
// cache-first for art, fonts and audio. Bump CACHE on every release.
const CACHE='otiyot-kesem-lagan-v13-luli-voice-clips';
const ASSETS=["./", "./index.html", "./luli.css?v=14", "./app.js?v=14", "./recorded-manifest.js?v=3", "./audio/luli/silence.mp3", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./audio/correct.wav", "./audio/retry.wav", "./sound-check.html", "./art/book.webp", "./art/castle.webp", "./art/hero-home.webp", "./art/logo-cloud.webp", "./art/luli-jump.webp", "./art/luli-wand.webp", "./art/meadow.webp", "./art/ribbon.webp", "./art/sky.webp", "./art/sounds.webp", "./art/star-dim.svg", "./art/star.svg", "./art/trail-letters.webp", "./art/trail-sounds.webp", "./art/trail-words.webp", "./art/welcome-hero.webp", "./art/words.webp", "./art/world-letters.webp", "./art/world-sounds.webp", "./art/world-words.webp", "./fonts/fredoka-hebrew-700-normal.woff2", "./fonts/fredoka-hebrew-600-normal.woff2", "./fonts/fredoka-hebrew-500-normal.woff2", "./fonts/rubik-hebrew-500-normal.woff2", "./fonts/rubik-hebrew-700-normal.woff2"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('otiyot-kesem-lagan-')&&k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
// Media elements (Safari especially) ask for byte ranges and need a 206 answer.
async function rangeResponse(request,cached){
 const m=/bytes=(\d*)-(\d*)/.exec(request.headers.get('range')||'');
 const buf=await cached.arrayBuffer(),size=buf.byteLength;
 let start=m&&m[1]?+m[1]:0,end=m&&m[2]?+m[2]:size-1;
 if(m&&!m[1]&&m[2]){start=Math.max(0,size-+m[2]);end=size-1}
 end=Math.min(end,size-1);
 return new Response(buf.slice(start,end+1),{status:206,statusText:'Partial Content',headers:{'Content-Type':cached.headers.get('Content-Type')||'audio/mpeg','Content-Range':`bytes ${start}-${end}/${size}`,'Content-Length':String(end-start+1),'Accept-Ranges':'bytes'}});
}
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const url=new URL(e.request.url);
 if(url.origin!==location.origin)return;
 const isPage=e.request.mode==='navigate'||/\.(?:html|js)(?:\?|$)/.test(url.pathname+url.search);
 if(isPage){e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return r}).catch(()=>caches.match(e.request)));return}
 if(e.request.headers.has('range')){
  e.respondWith(caches.match(url.href,{ignoreVary:true}).then(c=>c?rangeResponse(e.request,c):fetch(e.request)));return
 }
 e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r.ok&&r.status===200&&/\/(?:art|fonts|audio)\//.test(url.pathname)){const copy=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,copy))}return r})));
});
