import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { Decoration } from './Decoration';
import { useContext } from '@state/Context';
import { useSelectedItem } from '@pages/showcase/useSelectedItem';
import { Nav } from './Nav';

const Root = styled(motion.header)``;

export const Header: FC = () => {
  const { isScroll } = useContext();
  const selectedItem = useSelectedItem();
  const isSelectedItem = Boolean(selectedItem);

  const isShown = !isScroll && !isSelectedItem;

  return (
    <Root className='fixed top-0 left-0 w-full h-0 z-10'>
      <AnimatePresence>
        {isShown ? (
          <Nav key='NAV' />
        ) : (
          <Decoration key='DECORATION' />
        )}
      </AnimatePresence>
    </Root>
  );
};
