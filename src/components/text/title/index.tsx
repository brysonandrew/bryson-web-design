import { type FC } from 'react';
import { isMobile } from 'react-device-detect';
import { InView } from '@components/InView';
import type { TChildren } from '@t/index';
import { Content } from './Content';
import { TitleRoot } from '@components/spaces/TitleRoot';

type TProps = { children: TChildren };
export const Title: FC<TProps> = ({ children }) => {
  const content = <Content>{children}</Content>;
  if (isMobile) {
    return content;
  }
  return (
    <InView
      options={{ rootMargin: '-200px', triggerOnce: true }}
    >
      {({ inView }) => {
        if (inView) {
          return content;
        }
        return <TitleRoot />;
      }}
    </InView>
  );
};
