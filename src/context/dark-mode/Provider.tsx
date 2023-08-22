import type { FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Context } from './Context';
import { useDarkMode } from '@hooks/style/useDarkMode';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const darkMode = useDarkMode();

  return (
    <Context.Provider
      value={{
        darkMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};
