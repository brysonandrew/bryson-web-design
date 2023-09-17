export type TError = any;

export type TUpdateChannelHandler = (
  channel: RTCDataChannel | null,
) => void;

export type TStatusRecord = {
  channelState: RTCDataChannelState | null;
  signalingState: RTCSignalingState | null;
  iceGatheringState: RTCIceGatheringState | null;
  connectionState: RTCPeerConnectionState | null;
};

export type TStatusRecordKey = keyof TStatusRecord;

export type TStatusHandlers = {
  onConnectionStateChange(): void | null;
  onIceConnectionStateChange(): void;
  onIceGatheringStateChange(): void;
  onSignalingStateChange(): void;
};

export type TLogHandler = (text: string) => void;

export type TStatusRecordContext = {
  statusHandlers: TStatusHandlers;
  statusRecord: TStatusRecord;
  onUpdateStatusRecord(): void;
};

export type TConnectionContext = TStatusRecordContext & {
  signaling: BroadcastChannel;
  connection: RTCPeerConnection;
};
