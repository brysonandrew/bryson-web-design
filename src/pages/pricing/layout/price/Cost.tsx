import { TClassValueProps } from '@brysonandrew/config-types/dom/main';
import { cx } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

export const Cost: FC<
  PropsWithChildren<TClassValueProps>
> = ({ classValue, children }) => {
  return (
    <h5
      className={cx(
        'relative text-2xl font-sans',
        classValue,
      )}
    >
      {children}
    </h5>
  );
};
