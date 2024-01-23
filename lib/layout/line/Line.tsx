import { TClassValueProps } from '@brysonandrew/types/dom/main';
import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';

export const Line: FC<
  PropsWithChildren<TClassValueProps>
> = ({ classValue }) => {
  return (
    <div
      className={clsx('bg-gray-3 w-full h-px', classValue)}
    />
  );
};
