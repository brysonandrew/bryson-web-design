import {
  MAX_SCROLL,
  TFake3DOptions,
} from '@components/fake-3d/config';

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
