import {
  resolveGradient,
  TGradientDirection,
} from '@brysonandrew/color-gradient';
import { TDivMotionProps } from '@brysonandrew/config-types/dom/motion';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

export type TFadeProps = TDivMotionProps & {
  from?: string;
  to?: string;
  direction?: TGradientDirection;
};
export const Fade: FC<TFadeProps> = ({
  classValue,
  style,
  from = 'var(--black)',
  to = 'var(--transparent)',
  direction = 'to right' as TGradientDirection,
  ...props
}) => {
  const backgroundImage = resolveGradient({
    name: 'linear-gradient',
    parts: [direction, from, to],
  });
  return (
    <motion.div
      className={clsx(
        'absolute pointer-events-none',
        classValue,
      )}
      style={{ ...style, backgroundImage }}
      {...props}
    />
  );
};

export * from '@brysonandrew/fade-edge';
export * from './FadeDown';
export * from './FadeFill';
export * from './FadeLeft';
export * from './FadeRight';
export * from './FadeUp';
