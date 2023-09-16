import { useKino } from '../context';
import { useReceiveChannel } from './useReceiveChannel';
import { useConnectionListeners } from '@pages/kino/hooks/useConnectionListeners';

export const useRemoteConnection = () => {
  const {
    localConnection,
    remoteConnection,
    onUpdateActiveStream,
    statusHandlers,
  } = useKino();

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

  const handleTrack = (event: RTCTrackEvent) => {
    onUpdateActiveStream(event.streams[0]);
    console.log('remote track received');
    console.log(event);
  };

  const handleNegotiationNeeded = (event: Event) => {
    console.log('remote negotiation needed');
    console.log(event);
  };

  const handleIceCandidateError = (event: Event) => {
    console.log('remote ice candidate error');
    console.log(event);
  };

  useConnectionListeners({
    connection: remoteConnection,
    onDataChannel: handleReceiveChannel,
    onIceCandidate: handleIceCandidate,
    onTrack: handleTrack,
    onNegotiationNeeded: handleNegotiationNeeded,
    onIceCandidateError: handleIceCandidateError,
    ...statusHandlers,
  });
};
