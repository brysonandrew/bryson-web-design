import { formateShortDate } from '@brysonandrew/utils-format';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

type TProps = { time?: Date };
export const Time: FC<TProps> = ({ time }) => {
  return (
    <motion.h6
      initial={false}
      className={clsx(
        'relative text-right shrink-0 text-left text-lg md:text-xl',
      )}
      layout='position'
    >
      {formateShortDate(time)}
    </motion.h6>
  );
};
