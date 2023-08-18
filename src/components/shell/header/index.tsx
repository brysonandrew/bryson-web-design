import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { useContext } from '@state/Context';
import { Nav } from './Nav';
import { FadeDown } from '@components/vertical-fade/FadeDown';
import { SCROLL_DECORATION_PRESENCE } from '@constants/animation';

const Root = styled(motion.header)``;

export const Header: FC = () => {
  const { isScroll } = useContext();

  return (
    <Root className='fixed top-0 left-0 w-full h-0 z-10'>
      <AnimatePresence initial={false} mode='sync'>
        {isScroll ? (
          <FadeDown classValue='h-32' {...SCROLL_DECORATION_PRESENCE} />
        ) : (
          <Nav key='NAV' />
        )}
      </AnimatePresence>
    </Root>
  );
};
