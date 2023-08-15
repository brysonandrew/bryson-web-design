import styled from '@emotion/styled';
import type { FC } from 'react';
import { Text } from './Text';
import { TTitleProps } from '@t/index';

const Root = styled.div``;

type TProps = TTitleProps;
export const Name: FC<TProps> = ({ title }) => {
  return (
    <Root className='relative flex shrink-0 w-full pt-1 pb-4 pl-0 justify-center md:w-37 md:pb-2 md:pl-6 md:justify-start'>
      <div className='inline-flex'>
        <Text>{title}</Text>
      </div>
    </Root>
  );
};
