import { Cross } from '@components/icons/Cross';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { HEADER_SIZE } from './gallery/sections/constants';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { HOVER_BLUE_GLOW_PROPS_SM } from '@pages/index/constants';

export const Close: FC = () => {
  const handleOnSound = useOffSound();

  return (
    <motion.div
      className='absolute top-10 right-9 lg:right-18 flex items-center justify-between z-10'
      style={{ height: HEADER_SIZE }}
      {...HOVER_BLUE_GLOW_PROPS_SM}
    >
      <motion.div
        className={clsx(
          'absolute left-1/2 top-1/2 w-10 h-10 rounded-full bg-black-dark',
        )}
        style={{ x: '-50%', y: '-50%' }}
      />
      <Link
        className='relative p-5 rounded-full cursor-pointer'
        to='/showcase'
        onClick={handleOnSound}
      >
        <Cross />
      </Link>
    </motion.div>
  );
};
