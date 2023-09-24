import { useState, type FC, useRef } from 'react';
import type { TChildrenElement } from '@t/index';
import { Screen, useScreen } from '.';
import { TContext, TMediaSource } from './types';
import { useStatusRecord } from '@pages/kino/hooks/useStatusRecord';
import { useLogs } from '@pages/kino/hooks/useLogs';
import { CHANNEL_KEY } from '@pages/kino/hooks/signaling/config';
import { useChannel } from 'ably/react';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const initScreenContext = useScreen();
  const { channel } = useChannel(CHANNEL_KEY);
  const logsContext = useLogs();

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [mediaSource, setMediaSource] =
    useState<TMediaSource>(null);

  const statusRecord = useStatusRecord({
    channel,
    connection: initScreenContext.connection,
    onLog: logsContext.onLog,
  });

  const value: TContext = {
    ...initScreenContext,
    ...logsContext,
    ...statusRecord,
    channel,
    videoRef,
  };

  return (
    <Screen.Provider value={value}>
      {children}
    </Screen.Provider>
  );
};
