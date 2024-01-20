import {
  MAX_SCROLL,
  TParallaxOptions,
} from '@brysonandrew/parallax/config';

export const FAKE_3D_PROPS: TParallaxOptions = {
  dispersion: {
    input: ({ startScroll, windowHeight }) => [
      startScroll + windowHeight * 0.75,
      startScroll + windowHeight * 0.75 + MAX_SCROLL,
    ],
    output: [0, 20],
  },
  resistance: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL,
    ],
    output: [-20, 60],
  },
};
