import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Main } from './main';
import { Pages } from './pages';
import { FC } from 'react';
import { useContext } from '@state/Context';
import { isMobile } from 'react-device-detect';

const Root = styled(motion.nav)``;

export const Nav: FC = () => {
  const { isInit, isScrollStart } = useContext();

  const animation = {
    initial:
      isInit || isScrollStart ? { y: '-100%' } : false,
    animate: {
      y: '0%',
    },
    exit: { y: '-100%' },
  };

  return (
    <Root
      className='relative row-start-space w-full px-4 py-3.5 md:px-6 md:py-4'
      {...(!isMobile ? animation : {})}
    >
      <Main />
      <Pages />
    </Root>
  );
};
