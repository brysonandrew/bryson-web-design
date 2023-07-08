import { Space12 } from '@components/spaces/Space12';
import { Space4 } from '@components/spaces/Space4';
import { motion } from 'framer-motion';
import type { FC } from 'react';

export const Offline: FC = () => {
  return (
    <motion.div className='relative column'>
      <Space12 />
      <div className='column w-core'>
        <h1 className='++text'>
          You are <strong>offline</strong>
        </h1>
        <Space4 />
        <h2 className='+text-xl text-center'>
          Please check your network connection.
        </h2>
      </div>
    </motion.div>
  );
};
