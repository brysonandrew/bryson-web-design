export const STEPS_0 = [
  1,
  1,
  1,
  1, //D
  9, //A#
  6, //G
  8, //A
  4, //F
];
export const STEPS_1 = [
  0, // C#
  0,
  0,
  0,
  1, //D
  9,
  0,
  8, //E
];

export const VERSE_STEPS_0 = [
  1,
  1,
  1,
  1,
  9 + 12,
  9 + 12,
  9 + 12,
  8 + 12,
];
export const VERSE_STEPS_1 = [
  0,
  0,
  0,
  0,
  9 + 12,
  9 + 12,
  9 + 12,
  8 + 15,
];

export const VERSES = [...[...Array(4)].fill(1)];

export const ARPEGGIO_STEPS = [...STEPS_0, ...STEPS_1];

export const VERSE_STEPS = [
  ...VERSE_STEPS_0,
  ...VERSE_STEPS_1,
];

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

export const SNARE_STEPS = [
  ...[...Array(12)].map((v, i) => 0),
  ...[...Array(1)].map((v, i) => 1),
  ...[...Array(23)].map((v, i) => 0),
  ...[...Array(12)].map((v, i) => (i % 3 === 0 ? 1 : 0)),
  ...[...Array(16)].map((v, i) => 0),
];
const TOTAL = 12 + 1 + 23 + 12 + 16;
export const KICK_STEPS = [
  ...[...Array(64)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
];

export const SPEED = 1;
export const TIME = 8;
export const INTERVAL = TIME * SPEED;
