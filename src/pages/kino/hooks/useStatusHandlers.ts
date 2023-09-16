import { useKino } from '../context';
import { TStatusRecord } from '../context/types';

export const useUpdateStatusRecord = (
  onUpdateStatusRecord: (next: TStatusRecord) => void,
) => {
  const {
    sendChannel,
    receiveChannel,
    localConnection,
    remoteConnection,
  } = useKino();
  const handleUpdateStatusRecord = () => {
    onUpdateStatusRecord({
      localChannelState: sendChannel.readyState,
      remoteChannelState:
        receiveChannel?.readyState ?? null,
      localSignalingState: localConnection.signalingState,
      remoteSignalingState: remoteConnection.signalingState,
      localIceGatheringState:
        localConnection.iceGatheringState,
      remoteIceGatheringState:
        remoteConnection.iceGatheringState,
      localConnectionState: localConnection.connectionState,
      remoteConnectionState:
        remoteConnection.connectionState,
    });
  };

  return handleUpdateStatusRecord;
};
