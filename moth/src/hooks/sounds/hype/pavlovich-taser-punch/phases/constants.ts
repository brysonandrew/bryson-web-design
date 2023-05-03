export const SPEED = 1;
export const TIME = 8;
export const INTERVAL = TIME * SPEED;

export const ARPEGGIO_STEPS = [
  ...Array(10).fill(1),
  ...Array(6).fill(0),
  ...Array(10).fill(1),
  ...Array(6).fill(0),
];
