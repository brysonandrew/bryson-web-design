import { useConnectionListeners } from '../hooks/useConnectionListeners';
import { useReceiveChannel } from '../hooks/useReceiveChannel';
import { useIceCandidate } from '../hooks/useIceCandidate';
import { useScreen } from './context';
import { useSignaling } from '../hooks/signaling/useSignalling';

export const useRemoteConnection = () => {
  const {
    signaling,
    connection,
    statusHandlers,
    receiveChannel,
    onUpdateActiveStream,
    onUpdateReceiveChannel,
    onUpdateStatusRecord,
    onLog,
  } = useScreen();
  useSignaling({ signaling, connection, onLog });

  const handleReceiveChannel = useReceiveChannel({
    channel: receiveChannel,
    onUpdateReceiveChannel,
    onUpdateStatusRecord,
  });
  console.log(connection)

  const handleIceCandidate = useIceCandidate(signaling);

  const handleTrack = (event: RTCTrackEvent) => {
    onUpdateActiveStream(event.streams[0]);
    onLog('track received');
    console.log(event);
  };

  const handleNegotiationNeeded = (event: Event) => {
    onLog('negotiation needed');
    console.log(event);
  };

  const handleIceCandidateError = (event: Event) => {
    onLog('⚠ ice candidate error');
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
