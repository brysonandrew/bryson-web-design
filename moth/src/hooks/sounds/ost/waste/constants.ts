
export const VERSE = [
  19, //A
  19,
  19,
  19,
  17, //E
  17,
  14,
  15,
  14,
  15,
  14,
  15,
  14,
  15,
  14,
  15,
  14,
  15,
];

export const STEPS = [...VERSE];

export const CYMBAL_STEPS = [
  ...[...Array(64)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
];

export const SNARE_STEPS = [
  ...[...Array(64)].map((v, i) =>
    (i + 16) % 64 === 0 ? 1 : 0,
  ),
];

export const KICK_STEPS = [
  ...[...Array(64)].map((v, i) => (i % 32 === 0 ? 1 : 0)),
];

export const STEPS_COUNT = STEPS.length;
export const INTERVAL_DURATION = STEPS.length * 1000; // * VERSES.length; // * BARS.length;
export const BEAT_DURATION = 1000; // 1000 = 1sec
export const STEP_DURATION = 1000 * STEPS.length;
