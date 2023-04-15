export const HZ = 440;
export const midiToHz = (note: number) =>
  Math.pow(2, (note - 69) / 12) * HZ;
