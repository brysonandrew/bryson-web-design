import type { FC } from 'react';
import clsx from 'clsx';
import {
  TClassValueProps,
  TElementProps,
} from '@brysonandrew/config-types';

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
