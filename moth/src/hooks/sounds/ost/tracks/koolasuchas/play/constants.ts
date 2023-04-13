export const SPEED = 1;
export const TIME = 8;

export const INTERVAL = SPEED * TIME;

export const BASS_STEPS = [...Array(TIME)].map((v, index) => index%2===0 ? 0 : 1);

export const TUNDRA_STEPS_0 = [
  8,7,5,7,  8,12,13,15,  0,1,3,1,  17,12,5,7,
]
export const TUNDRA_STEPS_1 = [
  8,7,5,7,  8,12,17,24,  0,1,3,1,  7,12,17,25,
]
