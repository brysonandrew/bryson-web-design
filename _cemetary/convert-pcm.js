const convert = require('pcm-convert')
 
//convert data from float32 to uint8 array
let uint8arr = convert([0, 0.1, 0.1, 0], 'float32', 'uint8')
 
//convert interleaved uint8 to planar float32 array
let float32arr = convert(new Uint8Array([127, 200, 127, 200]), 'uint8 stereo interleaved', 'float32 planar')
 
//deinterleave keeping the same data type
let int8arr = convert(new Int8Array([-100,100,-100,100]), 'interleaved', 'planar')
 
//change endianness keeping the same data type
let float32be = convert(new Float32Array([1,.5,-.5,-1]), 'le', 'be')
 
//use objects as formats
let float64 = convert(float32be, {
    dtype: 'float32',
    channels: 2,
    interleaved: false,
    endianness: 'be'
}, {
    dtype: 'float64',
    interleaved: true,
    endianness: 'le'
})
 
//skip source format string, convert directly to data format
let uint16 = convert(new Uint8Array([0,255]), 'uint16')
 
//put data into target container skipping format strings
convert(new Uint8Array([0,255]), new Uint16Array(2))
 
//full arguments case
let uint16arr = convert([0, 0, 1, 1], 'float32 le stereo planar', 'uint16 interleaved be', new Uint16Array(4))