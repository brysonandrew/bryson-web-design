import { useRef } from 'react';
import { TFormKey } from '../config';
import { useContext } from '@context/domains/contact';

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

  const handleTap = () => {
    if (input) {
      input.scrollIntoView({
        block: 'center',
      });
    }
  };

  return {
    ref,
    boxInputs: {
      input,
      isFocused,
      isEmpty,
    },
    inputProps: {
      value,
      onTap: handleTap,
    },
  };
};
