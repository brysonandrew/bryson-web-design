import styled from '@emotion/styled';
import { TDivMotionProps } from '@brysonandrew/types/dom/motion';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.div)``;

export type TFadeProps = TDivMotionProps & {
  from?: `from-${string}`;
  to?: `to-${string}`;
};
export const Fade: FC<TFadeProps> = ({
  classValue,
  style,
  from = 'from-black',
  to = 'to-transparent',
  ...props
}) => (
  <Root
    className={clsx(
      'absolute pointer-events-none',
      from,
      to,
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
