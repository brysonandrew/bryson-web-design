import { useTimeoutRef } from '@hooks/window/useTimeoutRef';
import { useContext } from '@context/scroll/Context';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const INIT_Y = 0;

export const useScrollToTop = (
  handleUpdate: (value: number) => void,
) => {
  const { pathname } = useLocation();
  const { scroll } = useContext();
  const { timeoutRef } = useTimeoutRef();
  useEffect(() => {
    const setY = () => {
      scroll.x.set(INIT_Y);
      scroll.y.set(INIT_Y);
      window.scrollTo(0, INIT_Y);
      document.documentElement.scrollTop = INIT_Y;
      handleUpdate(INIT_Y);
    };
    timeoutRef.current = setTimeout(setY);
  }, [pathname]);
};
