import {
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import type { FC } from 'react';
import { SCROLL } from './constants';
import {
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useTimeoutRef } from 'lib/hooks/window/useTimeoutRef';
import { useLocation } from 'react-router';

export const INIT_SCROLL = 200;
export const SCROLL_COOLDOWN = 200;

export const Provider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { scrollX, scrollY } = useScroll();
  const [isScroll, setScroll] = useState(false);
  const [isScrolling, setScrolling] = useState(false);
  const { timeoutRef, endTimeout } = useTimeoutRef();
  const { pathname } = useLocation();

  const handleUpdate = (value: number) => {
    if (!isScrolling) {
      setScrolling(true);
    }
    endTimeout();
    timeoutRef.current = setTimeout(() => {
      setScrolling(false);
    }, SCROLL_COOLDOWN);

    if (!isScroll && value > INIT_SCROLL) {
      setScroll(true);
    }
    if (isScroll && value < INIT_SCROLL) {
      setScroll(false);
    }
  };
  useMotionValueEvent(scrollY, 'change', handleUpdate);

  useEffect(() => {
    const setY = () => {
      scrollX.set(0);
      scrollY.set(0);
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      handleUpdate(0);
    };
    timeoutRef.current = setTimeout(setY);
  }, [pathname]);

  return (
    <SCROLL.Provider
      value={{
        scroll: { x: scrollX, y: scrollY },
        isScroll,
        isScrolling,
      }}
    >
      {children}
    </SCROLL.Provider>
  );
};
