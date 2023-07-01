import { MAX_SCROLL, TOptionsConfig } from '@components/fake-3d/config';

export const FAKE_3D_PROPS: TOptionsConfig = {
  dispersion: {
    input: ({ startScroll, windowHeight }) => [
      startScroll + windowHeight * 0.9,
      startScroll + windowHeight * 0.9 + MAX_SCROLL,
    ],
    output: [0, 20],
  },
  resistance: {
    input: ({ startScroll, windowHeight }) => [
      startScroll + windowHeight * 0.25,
      startScroll + windowHeight * 0.25 + MAX_SCROLL,
    ],
    output: [-60, 80],
  },
  visibility: {
    input: ({ startScroll, windowHeight }) => [
      startScroll + windowHeight * 0.9,
      startScroll +
      MAX_SCROLL * 0.8 +
      windowHeight * 0.9,
    ],
    blur: [0, 8],
    grayscale: [0, 100],
    opacity: [0, 0.5],
  },
};