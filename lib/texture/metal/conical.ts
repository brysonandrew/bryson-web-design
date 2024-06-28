const FADE_0_01 = 'hsla(0, 0%, 0%, 0.1)';
const TRANSPARENT = 'hsla(0, 0%, 0%, 0)';

export const METAL_CONICAL_GRADIENT = `-webkit-radial-gradient(50% 0%, 10% 50%, ${FADE_0_01} 0%, ${TRANSPARENT} 100%),
-webkit-radial-gradient(50% 100%, 10% 50%, ${FADE_0_01} 0%, ${TRANSPARENT} 100%),
-webkit-radial-gradient(0% 50%, 50% 10%, ${FADE_0_01} 0%, ${TRANSPARENT} 100%),
-webkit-radial-gradient(100% 50%, 50% 0%, ${FADE_0_01} 0%, ${TRANSPARENT} 100%)`;