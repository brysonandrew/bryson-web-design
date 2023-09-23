import { useState, type FC, useRef } from 'react';
import type { TChildrenElement } from '@t/index';
import { Screen, useScreen } from '.';
import { TContext, TMediaSource } from './types';
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

  const statusRecord = useStatusRecord({
    connection: initScreenContext.connection,
  });

  const value: TContext = {
    ...initScreenContext,
    videoRef,
    mediaSource,
    onUpdateMediaSource: setMediaSource,
    ...logsContext,
    ...statusRecord,
  };

  return (
    <Screen.Provider value={value}>
      {children}
    </Screen.Provider>
  );
};
