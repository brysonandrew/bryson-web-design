import clsx from 'clsx';
import { FC, PropsWithChildren, useContext } from 'react';
import { Context } from '../context';

export const Shell: FC<PropsWithChildren> = ({
  children,
}) => {
  const { isDarkModeReversed } = useContext(Context);

  return (
    <header
      className={clsx(
        'relative row-space w-full px-8 h-12 bg-main rounded-md',
        isDarkModeReversed ? 'bg-main-inverted' : 'bg-main',
      )}
    >
      {children}
    </header>
  );
};
