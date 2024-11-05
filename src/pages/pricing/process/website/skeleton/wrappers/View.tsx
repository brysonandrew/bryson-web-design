import { TClassValueProps } from '@brysonandrew/config-types/dom/main';
import { cx } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

export const View: FC<
  PropsWithChildren & TClassValueProps
> = ({ classValue, children }) => {
  return (
    <div
      className={cx(
        'relative w-full h-full py-4 bg-main-inverted',
        classValue,
      )}
    >
      {children}
    </div>
  );
};
