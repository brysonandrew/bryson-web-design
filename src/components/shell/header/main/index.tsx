import styled from '@emotion/styled';
import { useHome } from '@hooks/useHome';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from './Link';
import { Title } from './Title';
import { Fill } from '@components/metal/Fill';

const Root = styled(motion.div)``;

const Background = styled(motion.div)``;

export const Main: FC = () => {
  const { pathname } = useLocation();
  const handleTap = useHome();

  return (
    <Root
      className='relative flex flex-col relative grow'
      onTap={handleTap}
    >
      <Background
        className='absolute'
        style={{
          rotateZ: '76deg',
          left: -100,
          top: -630,
          width: 600,
          height: 800,
        }}
      >
        <Fill />
      </Background>
      <>{pathname === '/' ? <Title /> : <Link />}</>
    </Root>
  );
};
