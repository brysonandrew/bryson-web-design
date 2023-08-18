import { useEffect } from 'react';
import { useTimeoutRef } from '../window/useTimeoutRef';

export const useHome = (delay?: number) => {
  const { timeoutRef, endTimeout } = useTimeoutRef();

  const reset = () => {
    window.scrollTo(0, 0);
  };

  const handler = () => {
    if (typeof delay === 'number') {
      timeoutRef.current = setTimeout(() => {
        reset();
      }, delay);
    } else {
      reset();
    }
  };

  useEffect(() => {
    return endTimeout;
  }, []);

  return handler;
};
