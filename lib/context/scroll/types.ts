import { TMotionPoint } from '@lib/types/animation';

export type TState = {
  isScrolling: boolean;
  isScroll: boolean;

};

export type TContext = TState & {
  scroll: TMotionPoint;
};
