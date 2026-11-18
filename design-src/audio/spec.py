# spec.py DIR sheet t0 t1 out.png [mark1 mark2 ...]  -> spectrogram with time grid (0.1s) and red cut marks
import sys,numpy as np
from PIL import Image,ImageDraw
D,sheet,t0,t1,out=sys.argv[1],sys.argv[2],float(sys.argv[3]),float(sys.argv[4]),sys.argv[5]; marks=[float(m) for m in sys.argv[6:]]
SR=44100;x=np.fromfile(f'{D}/{sheet}.pcm',dtype=np.int16).astype(np.float32)/32768
seg=x[int(t0*SR):int(t1*SR)];N=1024;H=int(sys.argv[-1]) if False else 110;win=np.hanning(N)
cols=[np.abs(np.fft.rfft(seg[i:i+N]*win))[:280] for i in range(0,len(seg)-N,H)]   # up to ~12kHz
S=20*np.log10(np.array(cols).T+1e-9);S=np.clip((S-S.max()+75)/75,0,1)[::-1]
img=Image.fromarray((S*255).astype(np.uint8)).resize((len(cols)*3,420)).convert('RGB')
px=lambda t:int((t-t0)*SR/H*3)
d=ImageDraw.Draw(img)
t=np.ceil(t0*10)/10
while t<t1: d.line([(px(t),0),(px(t),12)],fill=(80,200,255)); d.text((px(t)+2,0),'%.1f'%t,fill=(80,200,255)); t+=0.1
for m in marks: d.line([(px(m),0),(px(m),420)],fill=(255,40,40),width=2)
img.save(out)
