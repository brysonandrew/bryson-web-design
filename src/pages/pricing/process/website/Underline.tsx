import type { FC } from 'react';
import styled from '@emotion/styled';
import { cx } from 'class-variance-authority';

const Root = styled.div``;

type TProps = {
  isDouble?: boolean;
  height?: 'h-0.5' | 'h-0.25' | 'h-px';
  color?: 'bg-white' | 'bg-gray';
};
export const Underline: FC<TProps> = ({
  isDouble,
  height = 'h-0.5',
  color = 'bg-white',
}) => {
  return (
    <Root
      className={cx(
        'absolute left-0 -bottom-2 w-full',
        height,
        color,
      )}
    >
      {isDouble && (
        <div
          className={cx(
            'absolute h-px left-0 -bottom-1 w-full',
            color,
          )}
        />
      )}
    </Root>
  );
};
