import {
  TVariant,
  TVariants,
} from '@brysonandrew/animation/config/types';

export const animateFadeR20px = (
  isAnimate: boolean,
): TVariant => {
  const initial = { opacity: 0, x: -20 };
  const animate = { opacity: 1, x: 0 };

  return isAnimate ? animate : initial;
};

export const resolveFadeRightProps = (
  isAnimate: boolean,
): TVariants => ({
  initial: animateFadeR20px(false),
  animate: animateFadeR20px(isAnimate),
});

export const resolveFadeD20px = (
  isAnimate: boolean,
): TVariant => {
  const animate = { opacity: 0, y: -20 };
  const initial = { opacity: 1, y: 0 };

  return isAnimate ? animate : initial;
};

export const resolveFadeUpProps = (
  isAnimate: boolean,
): TVariants => ({
  initial: resolveFadeD20px(false),
  animate: resolveFadeD20px(isAnimate),
});
