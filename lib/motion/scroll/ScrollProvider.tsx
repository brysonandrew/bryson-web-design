import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import type { FC } from 'react';
import { useTimeoutRef } from '@brysonandrew/hooks-window/useTimeoutRef';
import { useLocation } from 'react-router';
import type { TScrollContext } from '@brysonandrew/motion/scroll/config/types';
import {
  useMotionValueEvent,
  useScroll as useMotionScroll,
} from 'framer-motion';
import {
  SCROLL_COOLDOWN,
  INIT_SCROLL,
  INIT_SCROLL_CONTEXT,
} from '@brysonandrew/motion/scroll/config/constants';

const SCROLL = createContext<TScrollContext>(
  INIT_SCROLL_CONTEXT,
);
export const useScroll = (): TScrollContext =>
  useContext<TScrollContext>(SCROLL);

export const ScrollProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { scrollX, scrollY } = useMotionScroll();
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
