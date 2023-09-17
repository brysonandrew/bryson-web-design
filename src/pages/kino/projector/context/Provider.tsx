import { type FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Projector, useProjector } from '.';
import { TContext } from './types';
import { useStatusRecord } from '@pages/kino/hooks/useStatusRecord';
import { useLogs } from '@pages/kino/hooks/useLogs';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const initProjectorContext = useProjector();
  const logsContext = useLogs();

  const statusRecordContext = useStatusRecord({
    channel: initProjectorContext.sendChannel,
    connection: initProjectorContext.connection,
  });

  const value: TContext = {
    ...initProjectorContext,
    ...logsContext,
    ...statusRecordContext,
  };

  return (
    <Projector.Provider value={value}>
      {children}
    </Projector.Provider>
  );
};
