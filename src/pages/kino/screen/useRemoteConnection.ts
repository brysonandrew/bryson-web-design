import { useConnectionListeners } from '../hooks/useConnectionListeners';
import { useReceiveChannel } from '../hooks/useReceiveChannel';
import { useIceCandidate } from '../hooks/useIceCandidate';
import { useScreen } from './context';

export const useRemoteConnection = () => {
  const {
    signaling,
    connection,
    statusHandlers,
    receiveChannel,
    onUpdateActiveStream,
    onUpdateReceiveChannel,
    onUpdateStatusRecord,
  } = useScreen();

  const handleReceiveChannel = useReceiveChannel({
    channel: receiveChannel,
    onUpdateReceiveChannel,
    onUpdateStatusRecord,
  });

  const handleIceCandidate = useIceCandidate(signaling);

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
    console.log('⚠ remote ice candidate error');
    console.log(event);
  };

  useConnectionListeners({
    connection,
    onDataChannel: handleReceiveChannel,
    onIceCandidate: handleIceCandidate,
    onTrack: handleTrack,
    onNegotiationNeeded: handleNegotiationNeeded,
    onIceCandidateError: handleIceCandidateError,
    ...statusHandlers,
  });
};
