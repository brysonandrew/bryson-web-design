export type TContext = {
  localState: RTCDataChannelState | null;
  remoteState: RTCDataChannelState | null;
  localConnection: RTCPeerConnection;
  remoteConnection: RTCPeerConnection;
  sendChannel: RTCDataChannel;
  receiveChannel: RTCDataChannel | null;
  onUpdateReceiveChannel(
    channel: RTCDataChannel | null,
  ): void;
  onUpdateRemoteState(
    state: RTCDataChannelState | null,
  ): void;
  onUpdateLocalState(
    state: RTCDataChannelState | null,
  ): void;
};
