import { useMotionValueEvent } from 'framer-motion';
import { useScrollToTop } from './useScrollToTop';
import { useTimeoutRef } from '@hooks/window/useTimeoutRef';
import { useContext } from '@context/scroll/Context';

export const SCROLL = 80;
export const SCROLL_COOLDOWN = 200;
let render = 0;
export const useScrollControl = () => {
  const { isScroll, isScrolling, scroll, dispatch } =
    useContext();
  console.log('cont: ' + ++render);
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
  useMotionValueEvent(scroll.y, 'change', handleUpdate);
};
