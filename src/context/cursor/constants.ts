import type { TState, TAction, TContext } from './types';
import { motionValue } from 'framer-motion';

export const STATE: TState = {
  isCursorReady: false,
  hoverKey: null,
};

export const CONTEXT: TContext = {
  ...STATE,
  offsetRef: { current: { x: 1, y: 1 } },
  cursorLabel: { x: motionValue(0), y: motionValue(0) },
  cursor: { x: motionValue(0), y: motionValue(0) },
  dispatch: (_: TAction) => null,
};
