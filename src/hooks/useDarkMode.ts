import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useMediaQuery } from './useMediaQuery';
import { useUpdateEffect } from './useUpdateEffect';

const BRYSONA_DISPLAY_MODE_KEY = 'BRYSONA_DISPLAY_MODE_KEY';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

export type TUseDarkMode = {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
};

export const useDarkMode = (
  defaultValue?: boolean,
): TUseDarkMode => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [isDarkMode, setDarkMode] =
    useLocalStorage<boolean>(
      BRYSONA_DISPLAY_MODE_KEY,
      defaultValue ?? isDarkOS ?? false,
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
    const faviconEl = document.querySelector(
      'link[rel="icon"]',
    );
    console.log(faviconEl);
    if (faviconEl) {
      if (isDarkMode) {
        faviconEl.setAttribute('href', 'favicon.ico');
      } else {
        faviconEl.setAttribute('href', 'light/favicon.ico');
      }
    }
    const darkClass = (operation: 'add' | 'remove') =>
      document.documentElement.classList[operation]('dark');
    darkClass(isDarkMode ? 'add' : 'remove');
  }, [isDarkMode]);

  useUpdateEffect(() => {
    setDarkMode(isDarkOS);
  }, [isDarkOS]);

  return {
    isDarkMode,
    toggle,
    enable,
    disable,
  };
};
