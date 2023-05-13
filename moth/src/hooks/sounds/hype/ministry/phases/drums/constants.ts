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

export const SNARE_STEPS = [
  ...[...Array(12)].map((v, i) => 0),
  ...[...Array(1)].map((v, i) => 1),
  ...[...Array(23)].map((v, i) => 0),
  ...[...Array(12)].map((v, i) => (i % 3 === 0 ? 1 : 0)),
  ...[...Array(16)].map((v, i) => 0),
];
export const KICK_STEPS = [
  ...[...Array(64)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
];
