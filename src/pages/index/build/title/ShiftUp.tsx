import type { FC } from 'react';
import {
  DURATION,
  MOTION_CONFIG,
  PRESENCE_Y_SHIFT,
} from '@constants/animation';
import { motion } from 'framer-motion';
import { TClassValueProps } from '@t/index';
import { TDivMotionProps } from '@t/dom';
import clsx from 'clsx';

type TProps = TClassValueProps &
  TDivMotionProps & { staggerIndex?: number };
export const ShiftUp: FC<TProps> = ({
  classValue,
  staggerIndex = 0,
  ...props
}) => {
  return (
    <motion.div
      className={clsx(classValue)}
      transition={{
        delay: staggerIndex * DURATION/4,
        ...MOTION_CONFIG,
      }}
      {...PRESENCE_Y_SHIFT}
      {...props}
    />
  );
};
