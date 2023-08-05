import { motion } from 'framer-motion';
import { ReactNode, type FC } from 'react';
import { resolvePresence } from '@utils/animation';

type TProps = {
  children: ReactNode;
  delay?: number;
};
export const Box: FC<TProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      className='font-mono text-xl px-10 py-6 background-color-2'
      layout='position'
      {...resolvePresence(
        { opacity: 0 },
        {
          opacity: 1,
          transition: { duration: 1, delay },
        },
      )}
      transition={{ duration: 0 }}
    >
      {children}
    </motion.div>
  );
};
