import {
  TResolveParentAnimateConfig,
  TMotionProps,
} from '@brysonandrew/motion/config';
import {
  INITIAL_KEY,
  IDLE_KEY,
  HOVER_KEY,
  EXIT_KEY,
  HOVER_VARIANT,
} from '@brysonandrew/motion-config-constants';

export const resolveParentAnimateConfig = (
  config: TResolveParentAnimateConfig = {}
): TMotionProps => {
  const isHover = config.isHover;

  if (typeof isHover === 'undefined')
    return {
      initial: INITIAL_KEY,
      animate: IDLE_KEY,
      whileHover: HOVER_KEY,
      exit: EXIT_KEY,
    };

  return {
    initial: INITIAL_KEY,
    animate: isHover ? HOVER_VARIANT : IDLE_KEY,
    exit: EXIT_KEY,
  };
};
