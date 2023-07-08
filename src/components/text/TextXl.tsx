import styled from '@emotion/styled';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const Root = styled(motion.h3)``;

type TProps = HTMLMotionProps<'h3'> & {
  classValue?: ClassValue;
};
export const TextXl: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <Root className={clsx('text-xl', classValue)} {...props}>
    {children}
  </Root>
);
