export const KILL_THE_KING_SNARE_STEPS = [
  ...[...Array(16)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
  ...[...Array(4)].map((v, i) => 1),
  ...[...Array(44)].map((v, i) => (i % 4 === 0 ? 1 : 0)),
];