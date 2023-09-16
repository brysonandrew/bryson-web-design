import { useProjector } from "../context/projector";
import { TStatusRecord } from "../context/projector/types";

export const useUpdateStatusRecord = (
  onUpdateStatusRecord: (next: TStatusRecord) => void,
) => {
  const {
    sendChannel,
    receiveChannel,
    localConnection,
    remoteConnection,
  } = useProjector();
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
