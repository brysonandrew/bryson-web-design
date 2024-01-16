import styled from '@emotion/styled';
import type { FC } from 'react';
import { TTitleProps } from '@lib/types/dom';

const Root = styled.div``;

type TProps = TTitleProps;
export const Name: FC<TProps> = ({ title }) => {
  return (
    <Root className='relative flex shrink-0 w-full pt-1 pb-4 pl-0 justify-center md:(w-37 pb-2 pl-6 justify-start)'>
      <div className='inline-flex'>
        <h4 className='text-2xl  whitespace-nowrap capitalize'>
          {title}
        </h4>
      </div>
    </Root>
  );
};
