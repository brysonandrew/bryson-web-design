import { useApp } from '@brysonandrew/app/useApp';
import { TClassValueProps } from '@brysonandrew/base/types/dom/main';
import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';

export const End: FC<
  PropsWithChildren<TClassValueProps>
> = ({ classValue, children }) => {
  const { BORDER_RADIUS } = useApp();
  return (
    <div
      className={clsx('relative center h-28', classValue)}
      style={{
        borderRadius: BORDER_RADIUS.SM,
      }}
    >
      {children}
    </div>
  );
};
