import { useRef, useState } from 'react';
import {
  STATUS_RECORD,
  resolveStatusHandlers,
} from '../config';
import {
  TStatusRecordContext,
  TStatusRecord,
} from '../config/types';

type TConfig = {
  connection: RTCPeerConnection;
  channel: RTCDataChannel | null;
};
export const useStatusRecord = (
  config: TConfig,
): TStatusRecordContext => {
  const [statusRecord, setUpdateStatusRecord] =
    useState<TStatusRecord>(STATUS_RECORD);
  const configRef = useRef(config);
  configRef.current = config;
  const onUpdateStatusRecord = () => {
    const { channel, connection } = configRef.current;
    setUpdateStatusRecord({
      channelState: channel?.readyState ?? null,
      ...connection,
      iceGatheringState: connection.iceGatheringState,
    });
  };

  const statusHandlers = resolveStatusHandlers(
    onUpdateStatusRecord,
  )

  return {
    statusRecord,
    statusHandlers,
    onUpdateStatusRecord,
  };
};
