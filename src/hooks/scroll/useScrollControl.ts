
import { useContext } from '@state/Context';
import { useMotionValueEvent } from 'framer-motion';
import { useScrollToTop } from './useScrollToTop';

export const SCROLL_START = 80;
export const SCROLL = 120;

export const useScrollControl = () => {
  const { isScroll, isScrollStart, scrollY, dispatch } = useContext();

  const handleScroll = (value: boolean) => dispatch({ type: 'scroll', value });
  const handleScrollStart = (value: boolean) => dispatch({ type: 'scroll-start', value });

  const handleUpdate = (value: number) => {
    if (!isScroll && value > SCROLL) {
      handleScroll(true);
    }
    if (!isScrollStart && value > SCROLL_START) {
      handleScrollStart(true);
    }
    if (isScrollStart && value < SCROLL_START) {
      handleScrollStart(false);
    }
    if (isScroll && value < SCROLL) {
      handleScroll(false);
    }
  };
  useScrollToTop(handleUpdate);
  useMotionValueEvent(scrollY, 'change', handleUpdate);
};
