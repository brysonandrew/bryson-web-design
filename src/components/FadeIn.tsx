import { MOTION_CONFIG } from '@constants/animation';
import { motion } from 'framer-motion';

export const FadeIn = () => {
  return (
    <motion.div
      className='fixed inset-0 flex items-center justify-center bg-black z-50 pointer-events-none'
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ...MOTION_CONFIG.transition,
        duration: 4,
      }}
    />
  );
};
