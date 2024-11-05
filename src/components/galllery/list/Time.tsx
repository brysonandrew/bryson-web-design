import { formateShortDate } from '@brysonandrew/utils-format';
import { cx } from 'class-variance-authority';
import { motion } from 'framer-motion';
import type { FC } from 'react';

type TProps = { time?: Date };
export const Time: FC<TProps> = ({ time }) => {
  return (
    <motion.h6
      initial={false}
      className={cx(
        'relative text-right shrink-0 text-left text-lg md:text-xl',
      )}
      layout='position'
    >
      {formateShortDate(time)}
    </motion.h6>
  );
};
