var wavConverter = require('wav-converter')
var fs = require('fs')
var path = require('path')
var pcmData = fs.readFileSync(path.resolve(__dirname, './test.pcm'))
var wavData = wavConverter.encodeWav(pcmData, {
    numChannels: 1,
    sampleRate: 44100,
    byteRate: 16
})
 
fs.writeFileSync(path.resolve(__dirname, `./song_${Math.random().toFixed(2)}.wav`), wavData)
 