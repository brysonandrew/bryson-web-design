# brysona.dev
work, experiments

Webp convert

for file in screens/**/*.png ; do cwebp "$file" -o "${file%.png}.webp"; done
