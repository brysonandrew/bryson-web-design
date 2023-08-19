import { useContext } from '@state/Context';
import { useMotionValueEvent } from 'framer-motion';
import { useScrollToTop } from './useScrollToTop';
import { useTimeoutRef } from '@hooks/window/useTimeoutRef';

export const SCROLL = 80;
export const SCROLL_COOLDOWN = 80;

export const useScrollControl = () => {
  const { isScroll, isScrolling, scrollY, dispatch } =
    useContext();

  const { timeoutRef, endTimeout } = useTimeoutRef();

  const handleScroll = (value: boolean) =>
    dispatch({ type: 'scroll', value });

  const handleUpdate = (value: number) => {
    if (!isScrolling) {
      dispatch({ type: 'scrolling', value: true });
    }
    endTimeout();
    timeoutRef.current = setTimeout(() => {
      dispatch({ type: 'scrolling', value: false });
    }, SCROLL_COOLDOWN);

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
