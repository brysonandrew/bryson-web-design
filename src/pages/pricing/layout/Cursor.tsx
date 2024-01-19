import type { FC } from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import {
  TClassValueProps,
  TElementProps,
} from '@brysonandrew/base/types';

const Root = styled.div``;

type TProps = TElementProps & TClassValueProps;
export const Cursor: FC<TProps> = ({
  title,
  classValue,
  ...props
}) => {
  return (
    <>
      Inquire about the
      {
        <span
          className={clsx(
            'px-1 mx-1 title-pricing',
            classValue,
          )}
          {...props}
        >
          {title}
        </span>
      }
      package
    </>
  );
};
