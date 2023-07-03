import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Main } from './main';
import { Pages } from './pages';
import { useDetectGPU } from '@react-three/drei';
import { FC } from 'react';
import { useContext } from '@state/Context';

const Root = styled(motion.nav)``;

export const Nav: FC = () => {
  const { isInit } = useContext();
  const { isMobile } = useDetectGPU();

  return (
    <Root
      className='relative flex items-start justify-between w-full px-4 py-3.5 md:px-6 md:py-4 md:items-center'
      {...(!isMobile
        ? {
            initial: isInit ? { y: '-100%' } : false,
            animate: {
              y: '0%',
            },
            exit: { y: '-100%' },
          }
        : {})}
    >
      <Main />
      <Pages />
    </Root>
  );
};
