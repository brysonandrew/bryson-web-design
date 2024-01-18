import type { FC, PropsWithChildren } from 'react';
import { DARK_MODE } from './constants';
import { useDarkMode } from '@lib/context/dark-mode/useDarkMode';

export const Provider: FC<PropsWithChildren> = ({
  children,
}) => {
  const darkMode = useDarkMode();

  return (
    <DARK_MODE.Provider value={darkMode}>
      {children}
    </DARK_MODE.Provider>
  );
};
