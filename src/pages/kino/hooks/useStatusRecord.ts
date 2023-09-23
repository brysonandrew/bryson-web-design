import { useRef, useState } from 'react';
import {
  STATUS_RECORD,
  resolveStatusHandlers,
} from '../config';
import {
  TStatusRecordContext,
  TStatusRecord,
} from '../config/types';
import { CHANNEL_KEY } from './signaling/config';
import { useChannel } from 'ably/react';

type TConfig = {
  connection: RTCPeerConnection;
};
export const useStatusRecord = ({
  connection,
}: TConfig): TStatusRecordContext => {
  const [statusRecord, setUpdateStatusRecord] =
    useState<TStatusRecord>(STATUS_RECORD);
  const { channel } = useChannel(CHANNEL_KEY);
  const config = { channel, connection };
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
      connection: {
        connectionState,
        iceGatheringState,
        signalingState,
      },
    } = configRef.current;

    setUpdateStatusRecord({
      channelState: [
        channel.state,
        channel.realtime?.connection?.state,
      ]
        .filter(Boolean)
        .join(', '),
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
