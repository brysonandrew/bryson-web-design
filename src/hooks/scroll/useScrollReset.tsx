import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

export const useScrollReset = () => {
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  const handler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!location.hash) {
      timeoutRef.current = setTimeout(handler, 10);
    }
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return handler;
};
