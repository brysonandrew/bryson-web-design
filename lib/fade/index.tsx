import styled from '@emotion/styled';
import { TDivMotionProps } from '@brysonandrew/types/dom/motion';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.div)``;

export type TBaseProps = TDivMotionProps & {
  classValue?: ClassValue;
  gradientFrom?: ClassValue;
  gradientTo?: ClassValue;
};
export const Fade: FC<TBaseProps> = ({
  classValue,
  style,
  gradientFrom = 'dark:from-black from-white-9 ',
  gradientTo = 'to-transparent',
  ...props
}) => (
  <Root
    className={clsx(
      'absolute left-0 right-0 w-full pointer-events-none',
      gradientFrom,
      gradientTo,
      classValue,
    )}
    style={style}
    {...props}
  />
);

export * from './FadeDown';
export * from './FadeLeft';
export * from './FadeRight';
export * from './FadeUp';
export * from './shortcuts';
