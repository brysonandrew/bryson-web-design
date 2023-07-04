import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import type { TChildren } from '../../types';
import { BlindersOut } from '../blinders/BlindersOut';
import { Footer } from './footer';
import { Header } from './header';
import { HeaderOffset } from '../spaces/HeaderOffset';
import { useShowcaseRedirect } from '../../hooks/router/useShowcaseRedirect';
import { useSmallImages } from '@pages/index/build/images/hooks/useSmallImages';
import { useScrollControl } from '@hooks/scroll/useScrollControl';
import { useScrollToTop } from '@hooks/scroll/useScrollToTop';

const Root = styled(motion.div)``;
const Content = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  useShowcaseRedirect();
  useSmallImages();
  useScrollControl();
  useScrollToTop();

  return (
    <Root className='relative text-black-dark-04 overflow-hidden z-10'>
      <Header />
      <Content
        className='relative'
        style={{
          minHeight: '100vh',
        }}
      >
        <HeaderOffset />
        {children}
        <BlindersOut />
      </Content>
      <Footer />
    </Root>
  );
};
