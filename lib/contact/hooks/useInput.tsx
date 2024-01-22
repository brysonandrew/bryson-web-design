import { useRef } from 'react';
import { TFormKey } from '../context/types';
import { useContact } from '@brysonandrew/contact';
import { useApp } from '@brysonandrew/app';

type TConfig = {
  name: TFormKey;
};
export const useInput = <T extends HTMLElement>({
  name,
}: TConfig) => {
  const ref = useRef<T | null>(null);
  const { BORDER_RADIUS } = useApp();
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
      style: { borderRadius: BORDER_RADIUS.MD },
    },
  };
};

export type TUseInput<T extends HTMLElement> = ReturnType<
  typeof useInput<T>
>;
