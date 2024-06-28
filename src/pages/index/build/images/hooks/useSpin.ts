import { useEffect, useRef } from 'react';
import {
  useMotionValueEvent,
  animate,
  useMotionValue,
  AnimationPlaybackControls,
  useVelocity,
} from 'framer-motion';
import { useScroll } from '@brysonandrew/motion-scroll';
import { isDefined } from '@brysonandrew/utils';

export const useSpin = () => {
  const animateRef =
    useRef<AnimationPlaybackControls | null>(null);
  const { scroll } = useScroll();
  const spin = useMotionValue(0);
  const yVelocity = useVelocity(scroll.y);

  useMotionValueEvent(yVelocity, 'change', (velocity) => {
    if (spin.isAnimating()) {
      animateRef.current?.stop();
    }

    if (velocity === 0) {
      const spinValue = spin.get();
      const previousSpinValue = spin.getPrevious();
      if (!isDefined(previousSpinValue)) return;
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
  });

  return spin;
};
