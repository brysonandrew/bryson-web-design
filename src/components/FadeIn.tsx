import { MOTION_CONFIG } from '@constants/animation';
import { motion } from 'framer-motion';
import { ThinLineGrow } from './thin-line/ThinLineGrow';

export const FadeIn = () => {
  return (
    <motion.div
      className='fixed inset-0 flex items-center justify-center bg-black z-50 pointer-events-none'
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ...MOTION_CONFIG.transition,
        duration: 2,
        delay: 2,
      }}
    >
      <ThinLineGrow key='FADE_IN_THIN_LINE_GROW' />
    </motion.div>
  );
};
