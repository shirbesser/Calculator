# Cutting Luli's narration into separate clips

The two original recordings (`magic-letters/audio/luli-words.mp3`, `luli-phrases.mp3`) were split
into 258 clips (`magic-letters/audio/luli/w000–w167.mp3`, `p000–p089.mp3`).

The original transcript times were inaccurate (145 of 168 words still had speech after their
"end"), so cuts are taken from the audio itself:

1. `segment.py` – 15 ms energy envelope; one cut per boundary chosen by dynamic programming
   among energy minima (depth + distance to the transcript, corrected for drift), centred in
   the silence. `OVERRIDES` holds 8 cuts set by hand from spectrograms, where the speaker ran
   words together with no pause.
2. `export.py` – writes each clip (speech + up to 50/70 ms of its own silence, 6 ms fades) and
   the new `recorded-manifest.js`.
3. `checkcuts.py`, `edgecheck.py`, `spec.py` – verification (cuts in silence, clip edges quiet,
   spectrogram images).

Decode first: `ffmpeg -i luli-words.mp3 -ac 1 -ar 44100 -f s16le words.pcm` (same for phrases),
put them with `manifest.json` (from `recorded-manifest-original.js`) in one folder, then run
`python3 segment.py DIR && python3 export.py DIR OUT_DIR MANIFEST_JS`.
