import { createContext } from 'react';
import type { TContext } from './types';

export const GALLERY = createContext<TContext>(
  {} as TContext,
);
