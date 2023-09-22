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

  const onUpdatePartialStatusRecord = (
    partial: Partial<TStatusRecord>,
  ) => {
    setUpdateStatusRecord((prev) => {
      return {
        ...prev,
        ...partial,
      };
    });
  };

  const onUpdateStatusRecord = () => {
    const {
      channel,
      connection: {
        connectionState,
        iceGatheringState,
        signalingState,
      },
    } = configRef.current;

    setUpdateStatusRecord({
      channelState: channel?.readyState ?? null,
      connectionState,
      iceGatheringState,
      signalingState,
    });
  };

  const statusHandlers = resolveStatusHandlers(
    onUpdateStatusRecord,
  );

  return {
    statusRecord,
    statusHandlers,
    onUpdatePartialStatusRecord,
    onUpdateStatusRecord,
  };
};
