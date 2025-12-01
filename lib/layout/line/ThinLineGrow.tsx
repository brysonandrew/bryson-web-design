import { motion } from 'framer-motion';
import { FC } from 'react';
import { ThinLine } from './ThinLine';
import { cx } from 'class-variance-authority';
import { TClassValueProps } from '@brysonandrew/config-types/dom/main';
import {
  PRESENCE_SCALE_X,
  MOTION_CONFIG,
} from '@brysonandrew/motion-config-constants';

type TProps = { delay?: number } & TClassValueProps;
export const ThinLineGrow: FC<TProps> = ({
  delay = 0,
  classValue,
}) => {
  return (
    <motion.div
      className={cx('opacity-20', classValue)}
      {...PRESENCE_SCALE_X}
      {...{
        ...MOTION_CONFIG.transition,
        delay,
      }}
    >
      <ThinLine />
    </motion.div>
  );
};
