export const SPEED = 1;
export const TIME = 8;

export const VERSES = [...[...Array(4)].fill(1)];

export const STEPS_XXXX = [1, 2, 4, 20, 50, 80, 90, 20];
export const STEPS = [1, 3, 1, 5, 1, 3, 1, 5];

export const STEPS_ARPEGGIO = [
  5, 5, 1, 12, 12, 12, 12, 12, 1, 5, 1, 5, 8, 5, 3, 5, 1, 5,
  1, 5, 8, 5, 3, 5, 1, 5, 1, 5, 3, 1, -2, -4,
];

export const STEPS_COUNT = STEPS.length;
export const INTERVAL_DURATION = STEPS.length * 1000; // * VERSES.length; // * BARS.length;
export const BEAT_DURATION = 1000; // 1000 = 1sec
export const STEP_DURATION = 1000 * STEPS.length;
