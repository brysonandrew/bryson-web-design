import { TClassValueProps } from '@lib/types/dom';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export const Cost: FC<
  PropsWithChildren<TClassValueProps>
> = ({ classValue, children }) => {
  return (
    <h5 className={clsx('text-2xl font-sans', classValue)}>
      {children}
    </h5>
  );
};
