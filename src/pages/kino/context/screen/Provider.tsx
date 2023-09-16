import { useState, type FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Screen, useScreen } from '.';
import { TContext } from './types';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const screen = useScreen();
  const [activeStream, setActiveStream] =
    useState<MediaStream | null>(null);

  const value: TContext = {
    ...screen,
    activeStream,
    onUpdateActiveStream: setActiveStream,
  };

  return (
    <Screen.Provider value={value}>
      {children}
    </Screen.Provider>
  );
};
