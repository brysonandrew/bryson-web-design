import { generateId } from '@brysonandrew/lib/utils/key/generateRandomId';
import { useState } from 'react';
import {
  TLogEntries,
  TLogEntry,
  TLogsContext,
} from '@brysonandrew/color/config/types';

export const useLogs = (): TLogsContext => {
  const [logs, setLogs] = useState<TLogEntries>([]);

  const handleLog = (text: TLogEntry[1]) => {
    const id = generateId();
    setLogs((prev) => [...prev, [id, text]]);
  };

  return {
    logs,
    onLog: handleLog,
  };
};
