import { createContext } from 'react';
import { TAppContext, TValue } from './types';

export const APP = createContext({} as TValue) as TAppContext;
