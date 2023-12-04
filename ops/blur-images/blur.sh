defaultExt='png';
defaultBlur=40;
ext="${1:-$defaultExt}"
blur="${2:-$defaultBlur}"
for file in assets/screens/canvas/**/*[!-source].$ext; 
do \
echo $file;
echo $ext;
echo $blur;
ffmpeg -y -i "$file" \
-filter_complex \
"boxblur=$blur, \
eq=brightness=-0.25: gamma_weight=0.75, \
drawtext=text='BLURRED DUE TO CLIENT IP PROTOCOL': \
x=(w-text_w)/2: y=(h-text_h)/2: \
fontfile='assets/IBMPlexMono-Regular.ttf': \
fontsize=(w/40)*1.8:fontcolor=0xffffff" \
-c:a copy -update 1 "${file%.$ext}-blur.${ext}";
done;
