import styled from '@emotion/styled';
import { type FC } from 'react';
import type { TChildren } from '../../types';
import { Footer } from './footer';
import { Header } from './header';
import { useProjectsRedirect } from '@hooks/router/useProjectsRedirect';
import { useCurrProject } from '@hooks/params/useCurrProject';
import { P32Y } from '@components/space/P32Y';
import { P24Y } from '@components/space/P24Y';

const Root = styled.div``;
const Content = styled.div``;

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
      <P24Y />
      <Content className='relative z-0'>{children}</Content>
      {!isProject && <Footer />}
    </Root>
  );
};
