import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { type FC } from 'react';
import type { TChildren } from '../../types';
import { BlindersOut } from '../blinders/BlindersOut';
import { Footer } from './footer';
import { Header } from './header';
import { HeaderOffset } from '../spaces/HeaderOffset';
import { useContext } from '@state/Context';
import { Decoration } from './header/Decoration';

const Root = styled(motion.div)``;
const Content = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  const { isInit, isScroll } = useContext();
  const isShown = !isInit && !isScroll;

  return (
    <Root className='relative text-black-dark-04 overflow-hidden z-10'>
      <AnimatePresence mode='wait'>
        {isShown ? (
          <Header key='HEADER' />
        ) : (
          <Decoration key='DECORATION' />
        )} 
      </AnimatePresence>
      <AnimatePresence>
        <Content
          className='relative bg-current'
          style={{
            minHeight: '100vh',
          }}
        >
          <HeaderOffset />
          {children}
          <BlindersOut />
        </Content>
      </AnimatePresence>
      <Footer />
    </Root>
  );
};
