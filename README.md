# brysona.dev
work, experiments

[![Netlify Status](https://api.netlify.com/api/v1/badges/332644c8-26a8-4f71-ae8c-8c8a9c3dce9c/deploy-status)](https://app.netlify.com/sites/cerulean-choux-149d28/deploys)


convert .pcm to .wav 

First attempt

`ffmpeg -f f32le -ar 44.1k -ac 2 -i test.pcm file.wav`

-f s16le … signed 16-bit little endian samples
-ar 44.1k … sample rate 44.1kHz
-ac 2 … 2 channels (stereo)
-i file.pcm … input file
file.wav … output file
//-filter:a "setpts=0.5*PTS" 

Second attempt

`ffmpeg -loglevel panic -f f32le -y -i test.pcm output.wav`

Webp convert

for file in screens/**/*.png ; do cwebp "$file" -o "${file%.png}.webp"; done

Features

- full screen svg background
- fake 3D parallax
- light and dark designs
- contact form
- image gallery
  - drag to next/prev
  - zoom
- animated svg turbulance filter
- layout animation from project page to gallery
- service worker in typescript for caching

Future

- WebGL for images