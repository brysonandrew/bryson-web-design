import { MAX_SCROLL, TOptionsConfig } from "@components/fake-3d/config";

export const FAKE_3D_PROPS: TOptionsConfig = {
  dispersion: {
    input: ({ startScroll, windowHeight }) => [
      startScroll + windowHeight * 0.75,
      startScroll + windowHeight * 0.75 + MAX_SCROLL,
    ],
    output: [0, 20],
  },
  resistance: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL,
    ],
    output: [-20, 60],
  },
  // visibility: {
  //   input: ({ startScroll, windowHeight }) => [
  //     startScroll + windowHeight * 2,
  //     startScroll +
  //     MAX_SCROLL * 0.8 +
  //     windowHeight * 2,
  //   ],
  //   blur: [0, 8],
  //   grayscale: [0, 100],
  //   opacity: [0, 0.5],
  // },
};