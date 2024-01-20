import { type FC } from 'react';
import { TitleSpace } from '@brysonandrew/base/components/layout/space/TitleSpace';
import { Replacer } from '@brysonandrew/in-view/Replacer';
import { Content } from './Content';
import { TChildrenString } from '@brysonandrew/base/types/dom';

type TProps = TChildrenString;
export const Title: FC<TProps> = ({ children }) => {
  return (
    <Replacer Space={TitleSpace}>
      <Content>{children}</Content>
    </Replacer>
  );
};
