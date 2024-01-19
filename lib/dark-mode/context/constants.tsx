import { createContext } from 'react';
import { TUseDarkMode } from '../useDarkMode';

export const DARK_MODE = createContext<TUseDarkMode>(
  {} as TUseDarkMode,
);
