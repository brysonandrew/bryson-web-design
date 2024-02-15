make backups so essentially copies of every image in two formats -blur and -source

# Blur with watermark

for file in assets/canvas-original-screens/**/*.png; do \ 
ffmpeg -y \
-i "$file" \
-filter_complex \
"boxblur=12, \
drawtext=text='BLURRED IN ACCORDANCE WITH IP PROTECTION': \
x=(w-text_w)/2: y=(h-text_h)/2: \
fontfile='assets/IBMPlexMono-Regular.ttf': \
fontsize=(w/40)*2.25: fontcolor=white;" \
-c:a copy -update "${file%.png}-blur.png";
done;