import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as __Link } from 'react-router-dom';
import { Title } from './Title';
import { useMoveSound } from 'lib/hooks/sounds/useMoveSound';
import { useHoverKey } from 'lib/cursor/hooks/useHoverKey';
import { BIG_CURSOR_KEY } from 'lib/cursor/switch/config';

const _Link = styled(motion(__Link))``;

export const Link: FC = () => {
  const { handlers } = useHoverKey(BIG_CURSOR_KEY, 'home');

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
    </_Link>
  );
};
