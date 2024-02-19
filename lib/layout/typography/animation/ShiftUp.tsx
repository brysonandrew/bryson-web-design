import type { FC } from 'react';
import {
  MOTION_CONFIG,
  DURATION,
  PRESENCE_OPACITY_UP_Y,
} from '@brysonandrew/animation';
import { motion } from 'framer-motion';
import { TClassValueProps } from '@brysonandrew/config-types/dom/main';
import clsx from 'clsx';
import { TDivMotionProps } from '@brysonandrew/config-types/dom/motion';

type TProps = TClassValueProps &
  TDivMotionProps & {
    staggerIndex?: number;
    baseDuration?: number;
  };
export const ShiftUp: FC<TProps> = ({
  classValue,
  baseDuration = 0,
  staggerIndex = 0,
  ...props
}) => {
  return (
    <motion.div
      className={clsx('fade-in', classValue)}
      transition={{
        duration:
          baseDuration + (staggerIndex * DURATION * 2) / 4,
        ...MOTION_CONFIG,
      }}
      {...PRESENCE_OPACITY_UP_Y}
      {...props}
    />
  );
};
