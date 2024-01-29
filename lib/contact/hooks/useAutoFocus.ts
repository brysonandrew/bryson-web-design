import { useEffect } from 'react';
import { useContact } from '@brysonandrew/contact';

export const useAutoFocus = (isDisabled: boolean) => {
  const { focusKey, onFocus } = useContact();

  useEffect(() => {
    if (focusKey === null && !isDisabled) {
      onFocus(focusKey);
    }
  }, []);
};
