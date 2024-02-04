import { motion } from 'framer-motion';
import {
  MOTION_CONFIG,
  PRESENCE_SCALE_X,
} from '@brysonandrew/animation';
import { FC } from 'react';
import { ThinLine } from '.';
import clsx from 'clsx';
import { TClassValueProps } from '@brysonandrew/config-types/dom/main';

type TProps = { delay?: number } & TClassValueProps;
export const ThinLineGrow: FC<TProps> = ({
  delay = 0,
  classValue,
}) => {
  return (
    <motion.div
      className={clsx( classValue)}
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
