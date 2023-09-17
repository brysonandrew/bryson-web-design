import { useState, type FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Screen, useScreen } from '.';
import { TContext } from './types';
import { useStatusRecord } from '@pages/kino/hooks/useStatusRecord';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const screen = useScreen();
  const [activeStream, setActiveStream] =
    useState<MediaStream | null>(null);
  const [receiveChannel, setReceiveChannel] =
    useState<RTCDataChannel | null>(null);

  const statusRecordProps = useStatusRecord({
    channel: receiveChannel,
    connection: screen.connection,
  });

  const value: TContext = {
    ...screen,
    receiveChannel,
    activeStream,
    onUpdateActiveStream: setActiveStream,
    onUpdateReceiveChannel: setReceiveChannel,
    ...statusRecordProps,
  };

  return (
    <Screen.Provider value={value}>
      {children}
    </Screen.Provider>
  );
};
