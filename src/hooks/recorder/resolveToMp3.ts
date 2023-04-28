// import lamejs from "lamejs";

export const resolveToMp3 = (
  channels: any,
  sampleRate: number,
  left: any,
  right = null,
) => {
  const buffer = [];
  // var mp3enc = new lamejs.Mp3Encoder(
  //   channels,
  //   sampleRate,
  //   128,
  // );
  let remaining = left.length;
  const samplesPerFrame = 1152;

  for (
    let i = 0;
    remaining >= samplesPerFrame;
    i += samplesPerFrame
  ) {
    if (!right) {
      const mono = left.subarray(i, i + samplesPerFrame);
      // var mp3buf = mp3enc.encodeBuffer(mono);
    } else {
      const leftChunk = left.subarray(i, i + samplesPerFrame);
      const rightChunk = (right as any).subarray(
        i,
        i + samplesPerFrame,
      );
      // var mp3buf = mp3enc.encodeBuffer(
      //   leftChunk,
      //   rightChunk,
      // );
    }
    // if (mp3buf.length > 0) {
    //   buffer.push(mp3buf); //new Int8Array(mp3buf));
    // }
    remaining -= samplesPerFrame;
  }
  // var d = mp3enc.flush();
  // if (d.length > 0) {
  //   buffer.push(new Int8Array(d));
  // }

  // var mp3Blob = new Blob(buffer, { type: "audio/mp3" });
  //var bUrl = window.URL.createObjectURL(mp3Blob);

  // send the download link to the console
  //console.log('mp3 download:', bUrl);
  // return mp3Blob;
};
