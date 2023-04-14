const compressor = context.createDynamicsCompressor(); compressor.threshold.setValueAtTime( -50,
context.currentTime, ); compressor.knee.setValueAtTime(40, context.currentTime);
compressor.ratio.setValueAtTime(12, context.currentTime); compressor.attack.setValueAtTime(0,
context.currentTime); compressor.release.setValueAtTime( 0.25, context.currentTime, );

gain2.connect(compressor); compressor.connect(gain3);

      const gain3 = context.createGain();
    gain3.gain.exponentialRampToValueAtTime(0.001, end);
    gain3.gain.setValueAtTime(0, end);
