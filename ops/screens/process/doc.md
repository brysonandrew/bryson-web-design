## previous image conversion with ffmpeg (now using sharp) -

# 480 sizes
for file in screens/**/*.png ; do ffmpeg -i "$file" -vf scale=480:-1 "${file%.png}-480w.png"; done

# 800 sizes
for file in screens/**/*.png ; do ffmpeg -i "$file" -vf scale=800:-1 "${file%.png}-800w.png"; done

# webp sizes
for file in screens/**/*.png ; do cwebp "$file" -o "${file%.png}.webp"; done