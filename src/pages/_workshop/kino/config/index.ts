import { VOIDOP } from 'lib/constants/functions';
import {
  TConnectionContext,
  TLogsContext,
  TStatusHandlers,
  TStatusRecord,
  TStatusRecordContext,
} from './types';

export const resolveStatusHandlers = (
  handler = VOIDOP,
): TStatusHandlers => ({
  onConnectionStateChange: handler,
  onIceConnectionStateChange: handler,
  onIceGatheringStateChange: handler,
  onSignalingStateChange: handler,
});

export const STATUS_RECORD: TStatusRecord = {
  channelState: null,
  signalingState: null,
  iceGatheringState: null,
  connectionState: null,
};

export const LOGS_CONTEXT: TLogsContext = {
  logs: [],
  onLog: VOIDOP,
};

export const STATUS_CONTEXT: TStatusRecordContext = {
  statusRecord: STATUS_RECORD,
  statusHandlers: resolveStatusHandlers(),
  onUpdateStatusRecord: VOIDOP,
  onUpdatePartialStatusRecord: VOIDOP,
};

const connection = new RTCPeerConnection();

export const CONNECTION_CONTEXT: TConnectionContext = {
  connection,
  ...STATUS_CONTEXT,
};
