import styled from '@emotion/styled';
import { TMotionDivProps } from '@t/dom';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.div)``;

export type TBaseProps = TMotionDivProps & {
  classValue?: ClassValue;
};
export const VerticalFade: FC<TBaseProps> = ({
  classValue,
  ...props
}) => (
  <Root
    className={clsx(
      'absolute left-0 right-0 w-full dark:from-black from-white pointer-events-none z-10',
      classValue,
    )}
    {...props}
  />
);
