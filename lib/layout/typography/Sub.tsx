import { TClassValue } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

type TProps = HTMLMotionProps<'h4'> & {
  classValue?: TClassValue;
};
export const Sub: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <motion.h4
    className={cx(
      'relative top-0 left-0 text-secondary leading-none',
      classValue,
    )}
    style={style}
    {...props}
  >
    {children}
  </motion.h4>
);
