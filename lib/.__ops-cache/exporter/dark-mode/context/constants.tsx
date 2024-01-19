import { NOOP } from 'lib/base';
import { createContext } from 'react';
import { TUseDarkMode } from './types';

export const TRANSITION_CLASS = 'duration-1000' as const;
export const EASE = [0.4, 0, 0.2, 1];
export const EASE_CSS = `cubic-bezier(${EASE})`;
export const DURATION_DARK_MODE_MS = parseInt(
  TRANSITION_CLASS.split('-')[1],
);
export const TRANSITION = ['color', 'background-color']
  .map((v) => `${v} ${DURATION_DARK_MODE_MS}ms ${EASE_CSS}`)
  .join(', ');

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
