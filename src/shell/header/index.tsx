import styled from '@emotion/styled';
import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { Nav } from './Nav';
import { useScroll } from '@brysonandrew/scroll';

const Root = styled.header``;

export const Header: FC = () => {
  const { isScroll } = useScroll();

  return (
    <Root className='fixed top-0 left-0 w-full h-0 z-0'>
      <AnimatePresence initial={false}>
        {!isScroll && <Nav key='NAV' />}
      </AnimatePresence>
    </Root>
  );
};
