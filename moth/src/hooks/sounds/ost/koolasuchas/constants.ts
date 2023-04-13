export const SPEED = 1;
export const TIME = 8;

export const BASS_STEPS = [...Array(TIME)].map((v) => 1);
export const BASS_COUNT = BASS_STEPS.length;
export const BASS_SPEED = (1 / BASS_COUNT) * SPEED;
