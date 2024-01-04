import { TClassValueProps } from '@t/index';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export const View: FC<
  PropsWithChildren & TClassValueProps
> = ({ classValue, children }) => {
  return (
    <div
      className={clsx(
        'w-full h-full py-4 bg-white rounded-lg',
        classValue,
      )}
    >
      {children}
    </div>
  );
};
