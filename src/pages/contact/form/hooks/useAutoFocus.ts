import { useEffect } from 'react';
import { useContact } from '@context/domains/contact';

export const useAutoFocus = (isDisabled: boolean) => {
  const { focusKey, onFocus } = useContact();

  useEffect(() => {
    if (focusKey === null && !isDisabled) {
      onFocus('name');
    }
  }, []);
};
