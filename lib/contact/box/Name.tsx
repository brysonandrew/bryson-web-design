import styled from '@emotion/styled';
import type { FC } from 'react';
import { TTitleProps } from '@brysonandrew/base/types/dom';

const Root = styled.div``;

type TProps = TTitleProps;
export const Name: FC<TProps> = ({ title }) => {
  return (
    <Root className='name'>
      <h4 className='name-text'>{title}</h4>
    </Root>
  );
};
