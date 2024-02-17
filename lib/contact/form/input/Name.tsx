import type { FC } from 'react';
import { TTitleProps } from '@brysonandrew/config-types/dom';
import { motion } from 'framer-motion';
import { useApp } from '@brysonandrew/app';

type TProps = TTitleProps;
export const Name: FC<TProps> = ({ title }) => {
  const { COLOR } = useApp();
  return (
    <motion.div layout='size' className='_contact_name'>
      <motion.h4
        layout
        className='_contact_name-text'
        style={{ color: COLOR.accent }}
      >
        {title}
      </motion.h4>
    </motion.div>
  );
};
