import { TTransition } from '@app/animation';
import {
  MAX_SCROLL,
  TParallaxOptions,
} from '@brysonandrew/parallax/config';

export const ORIGIN_50: TTransition = {
  originX: '50%',
  originY: '50%',
  originZ: '50%',
};

export const PARALLAX_PROPS: TParallaxOptions = {
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
