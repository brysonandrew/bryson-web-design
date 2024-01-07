import { TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export const Cost: FC<
  PropsWithChildren<TClassValueProps>
> = ({ classValue, children }) => {
  return (
    <h5 className={clsx('text-lg', classValue)}>
      {children}
    </h5>
  );
};
