import { motion } from 'framer-motion';
import { ThinLineGap } from './ThinLineGap';
import { MOTION_CONFIG } from '@constants/animation';
import { FC } from 'react';

type TProps = { delay?: number };
export const ThinLineGrow: FC<TProps> = ({ delay = 0 }) => {
  return (
    <motion.div
      className='center overflow-hidden w-full'
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{
        ...MOTION_CONFIG.transition,
        delay,
      }}
    >
      <ThinLineGap />
    </motion.div>
  );
};
