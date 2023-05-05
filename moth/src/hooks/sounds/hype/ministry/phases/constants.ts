const TRANSPOSE_INTRO = 60;
export const INTRO_STEPS = [
  10,7,5,4
].map((v) => v + TRANSPOSE_INTRO);

const TRANSPOSE_VERSE = 48;
export const VERSE_STEPS = [
  11, //C
  11, //C
  null,
  null,
].map((v) => (v === null ? null : v + TRANSPOSE_VERSE));

const TRANSPOSE_BASS = 24;
export const BASS_STEPS = [
  11, //C
  9, //B
  null,
  null,
].map((v) => (v === null ? null : v + TRANSPOSE_BASS));

export const SPEED = 1;
export const TIME = 8;
export const INTERVAL = TIME * SPEED;
