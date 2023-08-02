import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { Decoration } from './Decoration';
import { useContext } from '@state/Context';
import { Nav } from './Nav';

const Root = styled(motion.header)``;

export const Header: FC = () => {
  const { isScroll } = useContext();

  return (
    <Root className='fixed top-0 left-0 w-full h-0 z-10'>
      <AnimatePresence initial={false} mode='sync'>
        {isScroll ? (
          <Decoration key='DECORATION' />
        ) : (
          <Nav key='NAV' />
        )}
      </AnimatePresence>
    </Root>
  );
};
