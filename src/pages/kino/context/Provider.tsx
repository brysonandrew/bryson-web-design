import { useState, type FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { Kino, useKino } from '.';
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
import { useUpdateStatusRecord } from '../hooks/useStatusHandlers';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const kino = useKino();
  const [statusRecord, setUpdateStatusRecord] =
    useState<TStatusRecord>(STATUS_RECORD);
  const [receiveChannel, setReceiveChannel] =
    useState<RTCDataChannel | null>(null);
  const [activeStream, setActiveStream] =
    useState<MediaStream | null>(null);
  const [logs, setLogs] = useState<TLogEntries>([]);

  const handleUpdateStatusRecord = useUpdateStatusRecord(
    setUpdateStatusRecord,
  );

  const handleLog = (text: TLogEntry[1]) => {
    setLogs((prev) => [...prev, [generateId(), text]]);
  };

  const value: TContext = {
    ...kino,
    logs,
    statusRecord,
    activeStream,
    receiveChannel,
    statusHandlers: resolveStatusHandlers(
      handleUpdateStatusRecord,
    ),
    onUpdateReceiveChannel: setReceiveChannel,
    onUpdateActiveStream: setActiveStream,
    onUpdateStatusRecord: handleUpdateStatusRecord,
    onLog: handleLog,
  };

  return (
    <Kino.Provider value={value}>{children}</Kino.Provider>
  );
};
