import { TClassValueProps } from '@brysonandrew/base/types/dom/main';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export const Subtext: FC<
  PropsWithChildren<TClassValueProps>
> = ({ children, classValue }) => {
  return <span className={clsx('text-base font-sans tracking-wide', classValue)}>{children}</span>;
};
