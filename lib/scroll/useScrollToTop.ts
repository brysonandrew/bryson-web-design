import { useTimeoutRef } from '@brysonandrew/hooks-window/useTimeoutRef';
import { useScroll } from '@brysonandrew/scroll';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const INIT_Y = 0;

export const useScrollToTop = (
  handleUpdate?: (value: number) => void,
) => {
  const { pathname } = useLocation();
  const {
    scroll: { x: scrollX, y: scrollY },
  } = useScroll();
  const { timeoutRef, endTimeout } = useTimeoutRef();

  useEffect(() => {
    const setY = () => {
      scrollX.set(INIT_Y);
      scrollY.set(INIT_Y);
      window.scrollTo(0, INIT_Y);
      document.documentElement.scrollTop = INIT_Y;
      if (handleUpdate) {
        handleUpdate(INIT_Y);
      }
    };
    endTimeout();
    timeoutRef.current = setTimeout(setY);
  }, [pathname]);
};
