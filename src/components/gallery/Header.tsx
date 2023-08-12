import { useState, type FC } from 'react';
import { Close } from './buttons/Close';
import styled from '@emotion/styled';
import { Content } from '../../pages/projects/list/item/content';
import { TSlugProps } from '../../pages/projects/config';
import { TMotionDivProps } from '@t/dom';
import { TChildrenProps } from '@t/index';
import { useOffSound } from '@hooks/sounds/useOffSound';

const Root = styled.header``;

type TProps = TMotionDivProps &
  TSlugProps & {
    isReady: boolean;
  } & Partial<TChildrenProps>;
export const Header: FC<TProps> = ({
  isReady,
  slug,
  ...props
}) => {
  const handleOffSound = useOffSound();
  const handleClose = () => {
    handleOffSound();
  };
  return (
    <Root className='relative left-0 top-0 row w-full z-30'>
      <Content
        isHeader
        slug={slug}
        rightHeader={
          <Close key='CLOSE' onClick={handleClose} />
        }
        {...props}
      />
    </Root>
  );
};
