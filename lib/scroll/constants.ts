import type { TState, TScrollContext } from './types';
import { motionValue } from 'framer-motion';
import { createContext } from 'react';

export const STATE: TState = {
  isScrolling: false,
  isScroll: false,
};

export const CONTEXT: TScrollContext = {
  ...STATE,
  scroll: { x: motionValue(0), y: motionValue(0) },
};

export const SCROLL = createContext<TScrollContext>(CONTEXT);
