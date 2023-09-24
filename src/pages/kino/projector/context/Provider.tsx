import { type FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Projector, useProjector } from '.';
import { TContext } from './types';
import { useStatusRecord } from '@pages/kino/hooks/useStatusRecord';
import { useLogs } from '@pages/kino/hooks/useLogs';
import { useChannel } from 'ably/react';
import { CHANNEL_KEY } from '@pages/kino/hooks/signaling/config';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const initProjectorContext = useProjector();
  const { channel } = useChannel(CHANNEL_KEY);
  const logsContext = useLogs();

  const statusRecordContext = useStatusRecord({
    channel,
    connection: initProjectorContext.connection,
    onLog: logsContext.onLog,
  });

  const value: TContext = {
    ...initProjectorContext,
    ...logsContext,
    ...statusRecordContext,
    channel,
  };

  return (
    <Projector.Provider value={value}>
      {children}
    </Projector.Provider>
  );
};
