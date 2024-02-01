import { resolveGradient } from '@brysonandrew/color-gradient';
import { TDivMotionProps } from '@brysonandrew/types/dom/motion';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

export type TFadeProps = TDivMotionProps & {
  from?: string;
  to?: string;
};
export const Fade: FC<TFadeProps> = ({
  classValue,
  style,
  from = 'var(--black)',
  to = 'var(--transparent)',
  ...props
}) => {
  const backgroundImage = resolveGradient({
    name: 'linear-gradient',
    parts: ['to right', from, to],
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

export * from './FadeDown';
export * from './FadeFill';
export * from './FadeLeft';
export * from './FadeRight';
export * from './FadeUp';
