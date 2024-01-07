import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as __Link } from 'react-router-dom';
import { Title } from './Title';
import { ThinLine } from '@components/line';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { useHoverKey } from '@hooks/cursor/useHoverKey';

const _Link = styled(motion(__Link))``;

export const Link: FC = () => {
  const { handlers } = useHoverKey('big', 'home');

  const moveSound = useMoveSound();
  const handleClick = () => {
    moveSound();
  };

  return (
    <_Link
      className='relative left-0 cursor-pointer'
      to='/'
      onClick={handleClick}
      whileHover='hover'
      {...handlers}
    >
      <Title />
      <ThinLine classValue='flex absolute bottom-1 left-0 via-current' />
    </_Link>
  );
};
