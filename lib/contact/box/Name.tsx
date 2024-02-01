import type { FC } from 'react';
import { TTitleProps } from '@brysonandrew/types/dom';
import { motion } from 'framer-motion';

type TProps = TTitleProps;
export const Name: FC<TProps> = ({ title }) => {
  return (
    <motion.div layout='size' className='name'>
      <motion.h4 layout className='name-text'>
        {title}
      </motion.h4>
    </motion.div>
  );
};
