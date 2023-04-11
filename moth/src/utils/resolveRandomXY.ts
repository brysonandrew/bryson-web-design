import { PADDING } from "@moth-components/moth/constants";
import type { Viewport } from "@react-three/fiber";

export const resolveRandomXY = (viewport: Viewport) => ({
    x:
      viewport.width / 2 -
      (viewport.width * Math.random() + PADDING),
    y:
      viewport.height / 2 - viewport.height * Math.random(),
  });
