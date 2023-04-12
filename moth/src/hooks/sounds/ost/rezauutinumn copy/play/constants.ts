export const STEPS = [...[...Array(24).fill(0)]];

export const CYMBAL_STEPS = [10, 10, 10, 12, 5, 5, 7, 8];

export const SNARE_STEPS = [
  ...[...Array(24)].map((v, i) =>
    (i + 6) % 24 === 0 ? 1 : 0,
  ),
];

export const KICK_STEPS = [
  ...[...Array(24)].map((v, i) => (i % 12 === 0 ? 1 : 0)),
];

export const SPEED = 0.4;
export const TIME = 8;

export const CYMBAL_COUNT = CYMBAL_STEPS.length;
export const SNARE_COUNT = SNARE_STEPS.length;
export const KICK_COUNT = KICK_STEPS.length;
export const STEPS_COUNT = STEPS.length;


export const CYMBAL_SPEED = (SPEED / CYMBAL_COUNT) * TIME;
export const SNARE_SPEED = (SPEED / SNARE_COUNT) * TIME;
export const KICK_SPEED = (SPEED / KICK_COUNT) * TIME;

export const STEPS_SPEED = (SPEED / STEPS_COUNT) * TIME;


export const PHASES = [
  {
    name: 0,
    repeat: 1,
  },
  {
    name: 1,
    repeat: 1,
  },
  {
    name: 2,
    repeat: 1,
  },
  {
    name: 3,
    repeat: 1,
  },
];
