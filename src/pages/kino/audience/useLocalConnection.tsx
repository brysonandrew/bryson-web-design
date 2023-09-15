import { TError } from '@t/index';
import { useKino } from '../context';
import { useConnectionListeners } from '../hooks/useConnectionListeners';

export const useLocalConnection = () => {
  const { localConnection, remoteConnection, localState } =
    useKino();

  const handleReceiveChannel = (event: Event) => {
    console.log(event, 'handleReceiveChannel');
  };

  const handleIceCandidate = async (
    event: RTCPeerConnectionIceEvent,
  ) => {
    const candidate: RTCIceCandidate | null =
      event.candidate;
    if (!candidate) return;
    try {
      await remoteConnection.addIceCandidate(candidate);
    } catch (error: TError) {
      console.log(error);
    }
  };

  useConnectionListeners({
    connection: localConnection,
    onDataChannel: handleReceiveChannel,
    onIceCandidate: handleIceCandidate,
  });

  return localState;
};
