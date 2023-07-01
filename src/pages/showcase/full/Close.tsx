import { Cross } from '@components/icons/Cross';
import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { HOVER_TEAL_GLOW_PROPS_SM } from '@pages/index/constants';

export const Close: FC = () => {
  const { pathname } = useLocation();
  const handleOnSound = useOffSound();

  return (
    <motion.div
      className='absolute top-7 right-9 lg:right-18 flex items-center justify-between z-10'
      {...HOVER_TEAL_GLOW_PROPS_SM}
    >
      <motion.div
        className={clsx(
          'absolute left-1/2 top-1/2 w-10 h-10 rounded-full bg-black-dark',
        )}
        style={{ x: '-50%', y: '-50%' }}
      />
      <Link
        className='relative p-5 rounded-full cursor-pointer'
        to={pathname}
        onClick={handleOnSound}
      >
        <Cross />
      </Link>
    </motion.div>
  );
};
