import type { FC } from 'react';
import {
  DURATION,
  MOTION_CONFIG,
  PRESENCE_Y_SHIFT,
} from '@brysonandrew/animation/config/constants';
import { motion } from 'framer-motion';
import { TClassValueProps } from '@brysonandrew/base/types/dom/main';
import clsx from 'clsx';
import { TDivMotionProps } from '@brysonandrew/base/types/dom/motion';

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
        delay: (staggerIndex * DURATION) / 4,
        ...MOTION_CONFIG,
      }}
      {...PRESENCE_Y_SHIFT}
      {...props}
    />
  );
};
