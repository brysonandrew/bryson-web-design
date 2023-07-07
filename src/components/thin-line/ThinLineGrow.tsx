import { motion } from 'framer-motion';
import { ThinLineGap } from './ThinLineGap';
import { MOTION_CONFIG } from '@constants/animation';

export const ThinLineGrow = () => {
  return (
    <motion.div
      className='flex justify-center items-center overflow-hidden w-full'
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{
        ...MOTION_CONFIG.transition,
        delay: 0,
      }}
    >
      <ThinLineGap />
    </motion.div>
  );
};
