import { useContext } from '@state/Context';
import { useMotionValueEvent } from 'framer-motion';
import { useScrollToTop } from './useScrollToTop';

export const SCROLL_START = 80;
export const SCROLL = 80;

export const useScrollControl = () => {
  const { isScroll, scrollY, cursorX, cursorY, dispatch } =
    useContext();

  const handleScroll = (value: boolean) =>
    dispatch({ type: 'scroll', value });

  const handleUpdate = (value: number) => {
    if (!isScroll && value > SCROLL) {
      handleScroll(true);
    }
    if (isScroll && value < SCROLL) {
      handleScroll(false);
    }
  };
  useScrollToTop(handleUpdate);
  useMotionValueEvent(scrollY, 'change', handleUpdate);
};
