import {
  MAX_SCROLL,
  TParallaxOptions,
} from '@brysonandrew/motion-parallax/config';

export const PARALLAX_PROPS: TParallaxOptions = {
  dispersion: {
    input: ({ startScroll, windowHeight }) => [
      startScroll,
      startScroll + windowHeight,
    ],
    output: [-1, 3],
  },
  resistance: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL,
    ],
    output: [-20, 60],
  },
};
