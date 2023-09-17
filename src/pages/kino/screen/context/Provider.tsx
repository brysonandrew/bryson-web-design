import { useState, type FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Screen, useScreen } from '.';
import { TContext } from './types';
import { useStatusRecord } from '@pages/kino/hooks/useStatusRecord';
import { useLogs } from '@pages/kino/hooks/useLogs';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const initScreenContext = useScreen();
  const logsContext = useLogs();

  const [activeStream, setActiveStream] =
    useState<MediaStream | null>(null);
  const [receiveChannel, setReceiveChannel] =
    useState<RTCDataChannel | null>(null);

  const statusRecordProps = useStatusRecord({
    channel: receiveChannel,
    connection: initScreenContext.connection,
  });

  const value: TContext = {
    ...initScreenContext,
    receiveChannel,
    activeStream,
    onUpdateActiveStream: setActiveStream,
    onUpdateReceiveChannel: setReceiveChannel,
    ...logsContext,
    ...statusRecordProps,
  };

  return (
    <Screen.Provider value={value}>
      {children}
    </Screen.Provider>
  );
};
