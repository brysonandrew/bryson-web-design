import { type FC, useRef, PropsWithChildren } from 'react';
import { Screen, useScreen } from '.';
import { TContext } from './types';
import { useStatusRecord } from '@pages/_workshop/kino/hooks/useStatusRecord';
import { useLogs } from '@pages/_workshop/kino/hooks/useLogs';
import { CHANNEL_KEY } from '@pages/_workshop/kino/hooks/signaling/config';
import { useChannel } from 'ably/react';

export const Provider: FC<PropsWithChildren> = ({
  children,
}) => {
  const initScreenContext = useScreen();
  const { channel } = useChannel(CHANNEL_KEY);
  const logsContext = useLogs();

  const videoRef = useRef<HTMLVideoElement | null>(null);

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
