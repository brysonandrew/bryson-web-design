export const SPEED = 1;
export const TIME = 8;
export const INTERVAL = TIME * SPEED;

export const ARPEGGIO_VOLUME = 0.1;
export const VERSE_VOLUME = 0.016;

export const BASS_STEPS = [1, 3, 1, 5, 1, 3, 1, 5];

export const ARPEGGIO_STEPS = [
  5, 5, 1, 12, 12, 12, 12, 12, 1, 5, 1, 5, 8, 5, 3, 5, 1, 5,
  1, 5, 8, 5, 3, 5, 1, 5, 1, 5, 3, 1, -2, -4,
];

const first8 = ARPEGGIO_STEPS.slice(0, 8);

export const ARPEGGIO_ASCENDING_STEPS_0 = [
  ...first8,
  ...first8.map((v) => v + 2),
  ...first8.map((v) => v + 5),
  ...first8.map((v) => v + 7),
];

export const ARPEGGIO_ASCENDING_STEPS_1 = [
  ...first8,
  ...first8.map((v) => v + 12),
  ...first8.map((v) => v + 24),
  ...first8.map((v) => v + 36),
];

export const ARPEGGIO_7TH_STEPS = ARPEGGIO_STEPS.map(
  (v) => v + 7,
);

export const ARPEGGIO_5TH_STEPS = ARPEGGIO_STEPS.map(
  (v) => v + 5 - 12,
);

const arr = [];
let d = false;
for (let i = 0; i < ARPEGGIO_STEPS.length; i++) {
  const curr = ARPEGGIO_STEPS[i];
  if (i % 4 === 0) {
    d = !d;
  }
  if (d) {
    arr.push(curr);
  } else {
    arr.push(null);
  }
}
export const ARPEGGIO_EACH_FIRST_STEPS = arr;
export const ARPEGGIO_EACH_FIRST_INCLUDING_LAST_8_STEPS = [
  ...ARPEGGIO_EACH_FIRST_STEPS.slice(-8),
  ...ARPEGGIO_STEPS.slice(0, 24),
];

export const VERSE = [
  -3, -3, 6, 6, 6, 6, 7, 6, 4, 4, 6, 2, -1, -1, -3, -3,
];
export const VERSE_1 = [
  -3, -3, 6, 6, 6, 6, 9, 6, 7, 9, 6, 7, 6, -1, -3, -3,
];
// export const MAP = [
//   9, //A
//   8,
//   1, //D
//   1,
//   9, //E
//   9,
//   9,
//   9,
// ];
export const DROP = [
  5, 5, 12, 12, 17, 13, 13, 12, 
  5, 5, 12, 12, 17, 13, 13, 24, 
];

export const DROP_2 = [
  36, 36, 32, 32, 31, 32, 31, 29, 
  29, 29, 36, 36, 41, 41, 48, 48,
];

