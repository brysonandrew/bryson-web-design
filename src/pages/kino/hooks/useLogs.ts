import { generateId } from '@utils/keys/generateRandomId';
import { useState } from 'react';
import {
  TLogEntries,
  TLogEntry,
  TLogsContext,
} from '../config/types';

export const useLogs = (): TLogsContext => {
  const [logs, setLogs] = useState<TLogEntries>([]);

  const handleLog = (text: TLogEntry[1]) => {
    setLogs((prev) => [...prev, [generateId(), text]]);
  };

  return {
    logs,
    onLog: handleLog,
  };
};
