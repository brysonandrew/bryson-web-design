export const STEPS = [...[...Array(24).fill(0)]];

export const CYMBAL_STEPS = [10, 10, 10, 12, 5, 5, 7, 8];

export const SNARE_STEPS = [
  ...[...Array(24)].map((v, i) =>
    (i + 6) % 24 === 0 ? 1 : 0,
  ),
];

export const KICK_STEPS = [
  ...[...Array(24)].map((v, i) => (i % 12 === 0 ? 1 : 0)),
];
