const FADE_0_01 = 'hsla(0, 0%, 0%, 0.1)';
const FADE_0_003 = 'hsla(0, 0%, 0%, 0.03)';
const FADE_100_015 = 'hsla(0, 0%, 100%, 0.15)';
const TRANSPARENT = 'hsla(0, 0%, 0%, 0)';
const FADE_100_01 = 'hsla(0, 0%, 100%, 0.1)';

export const METAL_LINEAR_GRADIENT = `-webkit-repeating-linear-gradient(left, ${TRANSPARENT} 0%, ${TRANSPARENT} 6%, ${FADE_100_01} 7.5%),
 -webkit-repeating-linear-gradient(left, ${TRANSPARENT} 0%, ${TRANSPARENT} 4%, ${FADE_0_003} 4.5%),
 -webkit-repeating-linear-gradient(left, ${TRANSPARENT} 0%, ${TRANSPARENT} 1.2%, ${FADE_100_015} 2.2%),
 linear-gradient(180deg, hsl(0,0%,78%) 0%, hsl(0,0%,90%) 47%, hsl(0,0%,78%) 53%, hsl(0,0%,70%) 100%);`;