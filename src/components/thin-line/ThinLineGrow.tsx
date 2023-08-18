import { motion } from 'framer-motion';
import { MOTION_CONFIG } from '@constants/animation';
import { FC } from 'react';
import { ThinLine } from '.';
import clsx from 'clsx';
import { TClassValueProps } from '@t/index';

type TProps = { delay?: number } & TClassValueProps;
export const ThinLineGrow: FC<TProps> = ({
  delay = 0,
  classValue,
}) => {
  return (
    <motion.div
      className={clsx(
        'column overflow-hidden',
        classValue,
      )}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{
        ...MOTION_CONFIG.transition,
        delay,
      }}
    >
      <ThinLine classValue='shrink-0 w-3/4' />
    </motion.div>
  );
};
