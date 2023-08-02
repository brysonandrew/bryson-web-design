import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
const BRYSONA_DISPLAY_MODE_KEY = 'BRYSONA_DISPLAY_MODE_KEY';

export type TUseDarkMode = {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
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
    // const faviconElement = document.querySelector(
    //   'link[rel="icon"]',
    // );
    // if (faviconElement) {
    //   faviconElement.setAttribute(
    //     'href',
    //     isDarkMode ? 'favicon.ico' : 'light/favicon.ico',
    //   );
    // }
    const darkClass = (operation: 'add' | 'remove') =>
      document.documentElement.classList[operation]('dark');
    darkClass(isDarkMode ? 'add' : 'remove');
  }, [isDarkMode]);

  return {
    isDarkMode,
    toggle,
    enable,
    disable,
  };
};
