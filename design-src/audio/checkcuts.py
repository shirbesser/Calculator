import json,sys,numpy as np
D=sys.argv[1];S=json.load(open(D+'/segments.json'));SR=44100;n=220;HOP=n/SR
for sheet,segs in S.items():
    x=np.fromfile(f'{D}/{sheet}.pcm',dtype=np.int16).astype(np.float32)/32768
    F=len(x)//n;db=10*np.log10((x[:F*n].reshape(F,n)**2).mean(1)+1e-12)
    flags=[]
    for s in segs[:-1]:
        j=int(s['cut1']/HOP); q=db<-55
        if not q[j]: flags.append((s,0.0,db[j]));continue
        l=j;r=j
        while l>0 and q[l-1]:l-=1
        while r<F-1 and q[r+1]:r+=1
        L=(r-l+1)*HOP
        if L<0.08: flags.append((s,L,db[j]))
    print(sheet,len(flags),'cuts not inside >=80ms of silence:')
    for s,L,d in flags: print('  %3d %-16s|%-16s cut %.3f silence %.3fs level %.1f'%(s['i'],s['item'][:16],segs[s['i']+1]['item'][:16],s['cut1'],L,d))
