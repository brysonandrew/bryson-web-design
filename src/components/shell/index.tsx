import { PRESENCE_OPACITY_SHIFT } from '@constants/animation';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { type FC } from 'react';
import type { TChildren } from '../../types';
import { BlindersOut } from '../blinders/BlindersOut';
import { Footer } from './footer';
import { Header } from './header';
import { HeaderOffset } from '../spaces/HeaderOffset';
import { useContext } from '@state/Context';

const Root = styled(motion.div)``;
const Content = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  const { isInit, isScroll } = useContext();
  const isShown = !isInit && !isScroll;

  return (
    <Root className='relative text-black-dark-04 px-4 overflow-hidden z-10'>
      <AnimatePresence>
        {isShown && <Header />}
      </AnimatePresence>
      <AnimatePresence>
        <Content
          className='relative bg-current'
          style={{
            minHeight: '100vh',
          }}
          {...PRESENCE_OPACITY_SHIFT}
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
