import { useScroll } from '@brysonandrew/motion-scroll';
import { useEffect } from 'react';

export const useFocus = <T extends HTMLElement>(
  input: T | null,
  isFocused: boolean,
) => {
  const { scroll, isScrolling } = useScroll();
  const handler = () => {
    if (!isScrolling && input) {
      input.focus();
      const currScrollX = scroll.x.get();
      const currScrollY = scroll.y.get();
      window.scrollTo(currScrollX, currScrollY); // prevent autofocus issues
    }
  };
  useEffect(() => {
    if (!isScrolling && input && isFocused) {
      handler();
    }
  }, [input, isFocused, isScrolling]);

  return handler;
};
