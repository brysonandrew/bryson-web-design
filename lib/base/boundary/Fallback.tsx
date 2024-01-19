import styled from '@emotion/styled';
import type { FC } from 'react';

const Root = styled.section``;

export type TFallbackProps = {
  error: Error;
  reset: () => void;
};
export const Fallback: FC<TFallbackProps> = () => (
  <Root className='w-full' role='alert'>
    <div className='column'>
      <h1 className='text-l'>Something went wrong</h1>
    </div>
  </Root>
);
