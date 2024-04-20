import {
  MAX_SCROLL,
  TParallaxOptions,
} from 'lib/motion/parallax/config';
import { React } from '@pages/index/tech/icons/React';
import { Typescript } from '@pages/index/tech/icons/Typescript';
import {
  REACT,
  TYPESCRIPT,
} from '@app/gallery/third-party';

export const TECH = {
  REACT: {
    ...REACT,
    Icon: React,
  },
  TYPESCRIPT: {
    ...TYPESCRIPT,
    Icon: Typescript,
  },
} as const;

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
