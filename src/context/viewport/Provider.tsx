import type { FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Context } from './Context';
import { useViewport } from '@hooks/window/useViewport';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const windowSize = useViewport();

  return (
    <Context.Provider
      value={{
        ...windowSize,
      }}
    >
      {children}
    </Context.Provider>
  );
};
