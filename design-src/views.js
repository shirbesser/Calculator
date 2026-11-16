//@@ topAndNav
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
//@@ welcome
function logoMarkup(small=false){return `<h1 class="logo ${small?'logo-small':''}" aria-label="אותיות של קסם"><img class="logo-cloud" src="./art/logo-cloud.webp" alt="" aria-hidden="true"><span class="logo-top" aria-hidden="true">אותיות</span><span class="logo-ribbon" aria-hidden="true"><img class="logo-wand-star" src="./art/star.svg" alt=""><span>של קסם</span></span></h1>`}
function welcome(){const levels=[['beginner','קטנטנים','מתחילים במשחקי הקשבה'],['intermediate','מכירים אותיות','מתקדמים ביחד'],['advanced','בדרך לקריאה','אתגרים נוספים'],['expert','קוראים סקרנים','הכי מאתגר']];const cur=levels.find(l=>l[0]===selectedLevel)||levels[0];return `<section class="welcome">
${logoMarkup()}
<div class="welcome-stage" aria-hidden="true"><img class="welcome-book" src="./art/welcome-hero.webp" alt="" width="380" height="370"><img class="welcome-luli float-luli" src="./art/luli-wand.webp" alt="" width="236" height="236"></div>
<p class="welcome-lead">ברוכים הבאים להרפתקה<br>קסומה בעולם האותיות!</p>
<label class="name-label" for="welcome-name">איך קוראים לך? <img src="./art/star.svg" alt="" aria-hidden="true"></label>
<div class="name-field">${icon('user')}<input id="welcome-name" type="text" autocomplete="off" maxlength="18" placeholder="למשל: יעל" dir="rtl" aria-required="true"></div>
<details class="start-level"><summary><span class="start-level-tag">להורים</span> מאיפה מתחילים? <b>${cur[1]}</b><span class="start-level-arrow" aria-hidden="true">${icon('chev')}</span></summary><div class="pick-levels">${levels.map(([v,t,d])=>`<button class="pick-level ${selectedLevel===v?'selected':''}" type="button" data-welcome-level="${v}" aria-pressed="${selectedLevel===v}"><span class="level-dot"></span><strong>${t}</strong><small>${d}</small></button>`).join('')}</div></details>
<button class="btn-magic" data-create-profile>${icon('sparkles')} בואו נתחיל!</button>
${profiles.length?`<button class="link-btn" data-open-profiles>כבר שיחקנו פה? בוחרים שחקן ${icon('chev')}</button>`:''}
<p class="setup-footnote">בלי חשבון ובלי פרסומות. השם וההתקדמות נשמרים במכשיר בלבד.</p>
</section>${meadow()}`}
function meadow(){return `<div class="meadow" aria-hidden="true"></div>`}
//@@ profilePicker
const AVATARS=['1f430','1f98a','1f43b','1f984','1f43c','1f438','1f431','1f436','1f427','1f981','1f428','1f42f','1f989','1f992'];
const KID_TONES=[['#ffe1ef','#f8c4e0','#e05b9a'],['#e2ecff','#c3d7fb','#4f78d8'],['#dff7ea','#bfe9d4','#2f9a6c'],['#fff1cf','#ffe09a','#c98a12'],['#efe4ff','#d8c3fb','#7d47d6'],['#ffe6da','#ffc9b2','#d86a3d']];
function kidHash(id){let h=0;for(const c of String(id))h=(h*31+c.charCodeAt(0))>>>0;return h}
function kidLook(p){const h=kidHash(p.id);return {animal:AVATARS[h%AVATARS.length],tone:KID_TONES[(h>>3)%KID_TONES.length]}}
function avatar(p,cls='kid-avatar'){const k=kidLook(p);return `<span class="${cls}" style="--k1:${k.tone[0]};--k2:${k.tone[1]};--k3:${k.tone[2]}"><img src="./art/pics/${k.animal}.webp" alt="" aria-hidden="true"></span>`}
function profilePicker(){return `<section class="profiles-hero"><img class="profiles-luli float-luli" src="./art/luli-wand.webp" alt="" aria-hidden="true"><div><span class="kicker">לכל ילד הרפתקה משלו</span><h1>מי בא לשחק?</h1><p>בוחרים שחקן וממשיכים בדיוק מאיפה שעצרנו.</p></div></section>
<div class="profiles-list">${profiles.map(p=>{const k=kidLook(p),done=Object.values(p.mastery||{}).filter(m=>m&&m.passed).length;return `<button type="button" class="kid-card ${data?.id===p.id?'active':''}" style="--k1:${k.tone[0]};--k2:${k.tone[1]};--k3:${k.tone[2]}" data-select-profile="${esc(p.id)}" aria-label="${esc(p.name)}, ${p.stars||0} כוכבים">${data?.id===p.id?'<span class="kid-now">משחקים עכשיו</span>':''}${avatar(p)}<strong>${esc(p.name)}</strong><span class="kid-stars"><img src="./art/star.svg" alt="" aria-hidden="true">${p.stars||0}</span><span class="kid-meter"><i style="width:${done/24*100}%"></i></span><small>${done} מתוך 24 תחנות</small></button>`}).join('')}<button type="button" class="kid-card kid-add" data-add-profile><span class="kid-plus" aria-hidden="true">+</span><strong>עוד ילד או ילדה</strong><small>פרופיל חדש</small></button></div>
<p class="setup-footnote">הפרופילים נשמרים בנפרד במכשיר הזה בלבד.</p>`}
//@@ worldCards
const WORLD_ART={'4':'sounds','5':'letters','6':'words'};
function worldObject(gid){const k=WORLD_ART[gid];
 if(k==='letters')return `<span class="wo wo-letters"><img src="./art/book.webp" alt=""><span class="wo-glyph">א</span><span class="tile t1">ב</span><span class="tile t2">ג</span><img class="wo-star" src="./art/star.svg" alt=""></span>`;
 if(k==='words')return `<span class="wo wo-words"><img src="./art/words.webp" alt=""><span class="cube c1">א</span><span class="cube c2">ב</span><span class="cube c3">ג</span></span>`;
 return `<span class="wo wo-sounds"><img src="./art/sounds.webp" alt=""></span>`}
