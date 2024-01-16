import { createContext } from 'react';
import { TContext, TValue } from './types';

export const APP = createContext({} as TValue) as TContext;
