import { TTransition } from '@brysonandrew/motion-config-types';
import {
  MAX_SCROLL,
  TParallaxOptions,
} from '@brysonandrew/motion-parallax/config';

export const IMAGE_STATUSES = [
  'init',
  'loading',
  'ready',
  'error',
] as const;

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
    output: [0, 400],
  },
  visibility: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL * 2,
    ],
    opacity: [1, 0],
  },
};
