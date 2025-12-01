import { useRef, useEffect, RefObject } from 'react';

export const useIntoViewOnMount = <
  T extends HTMLElement = HTMLElement,
>(options: ScrollIntoViewOptions = {}): RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
      ...options
    });
  }, []);

  return ref;
};
