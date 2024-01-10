import { TClassValueProps } from '@t/index';
import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';

export const End: FC<
  PropsWithChildren<TClassValueProps>
> = ({ classValue, children }) => {
  return (
    <div
      className={clsx(
        'relative center h-20 rounded-tl-sm rounded-tr-sm',
        classValue,
        classValue
          ? 'text-main-inverted'
          : 'text-main',
      )}
    >
      {children}
    </div>
  );
};
