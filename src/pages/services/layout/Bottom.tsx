import { TClassValueProps } from '@t/index';
import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';

export const Bottom: FC<
  PropsWithChildren<TClassValueProps>
> = ({ classValue, children }) => {
  return (
    <div
      className={clsx(
        'center h-2 text-main-inverted',
        classValue,
      )}
    >
      {children}
    </div>
  );
};
