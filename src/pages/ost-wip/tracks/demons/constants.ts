// My demons keep me busy
// a life long in the shade
// they caress me, and make me happy
// turn my words into blades

// Nothings every coming back to you
// my medusa, im your statue for you

export const VERSE = [
  7, //E
  10, // G
  10,
  10,
  12, // A
  12,
  12,
  12,
  12, // A
  12,
  12,
  12,
  7, //E
  7,
  7,
  12,
  12,
  4, //C
  4, //C
  7,
  7,
  5,
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
