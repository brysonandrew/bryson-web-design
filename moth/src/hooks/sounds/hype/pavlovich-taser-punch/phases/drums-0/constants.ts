const STEPS_COUNT = 4;

export const CYMBAL_STEPS = [
  ...[...Array(STEPS_COUNT)].map((v, i) =>
    ~~Math.exp(i) % 2 === 0 ? 1 : 0,
  ),
];
export const SNARE_STEPS = [
  ...[...Array(STEPS_COUNT)].map((v, i) => 1),
];
export const KICK_STEPS = [
  ...[...Array(STEPS_COUNT)].map((v, i) =>
    i % 2 === 0 ? 1 : 0,
  ),
];
