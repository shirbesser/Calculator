import sys,glob,subprocess,numpy as np,json
A=sys.argv[1];S=json.load(open(sys.argv[2]))
items={('w' if k=='words' else 'p')+'%03d'%s['i']:s['item'] for k,v in S.items() for s in v}
bad=[];tot=0;sizes=0
for f in sorted(glob.glob(A+'/[wp]*.mp3')):
    sizes+=__import__('os').path.getsize(f)
    pcm=subprocess.run(['ffmpeg','-v','error','-i',f,'-f','s16le','-ac','1','-ar','44100','-'],capture_output=True).stdout
    x=np.frombuffer(pcm,dtype=np.int16).astype(np.float32)/32768
    # skip mp3 decoder priming (first ~1105 samples are encoder delay if not trimmed)
    n=int(0.005*44100); core=x
    nz=np.where(np.abs(core)>0.003)[0]
    if len(nz)==0: bad.append((f,'silent'));continue
    head=20*np.log10(np.sqrt((core[nz[0]:nz[0]+n]**2).mean())+1e-9)
    lvl=lambda seg:20*np.log10(np.sqrt((seg**2).mean())+1e-9)
    first=lvl(core[:n*2]); last=lvl(core[-n*2:]); peak=lvl(core[np.argmax(np.abs(core))-200:np.argmax(np.abs(core))+200])
    tot+=1
    k=f.split('/')[-1][:-4]
    if first>-40 or last>-40: bad.append((k,items[k],round(first,1),round(last,1)))
print('clips',tot,'total KB',sizes//1024)
print('edges louder than -40 dB (first 10ms / last 10ms):')
for b in bad: print('  ',b)
