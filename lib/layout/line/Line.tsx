import { TClassValue, TClassValueProps } from '@brysonandrew/config-types/dom/main';
import { cx } from 'class-variance-authority';
import type { FC, PropsWithChildren } from 'react';

export const Line: FC<
  PropsWithChildren<
    TClassValueProps & { color?: TClassValue }
  >
> = ({ color = 'border-gray-3', classValue }) => {
  return (
    <hr
      className={cx('w-full border', color, classValue)}
    />
  );
};
