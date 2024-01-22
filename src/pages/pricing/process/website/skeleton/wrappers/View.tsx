import { TClassValueProps } from '@brysonandrew/types/dom/main';
import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export const View: FC<
  PropsWithChildren & TClassValueProps
> = ({ classValue, children }) => {
  return (
    <div
      className={clsx(
        'relative w-full h-full py-4 bg-main-inverted',
        classValue,
      )}
    >
      {children}
    </div>
  );
};
