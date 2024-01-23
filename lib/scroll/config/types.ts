import { TMotionPoint } from '@brysonandrew/animation/config/types';

export type TState = {
  isScrolling: boolean;
  isScroll: boolean;

};

export type TScrollContext = TState & {
  scroll: TMotionPoint;
};
