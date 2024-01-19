import { TMotionPoint } from '@brysonandrew/animation/types';

export type TState = {
  isScrolling: boolean;
  isScroll: boolean;

};

export type TScrollContext = TState & {
  scroll: TMotionPoint;
};
