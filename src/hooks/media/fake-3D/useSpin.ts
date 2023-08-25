import {
  useMotionValueEvent,
  animate,
  useMotionValue,
  AnimationPlaybackControls,
} from 'framer-motion';
import { useScroll } from '@context/scroll';
import { useRef } from 'react';

export const useSpin = () => {
  const animateRef =
    useRef<AnimationPlaybackControls | null>(null);
  const { scroll } = useScroll();
  const spin = useMotionValue(0);

  useMotionValueEvent(
    scroll.y,
    'velocityChange',
    (velocity) => {
      // const scrollValue = spin.get();
      // const previousScrollValue = spin.getPrevious();
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
        const next = prev + velocity * 0.00006;
        spin.set(next, false)
      }
    },
  );

  return spin;
};
