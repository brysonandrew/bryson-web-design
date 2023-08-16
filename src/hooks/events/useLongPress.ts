import { useEventListener } from '@hooks/useEventListener';
import { useTimeoutRef } from '@hooks/useTimeoutRef';
import { useRef } from 'react';

export const useLongPress = (callback: () => any) => {
  const { timeoutRef, endTimeout } = useTimeoutRef();
  const ref = useRef<HTMLElement | null>(null);

  useEventListener<'touchstart', HTMLElement>(
    'touchstart',
    () => {
      timeoutRef.current = setTimeout(callback, 500);
    },
    ref,
  );

  useEventListener<'touchmove', HTMLElement>(
    'touchmove',
    endTimeout,
    ref,
  );

  useEventListener<'touchend', HTMLElement>(
    'touchend',
    endTimeout,
    ref,
  );

  return ref;
};
