import {
  TValue,
  TAppContext,
} from '@brysonandrew/app/config/types';
import { createContext } from 'react';

export const APP = createContext(
  {} as TValue<any>,
) as TAppContext<any>;
