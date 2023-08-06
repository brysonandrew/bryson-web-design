import { motion } from 'framer-motion';
import { ReactNode, type FC } from 'react';
import { resolvePresence } from '@utils/animation';
import clsx from 'clsx';
import { TClassValueProps } from '@t/index';

type TProps = TClassValueProps & {
  children: ReactNode;
  delay?: number;
  exitDelay?: number;
};
export const Box: FC<TProps> = ({
  classValue,
  children,
  delay = 0,
  exitDelay = 0,
}) => {
  return (
    <motion.div
      layout='position'
      className={clsx(
        'relative font-mono text-color text-xl px-4 py-1 background-color-2',
        classValue,
      )}
      {...resolvePresence(
        {
          opacity: 0,
          transition: {
            duration: 0.4,
            delay: 0 + exitDelay,
          },
        },
        {
          opacity: 1,
          transition: { duration: 0.4, delay: 0 + delay },
        },
      )}
    >
      {children}
    </motion.div>
  );
};
