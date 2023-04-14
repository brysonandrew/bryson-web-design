export const STEPS_0 = [10, 13, 10, 15, 10, 13, 22, 15];
export const STEPS_1 = [10, 10, 10, 10, 10, 13, 22, 15];
export const STEPS_2 = [
  ...[...Array(9)].fill(10),
  ...[...Array(2)].fill(null),
  22,
];
export const STEPS_3 = [
  ...[...Array(9)].fill(15),
  ...[...Array(2)].fill(null),
  25,
];
export const STEPS_4 = [
  ...[...Array(9)].fill(18),
  ...[...Array(2)].fill(null),
  27,
];
export const STEPS_5 = [
  ...[...Array(9)].fill(23),
  ...[...Array(2)].fill(null),
  34,
];

export const STEPS_6 = [10, 10, 10, 10, 10, 10, 10, 27];

export const VERSES = [...[...Array(4)].fill(1)];

export const ARPEGGIO_STEPS_0 = [...STEPS_0];
export const ARPEGGIO_STEPS_1 = [...STEPS_1];

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

export const MACHINE_GUN_STEPS = [
  ...[...Array(16)].map((v, i) => 1),
  // ...[...Array(16)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
  // ...[...Array(4)].map((v, i) => 1),
];

export const SNARE_STEPS = [
  ...[...Array(8)].map((v, i) => (i % 2 === 0 ? 0 : 1)),
  // ...[...Array(16)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
  // ...[...Array(4)].map((v, i) => 1),
];

export const KICK_STEPS = [
  ...[...Array(8)].map((v, i) => (i % 2 === 0 ? 1 : 0)),
  // ...[...Array(4)].map((v, i) => 1),
  // ...[...Array(30)].map((v, i) => (i % 4 === 0 ? 1 : 0)),
];

export const SPEED = 2;
export const TIME = 1;
export const INTERVAL = TIME * SPEED;
