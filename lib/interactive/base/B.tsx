import clsx from 'clsx';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { TButtonMotionProps } from '@brysonandrew/config-types';
import { TInteractiveProps } from '@brysonandrew/config-types/css/interactive';

export type TBProps = TButtonMotionProps &
  TInteractiveProps;
export const B: FC<TBProps> = ({
  classValue,
  children,
  shape = 'interactive-rect',
  look = 'interactive-bg-backdrop-border-04',
  ...props
}) => {
  return (
    <motion.button
      type='button'
      className={clsx(
        'interactive',
        look,
        shape,
        classValue,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
