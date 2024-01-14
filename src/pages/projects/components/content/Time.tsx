import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

type TProps = { time?: Date };
export const Time: FC<TProps> = ({ time }) => {
  return (
    <motion.h6
      className={clsx(
        'relative text-right shrink-0 text-left text-g-tb text-lg md:text-xl',
      )}
      layout
    >
      {typeof time === 'undefined'
        ? 'Present'
        : new Intl.DateTimeFormat('en-UK', {
            month: 'short',
            year: 'numeric',
          }).format(time)}
    </motion.h6>
  );
};
