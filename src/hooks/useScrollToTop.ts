import { useContext } from '@state/Context';
import {
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SCROLL_START = 60;
export const SCROLL = 120;

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  const { isScroll, isScrollStart, dispatch } = useContext();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (value) => {
    if (!isScrollStart && value > SCROLL_START) {
      dispatch({ type: 'scroll-start', value: true });
    }
    if (!isScroll && value > SCROLL) {
      dispatch({ type: 'scroll', value: true });
    }
    if (isScrollStart && value < SCROLL_START) {
      dispatch({ type: 'scroll-start', value: false });
    }
    if (isScroll && value < SCROLL) {
      dispatch({ type: 'scroll', value: false });
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: 'scroll', value: false });
  }, [pathname]);
};
