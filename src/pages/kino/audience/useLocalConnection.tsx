import { TError } from '@t/index';
import { useKino } from '../context';
import { useConnectionListeners } from '../hooks/useConnectionListeners';

export const useLocalConnection = () => {
  const {
    localConnection,
    remoteConnection,
    statusHandlers,
    onLog,
  } = useKino();

  const handleReceiveChannel = (event: Event) => {
    onLog('data received');
    console.log(event);
  };

  const handleIceCandidate = async (
    event: RTCPeerConnectionIceEvent,
  ) => {
    const candidate: RTCIceCandidate | null =
      event.candidate;
    if (!candidate) return;
    try {
      onLog('adding candidate');
      await remoteConnection.addIceCandidate(candidate);
      onLog('candidate added');
    } catch (error: TError) {
      onLog('adding candidate error');
      console.log(error);
    }
  };

  const handleTrack = (event: RTCTrackEvent) => {
    onLog('local track received');
    console.log(event);
  };

  const handleNegotiationNeeded = (event: Event) => {
    console.log('local negotiation needed');
    console.log(event);
  };

  const handleIceCandidateError = (event: Event) => {
    console.log('local ice candidate error');
    console.log(event);
  };

  useConnectionListeners({
    connection: localConnection,
    onDataChannel: handleReceiveChannel,
    onIceCandidate: handleIceCandidate,
    onTrack: handleTrack,
    onNegotiationNeeded: handleNegotiationNeeded,
    onIceCandidateError: handleIceCandidateError,
    ...statusHandlers,
  });
};
