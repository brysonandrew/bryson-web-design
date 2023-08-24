import {
  AnimationPlaybackControls,
  animate,
  useMotionValueEvent,
} from 'framer-motion';
import { useScrollToTop } from './useScrollToTop';
import { useTimeoutRef } from '@hooks/window/useTimeoutRef';
import { useContext } from '@context/scroll/Context';
import { useRef } from 'react';

export const SCROLL = 200;
export const SCROLL_COOLDOWN = 200;
export const useScrollControl = () => {
  const { isScroll, isScrolling, scroll, dispatch } =
    useContext();
  const { timeoutRef, endTimeout } = useTimeoutRef();
  // const animateRef =
  //   useRef<AnimationPlaybackControls | null>(null);

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
      // animateRef.current = animate(scroll.y, 100, {
      //   type: 'inertia',
      //   min: 0,
      //   max: 0,
      //   power: 0,
      //   // modifyTarget: (v) => 0,
      // });
    }
  };
  useScrollToTop(handleUpdate);
  useMotionValueEvent(scroll.y, 'change', handleUpdate);
};
