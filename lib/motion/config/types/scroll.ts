import { TMotionPoint } from "@brysonandrew/motion-config-types";

export type TScrollState = {
  isScrolling: boolean;
  isScroll: boolean;
};

export type TScrollContext = TScrollState & {
  scroll: TMotionPoint;
};
