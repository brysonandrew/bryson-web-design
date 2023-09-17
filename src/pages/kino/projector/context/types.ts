import {
  TLogHandler,
  TConnectionContext,
} from '@pages/kino/config/types';

export type TLogEntry = [id: string, text: string];
export type TLogEntries = TLogEntry[];

type TLogsContext = {
  logs: TLogEntries;
  onLog: TLogHandler;
};

export type TContext = TConnectionContext &
  TLogsContext & {
    sendChannel: RTCDataChannel;
  };
