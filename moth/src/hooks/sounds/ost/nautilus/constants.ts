export const STEPS_XXXX = [10, 13, 10, 15, 10, 13, 22, 15];
export const STEPS = [1, 3, 1, 5, 1, 3, 1, 5];

export const VERSES = [...[...Array(4)].fill(1)];

export const ARPEGGIO_STEPS = [
  ...STEPS_XXXX,
  ...STEPS,
  // ...STEPS_XXXX,
  // ...STEPS,
  // ...STEPS_XXXX,
  // ...STEPS,
  // ...STEPS_XXXX,
  // ...STEPS,
  // ...STEPS_XXXX,
  // ...STEPS,
  // ...STEPS_XXXX,
  // ...STEPS,
  // ...STEPS_XXXX,
  // ...STEPS,
  // ...STEPS_XXXX,
  // ...STEPS,
];

export const CYMBAL_STEPS = [
  // ...[...Array(58)].map((v, i) => (i % 4 === 0 ? 1 : 0)),
  // ...[...Array(12)].fill(1),

  ...[...Array(58)].map((v, i) =>
    (i + 2) % 4 === 0 ? 1 : 0,
  ),
  ...[...Array(30)].map((v, i) =>
    (i + 2) % 4 === 0 ? 1 : 0,
  ),
  ...[...Array(2)].fill(1),
  ...[...Array(12)].map((v, i) => (i % 16 === 0 ? 1 : 0)),
  ...[...Array(6)].map((v, i) => 1),
  ...[...Array(12)].map((v, i) => (i % 32 === 0 ? 1 : 0)),
];

export const SNARE_STEPS = [
  ...[...Array(16)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
  ...[...Array(4)].map((v, i) => 1),
  ...[...Array(44)].map((v, i) => (i % 4 === 0 ? 1 : 0)),
];

export const KICK_STEPS = [
  ...[...Array(30)].map((v, i) =>
    (i + 2) % 4 === 0 ? 1 : 0,
  ),
  ...[...Array(4)].map((v, i) => 1),
  ...[...Array(30)].map((v, i) =>
    (i + 2) % 4 === 0 ? 1 : 0,
  ),
];

export const STEPS_COUNT = STEPS.length;
export const INTERVAL_DURATION = STEPS.length * 1000; // * VERSES.length; // * BARS.length;
export const BEAT_DURATION = 1000; // 1000 = 1sec
export const STEP_DURATION = 1000 * STEPS.length;
