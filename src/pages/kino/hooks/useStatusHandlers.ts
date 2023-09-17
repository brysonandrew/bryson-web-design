import { TStatusRecord } from '../config/types';

export type TPassedConfig = {
  connection: RTCPeerConnection;
  channel: RTCDataChannel | null;
};
type TConfig = TPassedConfig & {
  onUpdateStatusRecord(next: TStatusRecord): void;
};
export const useUpdateStatusRecord = ({
  channel,
  connection,
  onUpdateStatusRecord,
}: TConfig) => {
  const handleUpdateStatusRecord = () => {
    onUpdateStatusRecord({
      channelState: channel?.readyState ?? null,
      signalingState: connection.signalingState,
      iceGatheringState: connection.iceGatheringState,
      connectionState: connection.connectionState,
    });
  };

  return handleUpdateStatusRecord;
};
