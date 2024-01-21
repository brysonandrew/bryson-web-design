import type { FC, PropsWithChildren } from 'react';
import { useDarkModeState } from './useDarkModeState';
import { DARK_MODE } from './constants';

export const DarkModeProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const darkMode = useDarkModeState();

  return (
    <DARK_MODE.Provider value={darkMode}>
      {children}
    </DARK_MODE.Provider>
  );
};
