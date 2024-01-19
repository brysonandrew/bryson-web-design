import { useEffect } from 'react';
import { useContact } from '@brysonandrew/lib/contact/context/useContact';
import { DEFAULT_FOCUS_KEY } from '../context/constants';

export const useAutoFocus = (isDisabled: boolean) => {
  const { focusKey, onFocus } = useContact();

  useEffect(() => {
    if (focusKey === null && !isDisabled) {
      onFocus(DEFAULT_FOCUS_KEY);
    }
  }, []);
};
