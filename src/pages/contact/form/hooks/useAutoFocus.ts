import { useEffect } from 'react';
import { useContact } from '@pages/index/contact/context';

export const useAutoFocus = (isDisabled: boolean) => {
  const { focusKey, onFocus } = useContact();

  useEffect(() => {
    if (focusKey === null && !isDisabled) {
      onFocus('name');
    }
  }, []);
};
