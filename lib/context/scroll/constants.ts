import type { TState, TContext } from './types';
import { motionValue } from 'framer-motion';
import { createContext } from 'react';

export const STATE: TState = {
  isScrolling: false,
  isScroll: false,
};

export const CONTEXT: TContext = {
  ...STATE,
  scroll: { x: motionValue(0), y: motionValue(0) },
};

export const SCROLL = createContext<TContext>(CONTEXT);
