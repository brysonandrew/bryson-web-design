import { TMotionPoint } from '@lib/animation/types';

export type TState = {
  isScrolling: boolean;
  isScroll: boolean;

};

export type TContext = TState & {
  scroll: TMotionPoint;
};
