export const PARENT_PROPS = {
  initial: false,
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
  duration: 0.28,
  delay: 0.08,
};

export const EFFECT_HOVER_TRANSITION = {
  ease: 'linear',
  duration: 0.2,
  delay: 0,
};
