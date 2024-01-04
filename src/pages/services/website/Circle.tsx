import { TDivMotionProps } from '@t/dom';
import { TChildren, TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

type TProps = TDivMotionProps &
  TClassValueProps & {
    children: TChildren | number;
    isActive: boolean;
  };
export const Circle: FC<TProps> = ({
  isActive,
  classValue,
  children,
  ...props
}) => {
  return (
    <motion.div
      className={clsx(
        'w-5 h-5 center rounded-full bg-main text-main font-slab text-xs border-gray border',
        isActive && 'glow-teal',
        classValue,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
