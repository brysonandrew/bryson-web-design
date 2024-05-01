import {
  TAnimationProps,
  TTarget,
  TTransition,
  TVariant,
} from '@brysonandrew/motion/config';

export const resolveRotateXPresence = (
  origin: '100%' | '-100%',
  transition: TTransition
): TAnimationProps => {
  const initial: TTarget = {
    opacity: 1,
    y: origin,
    rotateX: 45,
  };
  const animate: TVariant = {
    opacity: 1,
    y: 0,
    rotateX: 0,
  };
  return {
    initial,
    animate,
    exit: initial,
    transition: {
      ease: 'easeInOut',
      ...transition,
    },
  };
};
