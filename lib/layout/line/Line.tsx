import { TClassValueProps } from '@brysonandrew/types/dom/main';
import clsx, { ClassValue } from 'clsx';
import type { FC, PropsWithChildren } from 'react';

export const Line: FC<
  PropsWithChildren<
    TClassValueProps & { color: ClassValue }
  >
> = ({ color = 'border-gray-3', classValue }) => {
  return (
    <hr
      className={clsx('w-full border', color, classValue)}
    />
  );
};
