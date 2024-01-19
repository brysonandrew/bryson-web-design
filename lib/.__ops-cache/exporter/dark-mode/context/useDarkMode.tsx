import { useContext as useReactContext } from 'react';
import { DARK_MODE } from './constants';
import { TUseDarkMode } from './types';

export const useDarkMode = (): TUseDarkMode =>
  useReactContext<TUseDarkMode>(DARK_MODE);
