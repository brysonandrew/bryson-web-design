import {
  MAX_SCROLL,
  TParallaxOptions,
} from '@lib/components/animation/parallax/config';

export const FAKE_3D_PROPS: TParallaxOptions = {
  resistance: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL,
    ],
    output: [-20, 60],
  },
};
