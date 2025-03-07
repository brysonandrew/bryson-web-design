import {
  MAX_SCROLL,
  TParallaxOptions,
} from '@brysonandrew/motion-parallax/config';

export const PARALLAX_PROPS: TParallaxOptions = {
  resistance: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL,
    ],
    output: [-20, 60],
  },
};
