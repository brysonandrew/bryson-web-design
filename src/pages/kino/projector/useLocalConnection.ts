import { useProjector } from './context';
import { useConnectionListeners } from '../hooks/useConnectionListeners';
import { useIceCandidate } from '@pages/kino/hooks/useIceCandidate';

export const useLocalConnection = () => {
  const { signaling, connection, statusHandlers, onLog } =
    useProjector();
  const handleIceCandidate = useIceCandidate(signaling);

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
    connection,
    onDataChannel: console.log,
    onIceCandidate: handleIceCandidate,
    onTrack: handleTrack,
    onNegotiationNeeded: handleNegotiationNeeded,
    onIceCandidateError: handleIceCandidateError,
    ...statusHandlers,
  });
};
