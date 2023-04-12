export const STEPS_XXXX = [10, 13, 10, 15, 10, 13, 22, 15];

export const VERSES = [...[...Array(4)].fill(1)];

export const ARPEGGIO_STEPS = [
  ...STEPS_XXXX,
  // ...STEPS,
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
