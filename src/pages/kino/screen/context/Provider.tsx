import {
  useState,
  type FC,
  useRef,
  useEffect,
} from 'react';
import type { TChildrenElement } from '@t/index';
import { Screen, useScreen } from '.';
import {
  TActiveStream,
  TContext,
  TMediaSource,
} from './types';
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

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [mediaSource, setMediaSource] =
    useState<TMediaSource>(null);
  const [receiveChannel, setReceiveChannel] =
    useState<RTCDataChannel | null>(null);

  const statusRecord = useStatusRecord({
    channel: receiveChannel,
    connection: initScreenContext.connection,
  });

  const value: TContext = {
    ...initScreenContext,
    videoRef,
    receiveChannel,
    mediaSource,
    onUpdateMediaSource: setMediaSource,
    onUpdateReceiveChannel: setReceiveChannel,
    ...logsContext,
    ...statusRecord,
  };

  return (
    <Screen.Provider value={value}>
      {children}
    </Screen.Provider>
  );
};
