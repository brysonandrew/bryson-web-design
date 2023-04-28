export const HORN_FREQS = [
  0, 0.4, 0.4, 1, 1, 1, 0.3, 0.7, 0.6, 0.5, 0.9, 0.8,
];
export const HORN_WAVE: any = {
  real: HORN_FREQS,
  imag: [
    0, 0.4, 0.4, 1, 1, 1, 0.3, 0.7, 0.6, 0.5, 0.9, 0.8,
  ],
};

export const createFrequencyResponse = (): [
  frequencyHz: Float32Array,
  magResponse: Float32Array,
  phaseResponse: Float32Array,
] => {
  const base = HORN_FREQS;
  const nFreqs = base.length;
  const FREQS = new Float32Array(nFreqs);
  const MAGS = new Float32Array(nFreqs);
  const PHASES = new Float32Array(nFreqs);

  for (let i = 0; i < nFreqs; ++i) {
    FREQS[i] = base[i];
  }
  return [FREQS, MAGS, PHASES];
};
