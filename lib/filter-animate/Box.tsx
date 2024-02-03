import { TDivMotionProps } from '@brysonandrew/config/types/dom/motion';
import {
  TChildren,
  TClassValueProps,
} from '@brysonandrew/config/types/dom/main';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

type TProps = TDivMotionProps &
  TClassValueProps & {
    children?: TChildren;
  };
export const Box: FC<TProps> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <motion.div
      className={clsx('relative', classValue)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
