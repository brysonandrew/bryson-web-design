import styled from '@emotion/styled';
import { TDivMotionProps } from '@brysonandrew/types/dom/motion';
import clsx, { ClassValue } from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.div)``;

export type TBaseProps = TDivMotionProps & {
  classValue?: ClassValue;
};
export const VerticalFade: FC<TBaseProps> = ({
  classValue,
  style,
  ...props
}) => (
  <Root
    className={clsx(
      'absolute left-0 right-0 w-full dark:from-black from-white-9 pointer-events-none',
      classValue,
    )}
    style={style}
    {...props}
  />
);
