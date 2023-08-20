import type { FC } from 'react';
import { Offline as Icon } from '@components/icons/network/Offline';
import { P1 } from '@components/space/P1';
import { motion } from 'framer-motion';

export const Offline: FC = () => {
  return (
    <motion.div
      layout
      className='relative text-color-3 px-6 flex uppercase z-10'
    >
      <Icon />
      <P1 />
      <p className='row'>
        <span>You are</span>
        <P1 />
        <strong>offline</strong>
      </p>
    </motion.div>
  );
};
