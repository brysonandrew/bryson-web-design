import { useEffect } from 'react';
import { useLocalStorage } from '../dom/useLocalStorage';
import { NOOP } from '@constants/functions';
import { resolveCompositeKey } from '@utils/keys';
import { APP_TITLE } from '@app/config/constants';

const DARK_MODE_KEY = resolveCompositeKey(
  APP_TITLE,
  'dark-mode',
);
export const TRANSITION_CLASS = 'duration-1000' as const;
export const EASE = [0.4, 0, 0.2, 1];
export const EASE_CSS = `cubic-bezier(${EASE})`;
export const DURATION = parseInt(
  TRANSITION_CLASS.split('-')[1],
);
const TRANSITION = ['color', 'background-color']
  .map((v) => `${v} ${DURATION}ms ${EASE_CSS}`)
  .join(', ');

const MODES = ['dark', 'light'] as const;
export type TDarkKey = (typeof MODES)[number];
export type TUseDarkMode = {
  isDarkMode: boolean;
  darkKey: TDarkKey;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
};

const INIT_MODE = 'dark';
export const INIT: TUseDarkMode = {
  isDarkMode: INIT_MODE === 'dark',
  darkKey: INIT_MODE,
  toggle: NOOP,
  enable: NOOP,
  disable: NOOP,
};

export const useDarkMode = (
  defaultValue?: boolean,
): TUseDarkMode => {
  const [isDarkMode, setDarkMode] =
    useLocalStorage<boolean>(
      DARK_MODE_KEY,
      defaultValue ?? true,
    );

  const enable = () => {
    setDarkMode(true);
  };

  const disable = () => {
    setDarkMode(false);
  };

  const toggle = () => {
    if (isDarkMode) {
      disable();
    } else {
      enable();
    }
  };

  useEffect(() => {
    const darkClass = (operation: 'add' | 'remove') =>
      document.documentElement.classList[operation]('dark');
    darkClass(isDarkMode ? 'add' : 'remove');
  }, [isDarkMode]);

  useEffect(() => {
    document.body.style.transition = TRANSITION;
  }, []);

  return {
    darkKey: isDarkMode ? 'dark' : 'light',
    isDarkMode,
    toggle,
    enable,
    disable,
  };
};
