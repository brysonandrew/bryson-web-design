import { useContext as useDarkModeContext } from '@context/dark-mode/Context';
import { useEffect } from 'react';
import { useContext } from '@context/domains/contact/Context';

export const useAutoFocus = (isDisabled: boolean) => {
  const {
    contact: { focusKey },
    dispatch,
  } = useContext();
  const {
    darkMode: { isDarkMode },
  } = useDarkModeContext();

  useEffect(() => {
    if (focusKey === null && !isDisabled) {
      dispatch({ type: 'contact-focus', value: 'name' });
    }
  }, [isDarkMode]); // no deps
};
