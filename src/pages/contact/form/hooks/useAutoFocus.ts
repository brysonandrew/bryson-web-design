import { useContext } from '@state/Context';
import { useEffect } from 'react';

export const useAutoFocus = (isDisabled: boolean) => {
  const {
    contact: { focusKey },
    darkMode: { isDarkMode },
    dispatch,
  } = useContext();
  useEffect(() => {
    if (focusKey === null && !isDisabled) {
      dispatch({ type: 'contact-focus', value: 'name' });
    }
  }, [isDarkMode]); // no deps
};
