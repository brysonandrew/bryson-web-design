import { Cross } from '@components/icons/Cross';
import type { FC } from 'react';
import {
  Link as _Link,
  useLocation,
} from 'react-router-dom';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { motion } from 'framer-motion';
import { HOVER_TEAL_GLOW_PROPS_SM } from '@pages/index/constants';
import styled from '@emotion/styled';
import { Fill } from '@components/metal/Fill';

const Link = styled(motion(_Link))``;

export const Close: FC = () => {
  const { pathname } = useLocation();
  const handleOnSound = useOffSound();

  return (
    <motion.div className='absolute top-7 right-9 lg:right-18 flex items-center justify-between z-10'>
      <Link
        className='relative p-4 cursor-pointer shadow-teal-02-sm'
        to={pathname}
        onClick={handleOnSound}
        {...HOVER_TEAL_GLOW_PROPS_SM}
      >
        <Fill />
        <Cross classValue='relative' />
      </Link>
    </motion.div>
  );
};
