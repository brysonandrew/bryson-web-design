import { NOOP } from '@constants/functions';
import type { TContext } from './types';

const localConnection = new RTCPeerConnection();
const remoteConnection = new RTCPeerConnection();
const sendChannel =
  localConnection.createDataChannel('sendChannel');

export const CONTEXT: TContext = {
  localState: sendChannel.readyState,
  remoteState: sendChannel.readyState,
  localConnection,
  remoteConnection,
  receiveChannel: null,
  sendChannel,
  onUpdateReceiveChannel: NOOP,
  onUpdateLocalState: NOOP,
  onUpdateRemoteState: NOOP,
};
