import styled from '@emotion/styled';
import { useContext } from '@state/Context';
import { motion } from 'framer-motion';
import { INIT_ANIMATION } from './constants';
import { Main } from './main';
import { Nav } from './nav';
import { useDetectGPU } from '@react-three/drei';

const Root = styled(motion.header)``;

export const Header = () => {
  const { isInit, isScrollStart } = useContext();
  const { isMobile } = useDetectGPU();

  return (
    <Root
      className='fixed top-0 left-0 flex items-center justify-between w-full px-4 py-3.5 md:px-6 md:py-4 z-50'
      {...((isInit || isScrollStart) && !isMobile
        ? INIT_ANIMATION
        : {})}
    >
      <motion.div className='relative flex items-start justify-between w-full md:items-center'>
        <Main />
        <Nav />
      </motion.div>
    </Root>
  );
};
