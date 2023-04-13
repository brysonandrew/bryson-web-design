export const SPEED = 1;
export const TIME = 8;

export const ARPEGGIO_STEPS = [
  5, 5, 1, 12, 12, 12, 12, 12, 1, 5, 1, 5, 8, 5, 3, 5, 1, 5,
  1, 5, 8, 5, 3, 5, 1, 5, 1, 5, 3, 1, -2, -4,
];

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

export const STEPS_2 = [...Array(TIME)].fill(2);
export const KICK_COUNT = STEPS_2.length;
export const ARPEGGIO_COUNT = ARPEGGIO_STEPS.length;

export const KICK_SPEED = (SPEED / KICK_COUNT) * TIME;
export const ARPEGGIO_SPEED =
  (SPEED / ARPEGGIO_COUNT) * TIME;

export const CYMBAL_COUNT = CYMBAL_STEPS.length;
export const SNARE_COUNT = SNARE_STEPS.length;

export const CYMBAL_SPEED = (SPEED / CYMBAL_COUNT) * TIME;
export const SNARE_SPEED = (SPEED / SNARE_COUNT) * TIME;
