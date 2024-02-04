import type { FC } from 'react';
import { TTitleProps } from '@brysonandrew/config-types/dom';
import { motion } from 'framer-motion';

type TProps = TTitleProps;
export const Name: FC<TProps> = ({ title }) => {
  return (
    <motion.div layout='size' className='_contact_name'>
      <motion.h4 layout className='_contact_name-text'>
        {title}
      </motion.h4>
    </motion.div>
  );
};
