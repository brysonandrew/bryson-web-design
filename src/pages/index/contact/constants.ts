import { MAX_SCROLL, TOptionsConfig } from "@components/fake-3d/config";

export const FAKE_3D_PROPS: TOptionsConfig = {
  resistance: {
    input: ({ startScroll }) => [
      startScroll,
      startScroll + MAX_SCROLL,
    ],
    output: [-20, 60],
  },
};