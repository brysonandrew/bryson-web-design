const FADE_0_01 = 'hsla(0, 0%, 0%, 0.1)';
const FADE_60_1 = 'hsla(0, 0%, 60%, 1)';
const FADE_85_1 = 'hsla(0, 0%, 85%, 1)';
const FADE_90_1 = 'hsla(0, 0%, 90%, 1)';
const FADE_100_01 = 'hsla(0, 0%, 100%, 0.1)';
const FADE_100_02 = 'hsla(0, 0%, 100%, 0.2)';

const TRANSPARENT = 'hsla(0, 0%, 0%, 0)';

export const METAL_RADIAL_GRADIENT_CENTER = `-webkit-repeating-radial-gradient(50% 50%, 100% 100%, ${TRANSPARENT} 0%, ${TRANSPARENT}
  3%, ${FADE_0_01} 3.5%),
-webkit-repeating-radial-gradient(50% 50%, 100% 100%, ${TRANSPARENT}
  0%, ${TRANSPARENT} 6%, ${FADE_100_01} 7.5%),
-webkit-repeating-radial-gradient(50% 50%, 100% 100%, ${TRANSPARENT}
  0%, ${TRANSPARENT} 1.2%, ${FADE_100_02} 2.2%),
-webkit-radial-gradient(50% 50%, 200% 50%, ${FADE_90_1} 5%, ${FADE_85_1}
  30%, ${FADE_60_1} 100%)`;
