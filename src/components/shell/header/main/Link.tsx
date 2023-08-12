import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as __Link } from 'react-router-dom';
import { Title } from './Title';
import { useHome } from '@hooks/useHome';
import { ThinLine } from '@components/thin-line';
import { useMoveSound } from '@hooks/sounds/useMoveSound';
import { useHoverKey } from '@hooks/useHoverKey';

const Root = styled(motion.div)``;
const _Link = styled(motion(__Link))``;

export const Link: FC = () => {
  const { isHover, handlers } = useHoverKey(
    'big',
    'home',
  );

  const handleResetScroll = useHome();
  const moveSound = useMoveSound();
  const handleClick = () => {
    moveSound();
  };

  return (
    <Root onTap={handleResetScroll}>
      <_Link
        className='relative left-0 cursor-pointer'
        to='/'
        onClick={handleClick}
        whileHover='hover'
        {...handlers}
      >
        <Title />
        <ThinLine classValue='flex absolute bottom-1 left-0' />
      </_Link>
    </Root>
  );
};
