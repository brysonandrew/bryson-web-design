import {
  MAX_SCROLL,
  TFake3DOptions,
} from '@components/animation/fake-3d/config';

export const FAKE_3D_PROPS: TFake3DOptions = {
  resistance: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL,
    ],
    output: [-20, 60],
  },
};
