import { useState, type FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Projector, useProjector } from '.';
import {
  TContext,
  TLogEntries,
  TLogEntry,
  TStatusRecord,
} from './types';
import {
  STATUS_RECORD,
  resolveStatusHandlers,
} from './constants';
import { generateId } from '@utils/keys/generateRandomId';
import { useUpdateStatusRecord } from '@pages/kino/hooks/useStatusHandlers';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const projector = useProjector();
  const [statusRecord, setUpdateStatusRecord] =
    useState<TStatusRecord>(STATUS_RECORD);
  const [receiveChannel, setReceiveChannel] =
    useState<RTCDataChannel | null>(null);
  const [logs, setLogs] = useState<TLogEntries>([]);

  const handleUpdateStatusRecord = useUpdateStatusRecord(
    setUpdateStatusRecord,
  );

  const handleLog = (text: TLogEntry[1]) => {
    setLogs((prev) => [...prev, [generateId(), text]]);
  };

  const value: TContext = {
    ...projector,
    logs,
    statusRecord,
    receiveChannel,
    statusHandlers: resolveStatusHandlers(
      handleUpdateStatusRecord,
    ),
    onUpdateReceiveChannel: setReceiveChannel,
    onUpdateStatusRecord: handleUpdateStatusRecord,
    onLog: handleLog,
  };

  return (
    <Projector.Provider value={value}>
      {children}
    </Projector.Provider>
  );
};
