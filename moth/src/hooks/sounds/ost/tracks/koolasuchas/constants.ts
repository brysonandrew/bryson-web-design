export const SPEED = 1;
export const TIME = 8;
export const INTERVAL = SPEED * TIME;

export const SYNTH_VOLUME = 0.032;
export const HIHAT_VOLUME = 0.06;

export const BASS_STEPS = [...Array(TIME)].map((v, index) =>
  index % 2 === 0 ? 0 : 1,
);

export const CYMBAL_STEPS = [
  ...[...Array(58)].map((v, i) => 0),
  ...[...Array(6)].fill(1),
  // ...[...Array(58)].map((v, i) =>
  //   (i + 2) % 4 === 0 ? 1 : 0,
  // ),
  // ...[...Array(30)].map((v, i) =>
  //   (i + 2) % 4 === 0 ? 1 : 0,
  // ),

  // ...[...Array(2)].fill(1),
  // ...[...Array(12)].map((v, i) => (i % 16 === 0 ? 1 : 0)),
  // ...[...Array(6)].map((v, i) => 1),
  // ...[...Array(12)].map((v, i) => (i % 2 === 0 ? 1 : 0)),
];
const COUNT = 2 + 12 + 6 + 12;

export const HIHAT_STEPS_0 = [
  ...[...Array(12)].map((v, i) => 0),
  ...[...Array(1)].map((v, i) => 1),
  ...[...Array(3)].map((v, i) => 0),
];

export const HIHAT_STEPS_1 = [
  ...[...Array(6)].map((v, i) => 0),
  ...[...Array(3)].map((v, i) => 1),
  ...[...Array(7)].map((v, i) => 0),
];

export const SNARE_STEPS = [
  0, 0, 0, 1, 0, 0, 0, 0,
  // ...[...Array(6)].map((v, i) => (i % 2 === 0 ? 0 : 1)),
  // 1,
  // 1,
  // ...[...Array(8)].map((v, i) => (i % 2 === 0 ? 0 : 1)),

  // ...[...Array(16)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
  // ...[...Array(4)].map((v, i) => 1),
];

export const KICK_STEPS = [
  1, 1, 0, 1, 0, 0, 1, 0,
  // ...[...Array(14)].map((v, i) => (i % 2 === 0 ? 0 : 1)),
  // // ...[...Array(16)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
  // // ...[...Array(4)].map((v, i) => 1),
];

export const TUNDRA_STEPS_0 = [
  8, 7, 5, 7, 8, 12, 13, 15, 0, 1, 3, 1, 17, 12, 5, 7,
];
export const TUNDRA_STEPS_1 = [
  8, 7, 5, 7, 8, 12, 17, 24, 0, 1, 3, 1, 7, 12, 17, 25,
];
