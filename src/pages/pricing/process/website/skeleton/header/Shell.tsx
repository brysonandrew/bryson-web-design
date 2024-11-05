import { cx } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

export const Shell: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <header
      className={cx(
        'relative row-space w-full px-8 h-12 bg-main',
      )}
    >
      {children}
    </header>
  );
};
