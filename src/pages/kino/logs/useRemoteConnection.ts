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
    console.log(event);
    onUpdateActiveStream(event.streams[0]);
    console.log('pc2 received remote stream');
  };

  useConnectionListeners({
    connection: remoteConnection,
    onDataChannel: handleReceiveChannel,
    onIceCandidate: handleIceCandidate,
    onTrack: handleTrack,
    onNegotiationNeeded: (event: Event) =>
      console.log(event),
    onIceCandidateError: (event: Event) =>
      console.log(event),
    ...statusHandlers,
  });
};
