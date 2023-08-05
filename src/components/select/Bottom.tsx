import { TChildren, TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TClassValueProps & {
  children: TChildren;
};
export const Bottom: FC<TProps> = ({
  classValue,
  children,
}) => {
  return (
    <div
      className={clsx(
        'absolute left-0 top-full translate-x-0 translate-y-0',
        classValue,
      )}
    >
      {children}
    </div>
  );
};
