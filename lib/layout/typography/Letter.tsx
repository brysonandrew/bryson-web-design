import { TClassValue } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';

type TProps = HTMLMotionProps<'h5'> & {
  classValue?: TClassValue;
};
export const Letter: FC<TProps> = ({
  classValue,
  style,
  children,
  ...props
}) => (
  <motion.h5
    className={cx(
      'text-secondary text-left text-lg tracking-wide px-3 sm:text-2xl md:text-3xl lg:text-3.5xl xl:text-4xl',
      classValue,
    )}
    style={style}
    {...props}
  >
    {children}
  </motion.h5>
);
