import type { FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Context } from './Context';
import {
  TViewport,
  useViewport,
} from '@hooks/window/useViewport';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const viewport = useViewport();

  const isFlipped = ({
    width = 0,
    height = 0,
  }: TViewport) => {
    return (width ?? 0) < (height ?? 0) && width < 700;
  };

  return (
    <Context.Provider
      value={{
        ...viewport,
        isFlipped: isFlipped(viewport),
      }}
    >
      {children}
    </Context.Provider>
  );
};
