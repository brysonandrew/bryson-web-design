import type { TContext } from './types';
import { createContext } from 'react';

export const CONTACT = createContext<TContext>(
  {} as TContext,
);
