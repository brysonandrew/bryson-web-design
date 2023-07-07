import { MAX_SCROLL, TOptionsConfig } from "@components/fake-3d/config";

export const FAKE_3D_PROPS: TOptionsConfig = {
  dispersion: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL,
    ],
    output: [0, -28],
  },
  resistance: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL,
    ],
    output: [-60, -280],
  },
  visibility: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL,
    ],
    blur: [0, 4],
    grayscale: [0, 100],
    opacity: [1, 0.4],
  },
};
