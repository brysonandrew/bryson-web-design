import type { FC, PropsWithChildren } from 'react';
import { DarkMode } from '.';
import { useDarkMode } from '@hooks/dark-mode/useDarkMode';

export const Provider: FC<PropsWithChildren> = ({
  children,
}) => {
  const darkMode = useDarkMode();

  return (
    <DarkMode.Provider value={darkMode}>
      {children}
    </DarkMode.Provider>
  );
};
