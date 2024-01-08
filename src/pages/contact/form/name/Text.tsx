import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import type { FC } from 'react';

const Root = styled.h4``;

type TProps = {
  children: TChildren;
};
export const Text: FC<TProps> = ({ children }) => {
  return (
    <Root className='text-2xl text-g-tb whitespace-nowrap capitalize'>
      {children}
    </Root>
  );
};
