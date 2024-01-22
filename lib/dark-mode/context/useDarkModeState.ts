import { useEffect } from 'react';
import { resolveCompositeKey } from '@brysonandrew/utils/key';
import { name } from '../package.json';
import { useLocalStorage } from '@brysonandrew/hooks/dom/useLocalStorage';
import { TUseDarkMode } from './types';
import { TRANSITION_DARK_MODE_CSS_VALUE } from '@brysonandrew/animation';

export const useDarkModeState = (
  defaultValue?: boolean,
): TUseDarkMode => {
  const [isDarkMode, setDarkMode] =
    useLocalStorage<boolean>(
      resolveCompositeKey(name, 'dark-mode'),
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
      TRANSITION_DARK_MODE_CSS_VALUE;
  }, []);

  return {
    darkKey: isDarkMode ? 'dark' : 'light',
    isDarkMode,
    toggle,
    enable,
    disable,
  };
};
