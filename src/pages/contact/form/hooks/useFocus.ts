import { TInputElement } from '@pages/contact/config';
import { useContext } from '@state/Context';
import { useEffect } from 'react';

export const useFocus = (
  input: TInputElement | null,
  isFocused: boolean,
) => {
  const { scrollY } = useContext();
  const handler = () => {
    if (input) {
      input.focus();
      const currScrollY = scrollY.get();
      window.scrollTo(0, currScrollY); // prevent autofocus issues
    }
  };
  useEffect(() => {
    if (isFocused) {
      handler();
    }
    return () => {
      if (input && isFocused) {
        input.blur();
      }
    };
  }, [input, isFocused]);

  return handler;
};
