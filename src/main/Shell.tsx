import { Filters } from '../components/Filters';
import type { TChildren } from '@t/index';
import type { FC } from 'react';
import { useStyles } from '@styles/useStyles';
import { Background } from '@components/background';
import { FadeIn } from '@components/fade-in';
import { useScrollControl } from '@hooks/scroll/useScrollControl';
import { useScrollToTop } from '@hooks/scroll/useScrollToTop';

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({ children }) => {
  useStyles();
  useScrollControl();
  useScrollToTop();

  return (
    <>
      <Filters />
      <Background />
      {children}
      <FadeIn />
    </>
  );
};
