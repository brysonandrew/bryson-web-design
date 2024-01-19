import {
  MAX_SCROLL,
  TParallaxOptions,
} from '@brysonandrew/animation/components/parallax/config';
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

export const FAKE_3D_PROPS: TParallaxOptions = {
  dispersion: {
    input: ({ startScroll, windowHeight }) => [
      startScroll + windowHeight * 0.25,
      startScroll + windowHeight * 0.25 + MAX_SCROLL,
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
