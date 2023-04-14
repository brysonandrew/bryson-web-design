export const SPEED = 0.5 / 3;
export const TIME = 8;

export const INTERVAL = SPEED * TIME;

export const STEPS_0 = [5, 5, 1, 12, 12, 12, 12, 12];
export const STEPS_1 = [1, 5, 1, 5, 8, 5, 3, 5];
export const STEPS_2 = [1, 5, 1, 5, 12, 12, 12, 12];
export const STEPS_3 = [1, 5, 1, 5, 3, 1, -2, -4];
export const STEPS_4 = [1, 5, 1, 5, 8, 5, 3, 5];

export const PUNISHER_DESCENT_STEPS = [37, 35, 31, 27];
export const PUNISHER_STEPS = [27, 37, 35, 31];

export const CYMBAL_STEPS = [
  // ...[...Array(58)].map((v, i) => (i % 4 === 0 ? 1 : 0)),
  // ...[...Array(12)].fill(1),
  // ...[...Array(58)].map((v, i) =>
  //   (i + 2) % 4 === 0 ? 1 : 0,
  // ),
  // ...[...Array(30)].map((v, i) =>
  //   (i + 2) % 4 === 0 ? 1 : 0,
  // ),
  ...[...Array(2)].fill(1),
  ...[...Array(12)].map((v, i) => (i % 16 === 0 ? 1 : 0)),
  ...[...Array(6)].map((v, i) => 1),
  ...[...Array(12)].map((v, i) => (i % 32 === 0 ? 1 : 0)),
];

export const SNARE_STEPS = [
  ...[...Array(8)].map((v, i) => (i % 2 === 0 ? 0 : 1)),
  // ...[...Array(16)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
  // ...[...Array(4)].map((v, i) => 1),
];

export const KICK_STEPS = [...Array(TIME)].fill(2);
export const KICK_STEPS_1 = [
  ...[...Array(8)].map((v, i) => (i % 2 === 0 ? 1 : 0)),
  // ...[...Array(16)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
  // ...[...Array(4)].map((v, i) => 1),
];

export const BASS_STEPS = [...Array(TIME)].map((v) => 1);
