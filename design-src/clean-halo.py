import sys,numpy as np
from PIL import Image, ImageFilter
# remove whitish halo: alpha reduced where pixel is light & low-sat & not fully opaque core
src,dst=sys.argv[1],sys.argv[2]
lo=float(sys.argv[3]) if len(sys.argv)>3 else 120
hi=float(sys.argv[4]) if len(sys.argv)>4 else 245
im=np.array(Image.open(src).convert('RGBA')).astype(np.float32)
rgb=im[...,:3]; a=im[...,3]
mn=rgb.min(-1); mx=rgb.max(-1)
light=np.clip((mn-170)/60,0,1)            # 1 for very light pixels
sat=(mx-mn)/np.maximum(mx,1)
whitish=light*np.clip(1-(sat-0.10)/0.25,0,1)
t=np.clip((a-lo)/(hi-lo),0,1); t=t*t*(3-2*t)
# for whitish pixels apply strong remap, others mild
mild=np.clip((a-40)/(160-40),0,1); mild=mild*mild*(3-2*mild)
na=(whitish*t+(1-whitish)*mild)*255
# core opaque stays
na=np.where(a>=250,255,na)
im[...,3]=na
out=Image.fromarray(im.astype(np.uint8))
out.save(dst)
