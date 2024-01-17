import { useEffect } from 'react';
import { useContact } from '@lib/contact/context/useContact';

export const useAutoFocus = (isDisabled: boolean) => {
  const { focusKey, onFocus } = useContact();

  useEffect(() => {
    if (focusKey === null && !isDisabled) {
      onFocus('name');
    }
  }, []);
};
