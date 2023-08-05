import { motion } from 'framer-motion';
import { ReactNode, type FC } from 'react';
import { resolvePresence } from '@utils/animation';

type TProps = {
  children: ReactNode;
  delay?: number;
  exitDelay?: number;
};
export const Box: FC<TProps> = ({
  children,
  delay = 0,
  exitDelay = 0,
}) => {
  return (
    <motion.div
      className='font-mono text-xl px-10 py-6 background-color-2'
      {...resolvePresence(
        {
          opacity: 0,
          transition: { duration: 0.4, delay: 0 + exitDelay },
        },
        {
          opacity: 1,
          transition: { duration: 1, delay: 0 + delay },
        },
      )}
    >
      {children}
    </motion.div>
  );
};
