import {
  MAX_SCROLL,
  TFake3DOptions,
} from '@components/fake-3d/config';

export const FAKE_3D_PROPS: TFake3DOptions = {
  resistance: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL,
    ],
    output: [-0, 200],
  },
  dispersion: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL * 2,
    ],
    output: [0, 200],
  },
  visibility: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL * 4,
    ],
    opacity: [1, 0],
  },
};
