import type { FC } from 'react';
import styled from '@emotion/styled';

const Root = styled.div``;

type TProps = { isDouble?: boolean };
export const Underline: FC<TProps> = ({ isDouble }) => {
  return (
    <Root className='absolute h-1 left-0 -bottom-2 w-full bg-white'>
      {isDouble && (
        <div className='absolute h-0.5 left-0 -bottom-1 w-full bg-white' />
      )}
    </Root>
  );
};
