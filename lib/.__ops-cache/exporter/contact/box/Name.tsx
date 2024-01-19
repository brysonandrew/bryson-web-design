import styled from '@emotion/styled';
import type { FC } from 'react';
import { TTitleProps } from '@brysonandrew/base/types/dom';

const Root = styled.div``;

type TProps = TTitleProps;
export const Name: FC<TProps> = ({ title }) => {
  return (
    <Root className='relative flex justify-center shrink-0 w-full pt-1 pb-4 pl-0 md:(w-40 pb-2 pl-6 justify-start)'>
      <h4 className='inline-flex title-main whitespace-nowrap'>
        {title}
      </h4>
    </Root>
  );
};
