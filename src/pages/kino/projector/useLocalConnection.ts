import { useProjector } from './context';
import { useConnectionListeners } from '../hooks/useConnectionListeners';
import { useIceCandidate } from '../hooks/useIceCandidate';
import { useSignaling } from '../hooks/signaling/useSignaling';
import {
  ANSWER_KEY,
  CHANNEL_KEY,
} from '../hooks/signaling/config';
import { useChannelStateListener } from 'ably/react';
import { TMessage } from '../config/types';

export const useLocalConnection = () => {
  const {
    connection,
    statusHandlers,
    onLog,
    onUpdateStatusRecord,
    channel,
  } = useProjector();

  const handleDataChannel = (
    event: RTCDataChannelEvent,
  ) => {
    onLog('📺 data channel');
    console.log(event);
    onUpdateStatusRecord();
  };

  const handleTrack = (event: RTCTrackEvent) => {
    onLog('🎥 track received');
    console.log(event);
    onUpdateStatusRecord();
  };

  const handleIceCandidate = useIceCandidate({
    channel,
    onLog,
  });

  const handleNegotiationNeeded = (event: Event) => {
    console.log('🤝 ⚠️ negotiation needed');
    console.log(event);
    onUpdateStatusRecord();
  };

  const handleIceCandidateError = (event: Event) => {
    console.log('⚠️ ice candidate error');
    console.log(event);
    onUpdateStatusRecord();
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
