import { createContext } from 'react';
import type { TContext } from './types';
import { INIT_VIEWPORT } from './useMeasure';

export const CONTEXT: TContext = {
  ...INIT_VIEWPORT,
  isVertical: false,
  halfHeight: 0,
  halfWidth: 0,
};

export const VIEWPORT = createContext<TContext>(CONTEXT);
