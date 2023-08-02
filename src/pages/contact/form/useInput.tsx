import { useRef, KeyboardEvent } from 'react';
import { useContext } from '@state/Context';
import { TFormKey } from '../config';

type TConfig = {
  name: TFormKey;
};
export const useInput = <T extends HTMLElement>({
  name,
}: TConfig) => {
  const ref = useRef<T | null>(null);
  const input = ref.current;
  const {
    contact: { focusKey, form },
  } = useContext();
  const isFocused = focusKey === name;
  const value = form[name];
  const isEmpty = Boolean(value);

  const handleKeyDown = () => {
    if (input) {
      input.scrollIntoView({
        block: 'center',
      });
    }
  };

  return {
    ref,
    input,
    isFocused,
    isEmpty,
    value,
    onKeyUp: handleKeyDown,
  };
};
