import { NOOP } from '@brysonandrew/utils';
import { createContext } from 'react';
import { TUseDarkMode } from '@brysonandrew/dark-mode/config/types';

export const MODES = ['dark', 'light'] as const;

const INIT_MODE = 'dark';
export const INIT_DARK_MODE: TUseDarkMode = {
  isDarkMode: INIT_MODE === 'dark',
  darkKey: INIT_MODE,
  toggle: NOOP,
  enable: NOOP,
  disable: NOOP,
};

export const DARK_MODE = createContext<TUseDarkMode>(
  {} as TUseDarkMode,
);
