import { type FC } from 'react';
import styled from '@emotion/styled';
import { Content } from '../../list/item/content';
import { TChildrenProps, TDivMotionProps } from '@lib/types/dom';
import { Network } from '@lib/components/base/network';
import { TSlugProps } from '@pages/projects/config/types';
import { RightHeader } from './RightHeader';
import { PROJECT_ITEMS_RECORD } from '../../config/constants/items';

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
      <div className='absolute top-full left-0 translate-y-4'>
        <Network />
      </div>
    </Root>
  );
};
