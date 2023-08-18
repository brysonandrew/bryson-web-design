import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { NOOP } from '@constants/functions';
const BRYSONA_DISPLAY_MODE_KEY = 'BRYSONA_DISPLAY_MODE_KEY';

export type TUseDarkMode = {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
};

export const INIT: TUseDarkMode = {
  isDarkMode: true,
  toggle: NOOP,
  enable: NOOP,
  disable: NOOP,
};

export const useDarkMode = (
  defaultValue?: boolean,
): TUseDarkMode => {
  const [isDarkMode, setDarkMode] =
    useLocalStorage<boolean>(
      BRYSONA_DISPLAY_MODE_KEY,
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
    document.body.style.transition =
      'color 0.9s, background-color 0.9s';
  }, []);

  return {
    isDarkMode,
    toggle,
    enable,
    disable,
  };
};
