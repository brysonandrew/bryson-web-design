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

export type TLogEntry = [id: string, text: string];
export type TLogEntries = TLogEntry[];

export type TLogsContext = {
  logs: TLogEntries;
  onLog: TLogHandler;
};

export type TLogHandler = (text: string) => void;

export type TStatusRecordContext = {
  statusHandlers: TStatusHandlers;
  statusRecord: TStatusRecord;
  onUpdatePartialStatusRecord(
    partial?: Partial<TStatusRecord>,
  ): void;
  onUpdateStatusRecord(): void;
};

export type TConnectionContext = {
  signaling: BroadcastChannel;
  connection: RTCPeerConnection;
};
