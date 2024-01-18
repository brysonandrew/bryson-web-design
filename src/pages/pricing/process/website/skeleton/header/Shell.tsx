import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export const Shell: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <header
      className={clsx(
        'relative row-space w-full px-8 h-12 bg-main',
      )}
    >
      {children}
    </header>
  );
};
