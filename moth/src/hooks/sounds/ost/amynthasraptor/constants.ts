export const STEPS_XXXX = [
  1,
  1,
  1,
  1, //D
  9, //A#
  6, //G
  8, //A
  4, //F
];
export const STEPS = [
  0, // C#
  0,
  0,
  0,
  1, //D
  9,
  0,
  8, //E
];

export const VERSES = [...[...Array(4)].fill(1)];

export const ARPEGGIO_STEPS = [...STEPS_XXXX, ...STEPS];

export const CYMBAL_STEPS = [
  ...[...Array(4)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
  ...[...Array(4)].map((v, i) => 1),
  ...[...Array(19)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
  ...[...Array(2)].map((v, i) => (i % 2 === 0 ? 1 : 0)),
  ...[...Array(2)].map((v, i) => 0),
  ...[...Array(4)].map((v, i) => (i % 2 === 0 ? 1 : 0)),
  ...[...Array(23)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
  ...[...Array(6)].map((v, i) => (i % 2 === 0 ? 1 : 0)),
];

const COUNT = 4 + 4 + 19 + 2 + 2 + 4 + 23 + 6;
console.log(COUNT);

export const SNARE_STEPS = [
  ...[...Array(12)].map((v, i) => 0),
  ...[...Array(1)].map((v, i) => 1),
  ...[...Array(23)].map((v, i) => 0),
  ...[...Array(12)].map((v, i) => (i % 3 === 0 ? 1 : 0)),
  ...[...Array(16)].map((v, i) => 0),
];
const TOTAL = 12 + 1 + 23 + 12 + 16;
console.log(TOTAL);
export const KICK_STEPS = [
  ...[...Array(64)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
];

export const STEPS_COUNT = STEPS.length;
export const INTERVAL_DURATION = STEPS.length * 1000; // * VERSES.length; // * BARS.length;
export const BEAT_DURATION = 1000; // 1000 = 1sec
export const STEP_DURATION = 1000 * STEPS.length;
