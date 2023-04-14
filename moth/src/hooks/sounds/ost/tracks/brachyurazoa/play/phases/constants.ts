export const SPEED = 1;
export const TIME = 8;
export const INTERVAL = TIME * SPEED;

export const STEPS_XXXX = [1, 2, 4, 20, 50, 80, 90, 20];
export const STEPS = [0, 2, 0, 2, 0, 2, 0, 2];

export const STEPS_2_X = [2, 2, 0, 2, 2, 2, 2, 2];

export const STEPS_II = [1, 1, 1, 1, 1, 1, 1, 1];
export const STEPS_1 = [...Array(8)].fill(1);
export const STEPS_8 = [...Array(8)].fill(8);
export const STEPS_11 = [...Array(8)].fill(11);
export const STEPS_43 = [...Array(4)].fill(43);

export const STEPS_0 = [...Array(8)].fill(0);
export const STEPS_111 = [...Array(8)].fill(111);

export const STEPS_X = [45, 50, 0, 0, 0, 214, 41, 40];
export const STEPS_XX = [50, 80, 90, 20];
export const STEPS_XXX = [0, 8, 9, 2];

export const STEPS_III = [1, 0, 1, 0, 0, 0, 0, 0];
export const STEPS_IV = [0, 0, 0, 0, 0, 0, 0, 0];

export const ARPEGGIO_STEPS = [1, 5, 1, 5, 8, 5, 3, 5];
export const ARPEGGIO_STEPS_1 = [1, 5, 1, 5, 1, 5, 1, 5];
export const APRPEGGIOS_0 = [
  ARPEGGIO_STEPS,
  ARPEGGIO_STEPS,
];
export const APRPEGGIOS_1 = [
  ARPEGGIO_STEPS,
  ARPEGGIO_STEPS_1,
  ARPEGGIO_STEPS,
  ARPEGGIO_STEPS_1,
];

export const BARS: number[][] = [
  STEPS_X,
  STEPS_XX,
  STEPS_8,
  STEPS,
];
export const BARS_II: number[][] = [
  STEPS_II,
  STEPS_II,
  STEPS_II,
  STEPS_II,
];
export const BARS_III: number[][] = [
  STEPS,
  STEPS_II,
  STEPS_III,
  STEPS_IV,
];
export const BARS_VI: number[][] = [
  STEPS,
  STEPS_II,
  STEPS_III,
  STEPS_IV,
];
export const VERSES: number[][][] = [
  BARS,
  BARS_II,
  BARS_III,
  BARS_VI,
];

export const STEPS_2 = [...Array(TIME)].fill(2);
export const STEPS_3 = [10, 3, 10, 3, 5, 10, 3, 5];

export const KICK_COUNT = STEPS_2.length;
export const ARPEGGIO_COUNT = ARPEGGIO_STEPS.length;

export const KICK_SPEED = (SPEED / KICK_COUNT) * TIME;
export const ARPEGGIO_SPEED =
  (SPEED / ARPEGGIO_COUNT) * TIME;

export const STEPS_SPEED = (SPEED / ARPEGGIO_COUNT) * TIME;
