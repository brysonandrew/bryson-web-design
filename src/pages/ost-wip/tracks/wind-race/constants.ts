// So you believe its not almost over
// Life is long like the journey of the window
// trust in me trust in me trust we have forever, trust we gave away never to see again

export const VERSE = [
  9, //A
  9,
  9,
  9,
  7, //E
  7,
  4,
  5,
  4,
  5,
  4,
  5,
  4,
  5,
  4,
  5,
  4,
  5,
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
