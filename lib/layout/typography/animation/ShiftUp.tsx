import type { FC } from 'react';
import {
  MOTION_CONFIG,
  DURATION,
  PRESENCE_OPACITY_UP_Y,
} from '@brysonandrew/animation';
import { motion } from 'framer-motion';
import { TClassValueProps } from '@brysonandrew/types/dom/main';
import clsx from 'clsx';
import { TDivMotionProps } from '@brysonandrew/types/dom/motion';

type TProps = TClassValueProps &
  TDivMotionProps & {
    staggerIndex?: number;
    baseDelay?: number;
  };
export const ShiftUp: FC<TProps> = ({
  baseDelay = 0,
  classValue,
  staggerIndex = 0,
  ...props
}) => {
  return (
    <motion.div
      className={clsx(classValue)}
      transition={{
        delay:
          baseDelay + (staggerIndex * DURATION * 2) / 4,
        ...MOTION_CONFIG,
      }}
      {...PRESENCE_OPACITY_UP_Y}
      {...props}
    />
  );
};
