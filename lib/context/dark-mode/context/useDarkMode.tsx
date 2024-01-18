import { useContext as useReactContext } from 'react';
import { TUseDarkMode } from '../useDarkMode';
import { DARK_MODE } from './constants';

export const useDarkMode = (): TUseDarkMode =>
  useReactContext<TUseDarkMode>(DARK_MODE);
