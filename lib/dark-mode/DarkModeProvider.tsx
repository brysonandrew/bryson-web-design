import { FC, PropsWithChildren, useContext } from 'react';
import { useDarkModeState } from './useDarkModeState';
import { DARK_MODE } from '@brysonandrew/dark-mode/config/constants';
import { TUseDarkMode } from '@brysonandrew/dark-mode/config/types';
export const useDarkMode = (): TUseDarkMode =>
  useContext<TUseDarkMode>(DARK_MODE);

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
