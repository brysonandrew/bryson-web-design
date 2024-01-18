import type { FC } from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';

const Root = styled.div``;

type TProps = {
  isDouble?: boolean;
  height?: 'h-0.5' | 'h-0.25' | 'h-px';
  color?: 'bg-white-9' | 'bg-gray';
};
export const Underline: FC<TProps> = ({
  isDouble,
  height = 'h-0.5',
  color = 'bg-white-9',
}) => {
  return (
    <Root
      className={clsx(
        'absolute left-0 -bottom-2 w-full',
        height,
        color,
      )}
    >
      {isDouble && (
        <div
          className={clsx(
            'absolute h-px left-0 -bottom-1 w-full',
            color,
          )}
        />
      )}
    </Root>
  );
};
