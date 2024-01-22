import {
  MAX_SCROLL,
  TParallaxOptions,
} from '@brysonandrew/parallax/config';

export const FAKE_3D_PROPS: TParallaxOptions = {
  resistance: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL,
    ],
    output: [0, 280],
  },
  visibility: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL * 2,
    ],
    opacity: [1, 0],
  },
};
