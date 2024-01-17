import { INIT } from '@lib/hooks/window/useViewport';
import { createContext } from 'react';
import type { TContext } from './types';

export const CONTEXT: TContext = {
  ...INIT,
  isVertical: false,
  halfHeight: 0,
  halfWidth: 0,
};

export const VIEWPORT = createContext<TContext>(CONTEXT);
