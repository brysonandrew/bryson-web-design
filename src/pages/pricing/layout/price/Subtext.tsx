import { TClassValueProps } from '@brysonandrew/config-types/dom/main';
import { cx } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

export const Subtext: FC<
  PropsWithChildren<TClassValueProps>
> = ({ children, classValue }) => {
  return <span className={cx('text-base font-sans tracking-wide', classValue)}>{children}</span>;
};
