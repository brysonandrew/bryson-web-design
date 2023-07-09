import { Space16 } from '@components/spaces/Space16';
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
      <Space16 />
      <h1 className='text-l'>Something went wrong</h1>
    </div>
  </Root>
);
