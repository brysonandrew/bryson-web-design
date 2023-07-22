import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import type { TChildren } from '../../types';
import { Footer } from './footer';
import { Header } from './header';
import { HeaderOffset } from '../spaces/HeaderOffset';
import { useProjectsRedirect } from '@hooks/router/useProjectsRedirect';
import { useCurrProject } from '@hooks/params/useCurrProject';

const Root = styled(motion.div)``;
const Content = styled(motion.div)``;

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  useProjectsRedirect();
  const currProject = useCurrProject();
  const isProject = Boolean(currProject);
  return (
    <Root className='relative text-black-04 z-10 overflow-x-hidden'>
      {!isProject && <Header />}
      <Content className='relative z-0'>
        <HeaderOffset />
        {children}
      </Content>
      {!isProject && <Footer />}
    </Root>
  );
};
