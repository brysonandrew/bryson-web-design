export const INTRO = [...Array(8)].fill(22);
// [
//   1, //D
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
//   1,
// ];

export const OUTRO = [
  9,
  9,
  9,
  9,
  9,
  9,
  9,
  9,
];

export const BRIDGE = [
  4, //F
  4,
  4,
  4,
  4,
  4,
  4,
  4,
];

export const VERSE = [
  9, //A
  8,
  1, //D
  1,
  9, //E
  9,
  9,
  9,
];

export const CHORUS = [
  10, 
  11,
  12,
  9,
  3, 
  3,
  3,
  3,
];

export const STEPS = [
  // ...INTRO,
  // ...INTRO,
  ...VERSE,
  ...VERSE,
  ...VERSE,
  ...VERSE,
  ...VERSE,
  ...VERSE,
  ...VERSE, // we give what we take
  // // we hide
  ...VERSE, // the soul shakes
  // // lost in the light
  // // ...BRIDGE,
  // // ...BRIDGE,
  // ...CHORUS, // miracles dont happen to us
  // ...CHORUS,
  // ...CHORUS,
  // ...CHORUS,
  // ...CHORUS,
  // ...CHORUS
  // ...VERSE, //thats you there
  // //without any net
  // ...VERSE, //you know i always look down
  // //waiting for for the end
  // ...VERSE, //kleidaspopic poster
  // //its needs a name
  // ...VERSE, //ill call it our life
  // //we will live through its paper
  // ...CHORUS, // miracles dont happen to us
  // ...CHORUS,

  // ...VERSE, //   when youre hands is drenched
  // // have no fear
  // ...VERSE, // when the fire arrives
  // // we will sail to paradise

  // ...CHORUS, // miracles dont happen to us
  // ...CHORUS,
  // ...CHORUS, //we are fools only
  // ...CHORUS, //pieces of material
  // ...OUTRO
];

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

export const STEPS_COUNT = STEPS.length;
export const INTERVAL_DURATION = STEPS.length * 1000; // * VERSES.length; // * BARS.length;
export const BEAT_DURATION = 1000; // 1000 = 1sec
export const STEP_DURATION = 1000 * STEPS.length;
