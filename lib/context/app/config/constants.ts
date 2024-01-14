import type { TContext } from './types';
import { createContext } from 'react';

export const APP = createContext<TContext>({} as TContext);
