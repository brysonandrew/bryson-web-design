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
  9, //B
  9,
  9,
  9,
  1, //F
  1,
  1,
  1,
];

export const CLANG_STEPS = [
  ...[...Array(4)].map((v,i) => null),
  ...[...Array(4)].map((v,i) => 9 + 12)
];

export const STEPS = [
  // ...INTRO,
  // ...INTRO,
  ...VERSE, // we give what we take
  // // we hide
  // // the soul shakes
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

export const SPEED = 0.28;
export const TIME = 8;
export const INTERVAL = TIME * SPEED;
