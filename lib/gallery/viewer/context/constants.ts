import { createContext } from 'react';
import type { TContext } from './types';

export const VIEWER = createContext<TContext>(
  {} as TContext,
);
