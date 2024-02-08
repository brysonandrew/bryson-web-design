import { useEffect } from 'react';
import { resolveCompositeKey } from '@brysonandrew/utils-key';
import { name } from './package.json';
import { useLocalStorage } from '@brysonandrew/hooks-dom/useLocalStorage';
import { TUseDarkMode } from '@brysonandrew/dark-mode/config/types';

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

  return {
    darkKey: isDarkMode ? 'dark' : 'light',
    isDarkMode,
    toggle,
    enable,
    disable,
  };
};
