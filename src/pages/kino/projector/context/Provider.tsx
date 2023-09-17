import { useState, type FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Projector, useProjector } from '.';
import { TContext, TLogEntries, TLogEntry } from './types';
import { generateId } from '@utils/keys/generateRandomId';
import { useStatusRecord } from '@pages/kino/hooks/useStatusRecord';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const projector = useProjector();
  const [logs, setLogs] = useState<TLogEntries>([]);

  const statusRecordProps = useStatusRecord({
    channel: projector.sendChannel,
    connection: projector.connection,
  });

  const handleLog = (text: TLogEntry[1]) => {
    setLogs((prev) => [...prev, [generateId(), text]]);
  };

  const value: TContext = {
    ...projector,
    logs,
    onLog: handleLog,
    ...statusRecordProps,
  };

  return (
    <Projector.Provider value={value}>
      {children}
    </Projector.Provider>
  );
};
