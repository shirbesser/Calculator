"""Find safe cut points for every item in the two narration sprites (offline, once).
Candidates are local minima of a 15ms energy envelope. A dynamic program assigns one
candidate to every boundary, in order, minimising (depth cost + distance-from-transcript cost),
so a boundary can never steal the silence that belongs to its neighbour. The transcript's
systematic drift is estimated first. Each cut is centred in its quiet stretch; each clip is then
trimmed to its speech with padding that never crosses a cut."""
import json,sys,numpy as np
D=sys.argv[1]; M=json.load(open(D+'/manifest.json')); SR=44100; HOP=220/44100   # exact frame length (220 samples)
out={}
for sheet,spec in M.items():
    x=np.fromfile(f'{D}/{sheet}.pcm',dtype=np.int16).astype(np.float32)/32768
    n=int(HOP*SR); F=len(x)//n; e=(x[:F*n].reshape(F,n)**2).mean(1)
    db=10*np.log10(np.convolve(e,np.ones(3)/3,mode='same')+1e-12); dur=len(x)/SR
    st=np.array([int(v,36)/100 for v in spec['starts'].split('.')]); en=np.array([int(v,36)/100 for v in spec['ends'].split('.')])
    N=len(st); speechLvl=np.percentile(db,90); B0=(en[:-1]+st[1:])/2
    mins=[j for j in range(2,F-2) if db[j]<=db[j-2:j+3].min() and db[j]<-28]
    C=np.array(mins)*HOP+HOP/2; Dd=db[mins]
    def solve(offset):
        B=B0+offset; INF=1e9
        cand=[np.where(np.abs(C-B[i])<0.45)[0] for i in range(N-1)]
        costs=[]; backs=[]
        for i in range(N-1):
            ci=cand[i]; lc=(Dd[ci]+90)/6+((C[ci]-B[i])/0.15)**2
            if i==0: costs.append(lc); backs.append(np.zeros(len(ci),int)); continue
            pc,pi=costs[-1],cand[i-1]; cur=np.full(len(ci),INF); bk=np.zeros(len(ci),int)
            for a,k in enumerate(ci):
                ok=C[pi]<=C[k]-0.12
                if ok.any():
                    m=np.where(ok,pc,INF); b=int(np.argmin(m)); cur[a]=m[b]+lc[a]; bk[a]=b
            costs.append(cur); backs.append(bk)
        a=int(np.argmin(costs[-1])); assert costs[-1][a]<INF
        sel=[0]*(N-1); sel[-1]=a
        for i in range(N-2,0,-1): sel[i-1]=backs[i][sel[i]]
        return [int(cand[i][sel[i]]) for i in range(N-1)]
    offset=0.0
    for _ in range(2):
        ks=solve(offset); conf=[C[k]-B0[i] for i,k in enumerate(ks) if Dd[k]<-70]; offset=float(np.median(conf))
    ks=solve(offset)
    cuts=[0.0]; info=[]
    for i,k in enumerate(ks):
        j=mins[k]; lim=max(db[j]+6,-58.0); l=j; r=j
        lo=int(cuts[-1]/HOP)+1; hi=int(C[ks[i+1]]/HOP)-1 if i+1<len(ks) else F-1
        while l>lo and db[l-1]<=lim: l-=1
        while r<hi and db[r+1]<=lim: r+=1
        cuts.append(((l+r)/2+.5)*HOP); info.append((float(db[j]),(r-l+1)*HOP))
    # Manual overrides, read from spectrograms, for words the narrator ran together with no pause.
    OVERRIDES={'words':{0:0.565,2:1.905,7:4.275},'phrases':{19:40.462,23:50.565,37:76.265,42:84.890,43:85.340}}
    for bi,t in OVERRIDES.get(sheet,{}).items():
        cuts[bi+1]=t; info[bi]=(float(db[int(t/HOP)]),0.0)
    cuts.append(dur)
    assert all(cuts[i]<cuts[i+1] for i in range(len(cuts)-1)), 'cuts not increasing'
    segs=[]
    for i in range(N):
        a,b=cuts[i],cuts[i+1]; fa,fb=int(a/HOP),min(F,int(b/HOP))
        thr=speechLvl-42
        loud=np.where(db[fa:fb]>thr)[0]
        s=(fa+loud[0])*HOP if len(loud) else a; e2=(fa+loud[-1]+1)*HOP if len(loud) else b
        segs.append(dict(i=i,item=spec['items'][i],cut0=round(a,4),cut1=round(b,4),s=round(max(a,s-0.05),4),e=round(min(b,e2+0.07),4),
             speech=round(e2-s,3),mdur=round(float(en[i]-st[i]),3),cutdb=round(info[i][0],1) if i<N-1 else -99,quiet=round(info[i][1],3) if i<N-1 else 1))
    out[sheet]=segs
    cd=np.array([s['cutdb'] for s in segs[:-1]]); ratio=np.array([s['speech']/max(s['mdur'],.05) for s in segs])
    print(sheet,N,'drift %+.3fs | cut level median %.1f dB, %d boundaries without real silence (> -55 dB) | speech/transcript ratio p5 %.2f p50 %.2f p95 %.2f'%(offset,np.median(cd),(cd>-55).sum(),*np.percentile(ratio,[5,50,95])))
    for s,r in zip(segs,ratio):
        nx=segs[s['i']+1]['item'] if s['i']<N-1 else ''
        if s['cutdb']>-55 or r<0.6 or r>2.0: print('   CHECK %3d %-24s|%-24s cut %.3f %.1fdB quiet %.3f speech %.3f transcript %.3f'%(s['i'],s['item'],nx,s['cut1'],s['cutdb'],s['quiet'],s['speech'],s['mdur']))
    for i in range(N-1):
        r1=segs[i]['speech']/max(segs[i]['mdur'],.05); r2=segs[i+1]['speech']/max(segs[i+1]['mdur'],.05)
        if (r1>1.35 and r2<0.85) or (r1<0.85 and r2>1.35): print('   SUSPECT PAIR',i,segs[i]['item'],round(r1,2),'|',segs[i+1]['item'],round(r2,2))
json.dump(out,open(D+'/segments.json','w'),ensure_ascii=False,indent=0)
