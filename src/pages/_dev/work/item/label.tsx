import type { FC } from 'react';
import { TDivProps } from '@brysonandrew/config-types';
import clsx from 'clsx';

export const WorkItemLabel: FC<TDivProps> = ({
  title,
  children,
  classValue,
  ...props
}) => {
  return (
    <div className={clsx('row gap-1 text-gray-4', classValue)} {...props}>
      <div className="text-black-5">{title}</div>
      {children}
    </div>
  );
};
