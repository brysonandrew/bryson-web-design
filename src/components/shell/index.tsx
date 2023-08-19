import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import type { TChildren } from '../../types';
import { Footer } from './footer';
import { Header } from './header';
import { useProjectsRedirect } from '@hooks/router/useProjectsRedirect';
import { useCurrProject } from '@hooks/params/useCurrProject';
import { P32Y } from '@components/space/P32Y';

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
    <Root className='relative overflow-x-hidden z-10'>
      {!isProject && <Header />}
      <P32Y />
      <Content className='relative z-0'>{children}</Content>
      {!isProject && <Footer />}
    </Root>
  );
};
