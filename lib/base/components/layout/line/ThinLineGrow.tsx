import { motion } from 'framer-motion';
import { MOTION_CONFIG } from '@brysonandrew/animation';
import { FC } from 'react';
import { ThinLine } from '.';
import clsx from 'clsx';
import { TClassValueProps } from '@brysonandrew/types/dom/main';

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
      <ThinLine classValue='via-current' />
    </motion.div>
  );
};
