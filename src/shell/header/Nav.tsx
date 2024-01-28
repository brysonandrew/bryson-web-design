import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Main } from './main';
import { Pages } from './pages';
import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { resolvePresence } from '@app/animation';

const Root = styled(motion.nav)``;

export const Nav: FC = () => {
  const animation = resolvePresence(
    { y: '-100%' },
    { y: '0%' },
  );

  return (
    <Root
      className='relative row-start-space w-full px-4 pt-3.5 md:px-6 md:pt-4 z-10'
      {...(!isMobile ? animation : {})}
    >
      <Main />
      <Pages />
    </Root>
  );
};
