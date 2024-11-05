import type { FC } from 'react';
import { TDivProps } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';

export const WorkItemLabel: FC<TDivProps> = ({
  title,
  children,
  classValue,
  ...props
}) => {
  return (
    <div className={cx('row gap-1 text-gray-4', classValue)} {...props}>
      <div className="text-black-5">{title}</div>
      {children}
    </div>
  );
};
