import { useKino } from '../../context';
import { useReceiveChannel } from './useReceiveChannel';
import { useConnectionListeners } from '@pages/kino/hooks/useConnectionListeners';

export const useRemoteConnection = () => {
  const { localConnection, remoteConnection } = useKino();

  const handleReceiveChannel = useReceiveChannel();
  const handleIceCandidate = async (
    event: RTCPeerConnectionIceEvent,
  ) => {
    try {
      const candidate = event.candidate;
      if (!candidate) return;
      await localConnection.addIceCandidate(candidate);
    } catch (error) {
      console.log(error);
    }
  };
  useConnectionListeners({
    connection: remoteConnection,
    onDataChannel: handleReceiveChannel,
    onIceCandidate: handleIceCandidate,
  });
};
