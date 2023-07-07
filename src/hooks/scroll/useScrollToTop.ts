
import { useTimeoutRef } from '@hooks/useTimeoutRef';
import { useContext } from '@state/Context';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const INIT_Y = 0;

export const useScrollToTop = (handleUpdate: (value: number) => void) => {
  const { pathname } = useLocation();
  const { scrollX, scrollY } = useContext();
  const { timeoutRef } = useTimeoutRef();
  useEffect(() => {
    const setY = () => {
      scrollX.set(INIT_Y);
      scrollY.set(INIT_Y);
      window.scrollTo(0, INIT_Y);
      document.documentElement.scrollTop = INIT_Y;
      handleUpdate(INIT_Y);
    };
    timeoutRef.current = setTimeout(setY);
  }, [pathname]);
};