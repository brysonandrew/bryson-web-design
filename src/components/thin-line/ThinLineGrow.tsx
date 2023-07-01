import { motion } from 'framer-motion';
import { ThinLineGap } from './ThinLineGap';

export const ThinLineGrow = () => {
  return (
    <motion.div
      className='flex justify-center items-center overflow-hidden w-full '
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
    >
      <ThinLineGap />
    </motion.div>
  );
};
