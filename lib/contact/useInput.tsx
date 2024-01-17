import { useRef } from 'react';
import { TFormKey } from './config/types';
import { useContact } from '@lib/contact/context/useContact';

type TConfig = {
  name: TFormKey;
};
export const useInput = <T extends HTMLElement>({
  name,
}: TConfig) => {
  const ref = useRef<T | null>(null);
  const input = ref.current;
  const { focusKey, form } = useContact();
  const isFocused = focusKey === name;
  const value = form[name];
  const isEmpty = Boolean(value);

  return {
    ref,
    boxInputs: {
      input,
      isFocused,
      isEmpty,
    },
    inputProps: {
      value,
    },
  };
};
