import { createContext } from 'react';
import { TAppContext, TValue } from './types';

export const APP = createContext(
  {} as TValue<any>,
) as TAppContext<any>;
