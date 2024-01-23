import { useEffect } from 'react';
import { useContact } from '@brysonandrew/contact';
import { DEFAULT_FOCUS_KEY } from '../config/constants';

export const useAutoFocus = (isDisabled: boolean) => {
  const { focusKey, onFocus } = useContact();

  useEffect(() => {
    if (focusKey === null && !isDisabled) {
      onFocus(DEFAULT_FOCUS_KEY);
    }
  }, []);
};
