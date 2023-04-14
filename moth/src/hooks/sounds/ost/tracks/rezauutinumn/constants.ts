export const STEPS_0 = [10, 10, 10, 12, 5, 5, 7, 8];
export const STEPS_1 = [12, 12, 12, 12, 5, 5, 7, 8];
export const STEPS_2 = [5, 5, 7, 8, 12, 12, 12, 12];
export const STEPS_3 = [10, 3, 10, 3, 5, 10, 3, 5];

export const SNARE_STEPS = [
  ...[...Array(24)].map((v, i) =>
    (i + 6) % 24 === 0 ? 1 : 0,
  ),
];

export const SNARE_STEPS_3 = [
  ...[...Array(24)].map((v, i) =>
    (i + 6) % 6 === 0 ? 1 : 0,
  ),
];

export const KICK_STEPS = [
  ...[...Array(24)].map((v, i) => (i % 12 === 0 ? 1 : 0)),
];

export const CYMBAL_STEPS = [
  ...[...Array(24)].map((v, i) => (i % 12 === 0 ? 1 : 0)),
];

export const KICK_STEPS_1 = [
  ...[...Array(24)].map((v, i) => (i % 12 === 0 ? 1 : 0)),
];

export const CYMBAL_STEPS_1 = [
  ...[...Array(24)].map((v, i) => (i % 12 === 0 ? 1 : 0)),
];

export const MACHINE_GUN_STEPS = [
  ...[...Array(16)].map((v, i) => 1),
  // ...[...Array(16)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
  // ...[...Array(4)].map((v, i) => 1),
];

export const SPEED = 0.1;
export const TIME = 8;
export const INTERVAL = TIME * SPEED;
