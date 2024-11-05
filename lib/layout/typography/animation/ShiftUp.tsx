import type { FC } from 'react';
import { motion } from 'framer-motion';
import { TClassValueProps } from '@brysonandrew/config-types/dom/main';
import { cx } from 'class-variance-authority';
import { TDivMotionProps } from '@brysonandrew/config-types/dom/motion';
import { DURATION, MOTION_CONFIG, PRESENCE_OPACITY_UP_Y } from '@brysonandrew/motion-config-constants';

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
      className={cx('fade-in', classValue)}
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
