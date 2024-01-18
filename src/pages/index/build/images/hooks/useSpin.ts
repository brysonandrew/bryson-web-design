import { useRef } from 'react';
import {
  useMotionValueEvent,
  animate,
  useMotionValue,
  AnimationPlaybackControls,
} from 'framer-motion';
import { useScroll } from '@lib/context/scroll/useScroll';

export const useSpin = () => {
  const animateRef =
    useRef<AnimationPlaybackControls | null>(null);
  const { scroll } = useScroll();
  const spin = useMotionValue(0);

  useMotionValueEvent(
    scroll.y,
    'velocityChange',
    (velocity) => {
      if (spin.isAnimating()) {
        animateRef.current?.stop();
      }

      if (velocity === 0) {
        const spinValue = spin.get();
        const previousSpinValue = spin.getPrevious();

        const spinDelta = spinValue - previousSpinValue;

        animateRef.current = animate(spin, 0, {
          type: 'inertia',
          restDelta: 0,
          velocity: spinDelta * 10,
        });
      } else {
        const prev = spin.get();
        const next = prev + velocity * 0.00002;
        spin.set(next, false);
      }
    },
  );

  return spin;
};
