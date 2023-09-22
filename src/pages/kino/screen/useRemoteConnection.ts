import { useConnectionListeners } from '../hooks/useConnectionListeners';
import { useReceiveChannel } from './useReceiveChannel';
import { useScreen } from './context';
import { useIceCandidate } from '../hooks/useIceCandidate';
import { useChannel } from '../hooks/useChannel';
import { OFFER_KEY } from '../hooks/signaling/config';

export const useRemoteConnection = () => {
  const { connection, statusHandlers, onLog, videoRef } =
    useScreen();
  const channel = useChannel({ connection, onLog, keys: [OFFER_KEY] });
  const handleReceiveChannel = useReceiveChannel();

  const handleDataChannel = (
    event: RTCDataChannelEvent,
  ) => {
    onLog('╰┈➤ data channel...');
    console.log(event);
    handleReceiveChannel(event);
  };

  const handleIceCandidate = useIceCandidate({
    channel,
    onLog,
  });

  const handleTrack = (event: RTCTrackEvent) => {
    onLog('🎥 track received...');
    if (!videoRef.current) {
      onLog('⚠ no video ref');
      return;
    }
    if (!('srcObject' in videoRef.current)) {
      onLog('⚠ no src object');
      return;
    }
    if (event.streams.length < 1) {
      onLog('⚠ no streams available');
      return;
    }
    const stream: MediaStream = event.streams[0];
    videoRef.current.srcObject = stream;
    console.log(event);
  };

  const handleNegotiationNeeded = (event: Event) => {
    onLog('🤝 negotiation needed...');
    console.log(event);
  };

  const handleIceCandidateError = (event: Event) => {
    onLog('⚠ ice candidate error...');
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
