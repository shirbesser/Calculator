"""Write one MP3 per recorded word/phrase + an updated recorded-manifest.js."""
import json,sys,subprocess,os
D,OUT,MAN=sys.argv[1],sys.argv[2],sys.argv[3]
S=json.load(open(D+'/segments.json'));M=json.load(open(D+'/manifest.json'))
os.makedirs(OUT,exist_ok=True)
b36=lambda v:__import__('numpy').base_repr(int(round(v*100)),36).lower()
new={}
for sheet,segs in S.items():
    pre='w' if sheet=='words' else 'p'; durs=[]
    for s in segs:
        a,b=s['s'],s['e']; d=b-a; f=f'{OUT}/{pre}{s["i"]:03d}.mp3'
        fade=0.006
        subprocess.run(['ffmpeg','-v','error','-y','-ss',f'{a:.4f}','-t',f'{d:.4f}','-i',f'{D}/{sheet}.mp3',
            '-af',f'afade=t=in:d={fade},afade=t=out:st={max(0,d-fade):.4f}:d={fade}','-ac','1','-ar','44100',
            '-c:a','libmp3lame','-b:a','96k',f],check=True)
        durs.append(d)
    spec=dict(M[sheet]); spec['url']=f'./audio/luli-{sheet}.mp3'
    spec['starts']='.'.join(b36(s['s']) for s in segs); spec['ends']='.'.join(b36(s['e']) for s in segs)
    spec['clip']=f'./audio/luli/{pre}'; spec['durs']='.'.join(b36(x) for x in durs)
    new[sheet]=spec
hdr=('// Luli\'s recorded Hebrew narration.\n'
     '// Every word/phrase is its own MP3 in audio/luli/ (w000-w167, p000-p089), cut at real silences.\n'
     '// starts/ends (base-36 centiseconds) are the same cut points inside the original sprites\n'
     '// audio/luli-words.mp3 and audio/luli-phrases.mp3, used only as a fallback.\n')
open(MAN,'w').write(hdr+'window.LULI_RECORDED = '+json.dumps(new,ensure_ascii=False,separators=(',',':'))+';\n')
print('clips written:',sum(len(v) for v in S.values()))
