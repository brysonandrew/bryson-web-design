import { createContext } from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const ServicesC = createContext<TContext>(CONTEXT);
