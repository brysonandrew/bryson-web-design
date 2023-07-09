import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import type { TChildren } from '../../types';
import { Footer } from './footer';
import { Header } from './header';
import { HeaderOffset } from '../spaces/HeaderOffset';
import { useProjectsRedirect } from '@hooks/router/useProjectsRedirect';

const Root = styled(motion.div)``;
const Content = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  useProjectsRedirect();

  return (
    <Root className='relative text-black-04 z-10 overflow-x-hidden'>
      <Header />
      <Content className='relative'>
        <HeaderOffset />
        {children}
      </Content>
      <Footer />
    </Root>
  );
};
