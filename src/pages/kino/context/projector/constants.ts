import { VOIDOP } from '@constants/functions';
import type { TContext, TStatusHandlers } from './types';

// connections
const localConnection = new RTCPeerConnection();
const remoteConnection = new RTCPeerConnection();

const SEND_CHANNEL_KEY = 'sendChannel'
// senders
const sendChannel =
  localConnection.createDataChannel(SEND_CHANNEL_KEY);
const receiveChannel = null; // set later

export const STATUS_RECORD = {
  localChannelState: null,
  remoteChannelState: null,
  localSignalingState: null,
  remoteSignalingState: null,
  localIceGatheringState: null,
  remoteIceGatheringState: null,
  localConnectionState: null,
  remoteConnectionState: null,
};

export const resolveStatusHandlers = (
  handler = VOIDOP,
): TStatusHandlers => ({
  onConnectionStateChange: handler,
  onIceConnectionStateChange: handler,
  onIceGatheringStateChange: handler,
  onSignalingStateChange: handler,
});

export const CONTEXT: TContext = {
  logs: [],
  statusRecord: STATUS_RECORD,
  localConnection,
  remoteConnection,
  receiveChannel,
  sendChannel,
  activeStream: null,
  statusHandlers: resolveStatusHandlers(),
  onUpdateReceiveChannel: VOIDOP,
  onUpdateActiveStream: VOIDOP,
  onUpdateStatusRecord: VOIDOP,
  onLog: VOIDOP,
};
