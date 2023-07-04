import { useContext } from '@state/Context';
import {
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

export const SCROLL_START = 80;
export const SCROLL = 120;

export const useScrollControl = () => {
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
};
