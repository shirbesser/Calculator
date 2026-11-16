// Renders every boards/*.html art board to ../magic-letters/art/*.webp
// Each board defines <div id="art" data-out="name" data-w data-h data-scale data-q>
// usage: node render.js [boardName ...]
const {chromium}=require('playwright');
const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const dir=path.join(__dirname,'boards');
const outDir=path.join(__dirname,'..','magic-letters','art');
const want=process.argv.slice(2);
(async()=>{
 const b=await chromium.launch();
 for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.html'))){
  const name=f.replace('.html','');
  if(want.length&&!want.includes(name))continue;
  const html=fs.readFileSync(path.join(dir,f),'utf8');
  const m=html.match(/data-w="(\d+)" data-h="(\d+)" data-scale="([\d.]+)"(?: data-q="(\d+)")?/);
  const [w,h,scale,q]=[+m[1],+m[2],+m[3],m[4]||'82'];
  const ctx=await b.newContext({viewport:{width:w,height:h},deviceScaleFactor:scale});
  const p=await ctx.newPage();
  await p.goto('file://'+path.join(dir,f));
  await p.waitForTimeout(300);
  const png=path.join(__dirname,'out',name+'.png');
  fs.mkdirSync(path.dirname(png),{recursive:true});
  await p.locator('#art').screenshot({path:png,omitBackground:true});
  execFileSync('python3',['-I','-c',`from PIL import Image;im=Image.open('${png}');im.save('${path.join(outDir,name+'.webp')}','WEBP',quality=${q},method=6)`]);
  console.log(name,w+'x'+h+'@'+scale,fs.statSync(path.join(outDir,name+'.webp')).size);
  await ctx.close();
 }
 await b.close();
})();
