import { useDarkMode } from '@context/dark-mode';
import { useEffect } from 'react';
import { useContext } from '@context/domains/contact';

export const useAutoFocus = (isDisabled: boolean) => {
  const {
    contact: { focusKey },
    dispatch,
  } = useContext();
  const {
     isDarkMode ,
  } = useDarkMode();

  useEffect(() => {
    if (focusKey === null && !isDisabled) {
      dispatch({ type: 'contact-focus', value: 'name' });
    }
  }, [isDarkMode]); // no deps
};
