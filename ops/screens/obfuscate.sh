defaultExt='png';
defaultBlur=40;
ext="${1:-$defaultExt}"
blur="${2:-$defaultBlur}"
for file in assets/android-chrome-512x512.$ext; 
do \
echo $file;
echo $ext;
echo $blur;
ffmpeg -y -i "$file" \
-filter_complex \
"boxblur=$blur, \
eq=brightness=-0.5: gamma_weight=0.1, \
drawtext=text='SCREENS HIDDEN DUE TO CLIENT PROTOCOL': \
x=(w-text_w)/2: y=(h-text_h)/2: \
fontfile='assets/IBMPlexMono-Regular.ttf': \
fontsize=(w/40)*1.6:fontcolor=0xffffff" \
-c:a copy -update 1 "${file%.$ext}-obfuscate.${ext}";
done;
