import { TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export const Subtext: FC<
  PropsWithChildren<TClassValueProps>
> = ({ children, classValue }) => {
  return <span className={clsx('text-sm tracking-wide', classValue)}>{children}</span>;
};