function worldCards(compact=false){return `<div class="worlds-grid ${compact?'compact':''}">${STAGE_GROUPS.map(g=>{const w=WORLD_THEMES[g.id],stages=stagesForGroup(g.id),done=stages.filter(s=>masteryStatus(s.id)).length,[first,...rest]=w.title.split(' ');return `<button class="world-card wc-${WORLD_ART[g.id]}" type="button" data-open-world="${g.id}" aria-label="${w.title}. ${done} מתוך שמונה שלבים הושלמו"><span class="wc-scene" aria-hidden="true"></span><span class="wc-art" aria-hidden="true">${worldObject(g.id)}</span><span class="wc-text"><small>${first}</small><strong>${rest.join(' ')}</strong>${compact?'':`<span class="wc-sub">${w.summary}</span>`}<span class="wc-progress"><img src="./art/star.svg" alt="" aria-hidden="true">${done}/8</span></span>${compact?'':`<span class="wc-go" aria-hidden="true">${icon('chev')}</span>`}</button>`}).join('')}</div>`}
//@@ world
function world(){const group=STAGE_GROUPS.find(g=>g.id===selectedWorld)||STAGE_GROUPS[0],w=WORLD_THEMES[group.id],key=WORLD_ART[group.id],stages=stagesForGroup(group.id),done=stages.filter(s=>masteryStatus(s.id)).length,next=stages.find(s=>!masteryStatus(s.id))||stages[stages.length-1];
 const pos=[[50,6.6],[75,16.79],[49,26.98],[24,37.17],[50,47.36],[76,57.55],[50,67.74],[24.5,77.92]];
 return `<div class="world-screen ws-${key}"><button class="back-btn" data-nav="games">${icon('arrow')} כל העולמות</button>
<section class="world-banner wc-${key}"><span class="wc-scene" aria-hidden="true"></span><span class="wc-art" aria-hidden="true">${worldObject(group.id)}</span><div class="wb-text"><span class="kicker">${w.tag}</span><h1>${w.title}</h1><p>${w.summary}</p><span class="wc-progress"><img src="./art/star.svg" alt="" aria-hidden="true">${done} מתוך 8 תחנות</span></div></section>
<button class="btn-magic world-primary" data-start-stage="${next.id}">${icon('play')} ${done===8?'משחקים שוב':'ממשיכים להרפתקה'}</button>
<div class="trail-head"><h2>מסלול הקסם</h2><span>כל התחנות פתוחות</span></div>
<div class="trail" style="background-image:url(./art/trail-${key}.webp)">${stages.map((st,i)=>{const isDone=masteryStatus(st.id),isNext=st.id===next.id&&done<8,[x,y]=pos[i];return `<button class="station ${isDone?'done':''} ${isNext?'next':''}" style="--x:${x}%;--y:${y}%" type="button" data-start-stage="${st.id}" aria-label="תחנה ${i+1}: ${esc(st.title)}${isDone?' (הושלמה)':''}"><span class="station-stone">${isDone?`<img src="./art/star.svg" alt="">`:''}<b>${i+1}</b></span><span class="station-label">${esc(st.title)}</span>${isNext?`<img class="station-luli" src="./art/luli-wand.webp" alt="" aria-hidden="true">`:''}</button>`}).join('')}<span class="trail-goal" style="--x:53.5%;--y:96%">${done===8?'הגעת לטירה!':'הטירה של לולי'}</span></div></div>`}
//@@ extrasCards
const EXTRA_PICS={letters:'1f3af',sounds:'1f50a',name:'1f49d',words:'1f9e9',read:'1f4da'};
function extrasCards(){const extras=['letters','sounds','name','words','read'];return `<div class="games">${extras.map(key=>{const g=gameInfo[key];return `<button type="button" class="game-card gc-${g.bg}" data-start="${key}"><span class="gc-pic"><img src="./art/pics/${EXTRA_PICS[key]}.webp" alt="" aria-hidden="true"></span><strong>${esc(g.title)}</strong><span>${esc(g.desc)}</span></button>`}).join('')}</div>`}
//@@ soundBanner
function soundBanner(){return `<div class="sound-setup pearl"><span class="sound-setup-pic"><img src="./art/pics/1f50a.webp" alt="" aria-hidden="true"></span><div class="sound-setup-text"><strong>רוצים לשמוע את לולי?</strong><small>לולי מדברת בהקלטות עבריות מוכנות, גם באנדרואיד. צריך חיבור לאינטרנט.</small></div><button type="button" class="sound-enable" data-enable-audio>מפעילים קול</button></div>`}
//@@ home
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
//@@ games
function games(){return `<button class="back-btn" data-nav="home">${icon('arrow')} הבית של לולי</button><div class="games-heading"><span class="kicker">העולמות של לולי</span><h1>לאן נטוס היום?</h1><p>בוחרים עולם ונכנסים להרפתקה. אפשר להתחיל מכל מקום.</p></div>${worldCards()}<details class="bonus-details pearl"><summary><img src="./art/pics/2728.webp" alt="" aria-hidden="true"> <span>עוד משחקים שאפשר לנסות</span><span class="bonus-arrow" aria-hidden="true">${icon('chev')}</span></summary><div class="bonus-content">${extrasCards()}</div></details>`}
//@@ questionHeader
function luliImg(){return game&&game.feedbackKind==='good'?'luli-jump':'luli-wand'}
function playStars(){const lit=Math.min(3,Math.ceil((game.correct||0)*3/Math.max(1,game.max)));return Array.from({length:3},(_,i)=>`<img src="./art/${i<lit?'star':'star-dim'}.svg" alt="">`).join('')}
function questionHeader(){const mode=game.mode,info=game.stage?{...gameInfo[mode],...game.stage}:gameInfo[mode],num=game.round+1,total=game.max;return `<div class="play-top"><button class="round-btn" data-nav="${game.stage?'world':'games'}" ${game.stage?`data-world="${game.stage.group}"`:''} aria-label="יציאה מהמשחק">${icon('close')}</button><div class="play-progress" aria-label="משימה ${num} מתוך ${total}"><span class="play-stars" aria-hidden="true">${playStars()}</span><span class="play-bar"><i style="width:${game.round/total*100}%"></i></span><span class="round-counter">${num}/${total}</span></div><button class="round-btn" data-audio-toggle aria-label="${data.sound?'כיבוי קול':'הפעלת קול'}">${icon(data.sound?'sound':'mute')}</button></div>
<div class="ask"><img class="ask-luli luli-${game.feedbackKind||'idle'}" id="ask-luli" src="./art/${luliImg()}.webp" alt="" aria-hidden="true"><div class="bubble"><span class="ask-kicker">לולי שואלת:</span><h1>${esc(info.title)}</h1><p class="instruction">${esc(game.question.prompt)}</p></div></div>
<button class="hear-again" data-repeat aria-label="להשמיע שוב את השאלה"><span class="hear-ico">${icon('sound')}</span> <span>שומעים שוב</span></button>`}
//@@ pictureForWord
function picCode(e){return Array.from(String(e||'')).map(c=>c.codePointAt(0).toString(16)).filter(c=>c!=='fe0f').join('-')}
function pic(e,cls='pic'){return `<img class="${cls}" src="./art/pics/${picCode(e)}.webp" data-e="${esc(e)}" alt="" aria-hidden="true" draggable="false">`}
function pictureForWord(word){return `<div class="emoji-picture" role="img" aria-label="${esc(word.spoken)}">${pic(word.emoji)}</div>`}
//@@ soundOptions
function soundOptions(q){return `<div class="pick-grid n${q.options.length}">${q.options.map((item,i)=>`<div class="pick-wrap"><button type="button" data-answer="${esc(item.id)}" class="pick-card" aria-label="לבחור ${esc(item.label)}"><span class="pick-pic">${pic(item.emoji)}</span><strong>${esc(item.label)}</strong></button><button type="button" class="hear-choice" data-hear-choice="${i}" aria-label="לשמוע ${esc(item.label)}">${icon('sound')}</button></div>`).join('')}</div>`}
//@@ countingOptions
function targetPicture(item,caption=''){return `<div class="target-card">${caption?`<span class="source-caption">${caption}</span>`:''}<span class="target-pic">${pic(item.emoji)}</span><strong>${esc(item.label)}</strong></div>`}
function countingOptions(q,unit){return `${targetPicture(q.item)}<div class="count-help">${icon(unit==='הברות'?'hand':'ear')} ${unit==='הברות'?'מוחאים כפיים בכל הברה':'מקשיבים לכל צליל קטן במילה'}</div><div class="count-options">${q.options.map(n=>`<button type="button" class="count-btn" data-answer="${n}"><b>${n}</b><small>${esc(unit)}</small></button>`).join('')}</div>`}
//@@ letterOptions
function letterOptions(q){return `${targetPicture(q.item)}<div class="answer-grid n${q.options.length}">${q.options.map(x=>`<button type="button" class="letter-tile" data-answer="${esc(x)}" aria-label="האות ${esc(letterNames[x]||x)}">${esc(x)}</button>`).join('')}</div>`}
//@@ newModeAnswer
function newModeAnswer(q){
 const m=game.mode;
 if(m==='picture')return soundOptions(q);
 if(m==='first'||m==='firstSyllable'||m==='firstLetter'||m==='rhymes'||m==='final')return targetPicture(q.source,'הקשיבו למילה')+soundOptions(q);
 if(m==='syllables'||m==='phonemes')return countingOptions(q,m==='syllables'?'הברות':'צלילים');
 if(m==='mapping')return letterOptions(q);
 if(m==='read2')return `<div class="read-word"><span>${esc(q.word.word)}</span></div><div class="read-hint">קוראים לבד ובוחרים תמונה</div><div class="pick-grid n${q.options.length}">${q.options.map(x=>`<button class="pick-card read-choice" type="button" data-read-choice="${esc(x.label)}" aria-label="${esc(x.label)}"><span class="pick-pic">${pic(x.emoji)}</span></button>`).join('')}</div>`;
 return '';
}
//@@ renderPlay
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
//@@ showFeedback
function feedbackInner(text,kind){if(kind==='good')return `<span class="fb-stars" aria-hidden="true"><img src="./art/star.svg" alt=""><img src="./art/star.svg" alt=""><img src="./art/star.svg" alt=""></span><span class="fb-ribbon"><span>${esc(text)}</span></span>`;if(kind==='try')return `<span class="fb-try"><img src="./art/pics/1f49d.webp" alt="" aria-hidden="true">${esc(text)}</span>`;return `<span class="fb-idle">${esc(text)}</span>`}
function setLuliMood(kind){const img=document.getElementById('ask-luli');if(!img)return;img.className='ask-luli luli-'+(kind||'idle');void img.offsetWidth;img.src='./art/'+(kind==='good'?'luli-jump':'luli-wand')+'.webp';img.classList.add('react')}
function showFeedback(textMsg,kind,voiceMsg=''){game.feedback=textMsg;game.feedbackVoice=voiceMsg;game.feedbackKind=kind;const e=document.getElementById('feedback');if(e){e.innerHTML=feedbackInner(textMsg,kind);e.className='feedback '+kind}setLuliMood(kind);const stars=document.querySelector('.play-stars');if(stars)stars.innerHTML=playStars()}
//@@ completed
function completed(){const n=game?.earned||0;const stage=game?.stage,next=stage?nextStageAfter(game.stageId):null;const max=game?.max||1,clean=game?.firstTry||0;const lit=stage?(game.passed&&clean>=Math.ceil(max*.8)?3:clean>=Math.ceil(max*.5)?2:1):(n>=max?3:n>=Math.ceil(max/2)?2:1);return `<div class="celebration"><span class="cel-rays" aria-hidden="true"></span>${Array.from({length:10},(_,i)=>`<span class="confetti c${i}" aria-hidden="true"></span>`).join('')}<img class="cel-luli" src="./art/luli-jump.webp" alt="" aria-hidden="true"><div class="cel-stars" role="img" aria-label="${lit} מתוך 3 כוכבים">${[0,1,2].map(i=>`<img class="cel-star s${i} ${i<lit?'lit':''}" src="./art/${i<lit?'star':'star-dim'}.svg" alt="">`).join('')}</div><div class="cel-ribbon"><h1>כל הכבוד!</h1></div><p>${stage?game.passed?'השלמת את התחנה!':'עשית עבודה נהדרת. אפשר להתאמן עוד!':'סיימת את המשחק!'} לולי ממש גאה בך.</p><div class="celebration-score"><img src="./art/star.svg" alt="" aria-hidden="true"> ${n} כוכבים במשחק הזה</div><button class="btn-magic" data-start-stage="${stage?next:''}" data-start="${stage?'':game?.mode||'letters'}">${icon('sparkles')} ${stage&&next!==game.stageId?'יאללה, לשלב הבא!':'עוד משחק!'}</button>${stage?`<button class="btn-soft" data-open-world="${stage.group}">${icon('map')} בחזרה לעולם</button>`:`<button class="btn-soft" data-nav="games">בוחרים הרפתקה אחרת</button>`}<button class="quiet-home" data-nav="home">חוזרים לבית של לולי</button></div>${meadow()}`}
//@@ render
function render(){topAndNav();document.getElementById('screen').innerHTML=screen==='welcome'?welcome():screen==='profiles'?profilePicker():screen==='home'?home():screen==='games'?games():screen==='world'?world():screen==='parent'?parent():screen==='play'?renderPlay():screen==='complete'?completed():welcome()}
