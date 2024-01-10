import {
  MAX_SCROLL,
  TFake3DOptions,
} from '@components/fake-3d/config';
import { React } from '@components/icons/tech/React';
import { Typescript } from '@components/icons/tech/Typescript';
import {
  REACT,
  TYPESCRIPT,
} from '@pages/projects/config/constants/third-party';

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

export const FAKE_3D_PROPS: TFake3DOptions = {
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
