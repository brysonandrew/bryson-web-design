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
