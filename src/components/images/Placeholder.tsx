import { MOTION_CONFIG } from '@constants/animation';
import { TChildren } from '@t/index';
import { motion } from 'framer-motion';
import { FC } from 'react';

type TProps = {
  index: number;
  count: number;
  children?: TChildren;
};
export const Placeholder: FC<TProps> = ({
  index,
  count,
  children,
}) => {
  return (
    <motion.div
      key={`loader-${index}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.1, 0.4, 0.1] }}
      exit={{ opacity: 0 }}
      transition={{
        ...MOTION_CONFIG.transition,
        repeat: Infinity,
        duration: 2,
        delay: (index / count) * 1.5,
      }}
      className='flex items-center justify-center absolute inset-0 w-full bg-baby-blue'
    >
      {children}
    </motion.div>
  );
};
