import { TClassValueProps } from '@brysonandrew/types/dom/main';
import clsx, { ClassValue } from 'clsx';
import type { FC, PropsWithChildren } from 'react';

export const Line: FC<
  PropsWithChildren<
    TClassValueProps & { color: ClassValue }
  >
> = ({ color = 'bg-gray-3', classValue }) => {
  return (
    <div
      className={clsx('w-full h-px', color, classValue)}
    />
  );
};
