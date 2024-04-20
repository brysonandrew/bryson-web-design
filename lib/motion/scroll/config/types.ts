import { TMotionPoint } from "@brysonandrew/motion-core";

export type TScrollState = {
  isScrolling: boolean;
  isScroll: boolean;
};

export type TScrollContext = TScrollState & {
  scroll: TMotionPoint;
};
