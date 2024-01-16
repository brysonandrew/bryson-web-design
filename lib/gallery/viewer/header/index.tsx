import { type FC } from 'react';
import styled from '@emotion/styled';
import { Content } from '../../components/content';
import {
  TChildrenProps,
  TDivMotionProps,
} from '@lib/types/dom';
import { TSlugProps } from '@lib/gallery/config/types';
import { RightHeader } from './RightHeader';
import { PROJECT_ITEMS_RECORD } from '../../../../app/gallery/items';

const Root = styled.header``;

type TProps = TDivMotionProps &
  TSlugProps &
  Partial<TChildrenProps>;
export const Header: FC<TProps> = ({ slug, ...props }) => {
  return (
    <Root className='relative left-0 top-0 row w-full z-30'>
      <Content
        isHover
        slug={slug}
        rightHeader={
          <RightHeader
            pricing={PROJECT_ITEMS_RECORD[slug].pricing}
          />
        }
        {...props}
      />
    </Root>
  );
};
