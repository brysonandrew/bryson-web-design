import styled from '@emotion/styled';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

type TProps = HTMLMotionProps<'h4'> & {
  classValue?: ClassValue;
};
export const Sub: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <motion.h4
    className={clsx(
      'relative top-0 left-0 text-secondary leading-none',
      classValue,
    )}
    style={style}
    {...props}
  >
    {children}
  </motion.h4>
);
