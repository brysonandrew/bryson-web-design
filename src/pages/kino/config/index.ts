import { VOIDOP } from '@constants/functions';
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
};

const BROADCAST_CHANNEL_KEY = 'kinoBroadcast';
const signaling = new BroadcastChannel(
  BROADCAST_CHANNEL_KEY,
);
signaling.onmessage = console.log;
signaling.onmessageerror = console.error;

const connection = new RTCPeerConnection();

export const CONNECTION_CONTEXT: TConnectionContext = {
  signaling,
  connection,
  ...STATUS_CONTEXT,
};
