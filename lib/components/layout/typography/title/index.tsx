import { type FC } from 'react';
import { isMobile } from 'react-device-detect';
import { InView } from '@lib/components/layout/InView';
import { Content } from './Content';
import { TContent } from './config';
import { TitleRoot } from '@lib/components/layout/space/TitleRoot';

type TProps = { children: TContent };
export const Title: FC<TProps> = ({ children }) => {
  const content = <Content>{children}</Content>;
  if (isMobile) {
    return content;
  }
  return (
    <InView
      options={{ rootMargin: '-20px', triggerOnce: true }}
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
