export const VERSE = [
  3, //E
  1, //C
  1, //C
  3, //E
  1, //C
  1, //C
  3, //E
  1, //C
  1, //C
  3, //E
  1, //C
  1, //C
  2, //C#
  1, //C
  1, //C
  2, //C#
  1, //C
  1, //C
  2, //C#
  1, //C
  1, //C
  2, //C#
  1, //C
  1, //C
  // ...[...Array(4)].map((_) => 11), //B
  // ...[...Array(4)].map((_) => 10), //A#
  // ...[...Array(8)].map((_) => 15), // E
];
// intro = 4;
// intro chorus = 4
// verse 1 = 8
// chorus = 4
// verse 2 = 8
// chorus = 4
// bridge = 8
// chorus = 4
// intro = 4;
// total = 48

export const REPEAT_COUNT = 48;

export const BASS_STEPS = [...VERSE];

export const CYMBAL_STEPS = [
  ...[...Array(64)].map((v, i) => (i % 8 === 0 ? 1 : 0)),
];

export const SNARE_STEPS = [
  ...[...Array(64)].map((v, i) =>
    (i + 16) % 64 === 0 ? 1 : 0,
  ),
];

export const KICK_STEPS = [
  ...[...Array(64)].map((v, i) => (i % 32 === 0 ? 1 : 0)),
];

export const STEPS_COUNT = BASS_STEPS.length;
export const INTERVAL_DURATION = BASS_STEPS.length * 1000; // * VERSES.length; // * BARS.length;
export const BEAT_DURATION = 1000; // 1000 = 1sec
export const STEP_DURATION = 1000 * BASS_STEPS.length;
