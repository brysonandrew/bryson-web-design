import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link as __Link } from 'react-router-dom';
import { Title } from './Title';
import { useOffSound } from '@hooks/sounds/useOffSound';
import { useHome } from '@hooks/useHome';

const Root = styled(motion.div)``;
const _Link = styled(motion(__Link))``;

export const Link: FC = () => {
  const handleResetScroll = useHome();
  const handleClick = useOffSound();

  return (
    <Root onTap={handleResetScroll}>
      <_Link
        className='relative left-0 flex flex-col cursor-pointer'
        to='/'
        onTap={handleClick}
        whileHover='hover'
      >
        <Title />
      </_Link>
    </Root>
  );
};
