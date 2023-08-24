import type { TState, TAction, TContext } from './types';
import { motionValue } from 'framer-motion';

export const STATE: TState = {
  isScrolling: false,
  isScroll: false,
};

export const CONTEXT: TContext = {
  ...STATE,
  scroll: { x: motionValue(0), y: motionValue(0) },
  dispatch: (_: TAction) => null,
};
