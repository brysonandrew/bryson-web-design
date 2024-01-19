import type { FC, PropsWithChildren } from 'react';
import { useDarkMode } from '../useDarkMode';
import { DARK_MODE } from './constants';

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
