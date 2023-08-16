import { DURATION } from '@constants/animation';

export const PARENT_PROPS = {
  initial: 'initial',
  animate: 'animate',
  whileHover: 'hover',
  exit: 'exit',
};

export const resolveParentProps = (
  isOtherHover?: boolean,
) => ({
  ...PARENT_PROPS,
  animate: isOtherHover ? 'dim' : 'animate',
  whileHover: 'hover',
});

export const EFFECT_ANIMATE_TRANSITION = {
  ease: 'easeIn',
  duration: DURATION ? DURATION + 0.08 : DURATION,
  delay: 0.08,
};

export const EFFECT_HOVER_TRANSITION = {
  ease: 'linear',
  duration: DURATION,
  delay: 0,
};
