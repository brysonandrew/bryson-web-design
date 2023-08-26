# brysona.dev
work, experiments

[![Netlify Status](https://api.netlify.com/api/v1/badges/332644c8-26a8-4f71-ae8c-8c8a9c3dce9c/deploy-status)](https://app.netlify.com/sites/cerulean-choux-149d28/deploys)

## Image conversion

# 480 sizes
for file in screens/**/*.png ; do ffmpeg -i "$file" -vf scale=480:-1 "${file%.png}-480w.png"; done

# 800 sizes
for file in screens/**/*.png ; do ffmpeg -i "$file" -vf scale=800:-1 "${file%.png}-800w.png"; done

# webp sizes
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