import { PropsWithChildren, type FC } from 'react';
import type { TChildrenElement } from '@brysonandrew/lib/types/dom';
import { Projector, useProjector } from '.';
import { TContext } from '@brysonandrew/color/types';
import { useStatusRecord } from '@pages/_workshop/kino/hooks/useStatusRecord';
import { useLogs } from '@pages/_workshop/kino/hooks/useLogs';
import { useChannel } from 'ably/react';
import { CHANNEL_KEY } from '@pages/_workshop/kino/hooks/signaling/config';

export const Provider: FC<PropsWithChildren> = ({
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
