import { useProjector } from './context';
import { useConnectionListeners } from '../hooks/useConnectionListeners';
import { useIceCandidate } from '@pages/kino/hooks/useIceCandidate';
import { useSignaling } from '../hooks/signaling/useSignalling';
import { useChannel } from '../hooks/useChannel';

export const useLocalConnection = () => {
  const {
    sendChannel,
    signaling,
    connection,
    statusHandlers,
    onLog,
    onUpdateStatusRecord,
  } = useProjector();
  useChannel({
    channel: sendChannel,
    onUpdateStatusRecord,
    onLog,
  });
  useSignaling({ signaling, connection, onLog });

  const handleDataChannel = (
    event: RTCDataChannelEvent,
  ) => {
    onLog('data channel');
    console.log(event);
    onUpdateStatusRecord();
  };

  const handleTrack = (event: RTCTrackEvent) => {
    onLog('track received');
    console.log(event);
  };

  const handleIceCandidate = useIceCandidate(signaling);

  const handleNegotiationNeeded = (event: Event) => {
    console.log('negotiation needed');
    console.log(event);
  };

  const handleIceCandidateError = (event: Event) => {
    console.log('ice candidate error');
    console.log(event);
  };

  useConnectionListeners({
    connection,
    onDataChannel: handleDataChannel,
    onIceCandidate: handleIceCandidate,
    onTrack: handleTrack,
    onNegotiationNeeded: handleNegotiationNeeded,
    onIceCandidateError: handleIceCandidateError,
    ...statusHandlers,
  });
};
