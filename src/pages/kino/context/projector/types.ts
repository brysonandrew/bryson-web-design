export type TActiveStream = MediaStream | null;

export type TStatusRecord = {
  localChannelState: RTCDataChannelState | null;
  remoteChannelState: RTCDataChannelState | null;
  localSignalingState: RTCSignalingState | null;
  remoteSignalingState: RTCSignalingState | null;
  localIceGatheringState: RTCIceGatheringState | null;
  remoteIceGatheringState: RTCIceGatheringState | null;
  localConnectionState: RTCPeerConnectionState | null;
  remoteConnectionState: RTCPeerConnectionState | null;
};

export type TStatusRecordKey = keyof TStatusRecord;

export type TStatusHandlers = {
  onConnectionStateChange(): void | null;
  onIceConnectionStateChange(): void;
  onIceGatheringStateChange(): void;
  onSignalingStateChange(): void;
};

export type TLogEntry = [id: string, text: string];
export type TLogEntries = TLogEntry[];

export type TContext = {
  logs: TLogEntries;
  statusRecord: TStatusRecord;
  localConnection: RTCPeerConnection;
  remoteConnection: RTCPeerConnection;
  sendChannel: RTCDataChannel;
  receiveChannel: RTCDataChannel | null;
  activeStream: TActiveStream;
  statusHandlers: TStatusHandlers;
  onUpdateReceiveChannel(
    channel: RTCDataChannel | null,
  ): void;
  onUpdateActiveStream(activeStream: TActiveStream): void;
  onUpdateStatusRecord(): void;
  onLog(text: string): void;
};
