import { type FC } from 'react';
import { TitleSpace } from '@lib/components/layout/space/TitleSpace';
import { Replacer } from '@lib/in-view/Replacer';
import { Content } from './Content';
import { TChildrenString } from '@lib/types/dom';

type TProps = TChildrenString;
export const Title: FC<TProps> = ({ children }) => {
  return (
    <Replacer Space={TitleSpace}>
      <Content>{children}</Content>
    </Replacer>
  );
};
