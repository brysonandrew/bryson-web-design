import { useApp } from '@brysonandrew/app';
import {
  TDivMotionProps,
  TClassValueProps,
  TChildren,
} from '@brysonandrew/config-types/dom';
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
  const { BORDER_RADIUS, COLOR } = useApp();

  return (
    <motion.div
      className={clsx(
        'w-5 h-5 center bg-main text-main text-xs border-gray border',
        classValue,
      )}
      style={{
        borderRadius: BORDER_RADIUS.XL,
        color: COLOR.gray,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
