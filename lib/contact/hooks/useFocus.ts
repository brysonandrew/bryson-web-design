import { TInputElement } from '@lib/contact/config/types';
import { useScroll } from '@lib/context/scroll';
import { useEffect } from 'react';

export const useFocus = (
  input: TInputElement | null,
  isFocused: boolean,
) => {
  const { scroll } = useScroll();
  const handler = () => {
    if (input) {
      input.focus();
      const currScrollX = scroll.x.get();
      const currScrollY = scroll.y.get();
      window.scrollTo(currScrollX, currScrollY); // prevent autofocus issues
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
