import { useProjector } from './context';
import { useConnectionListeners } from '../hooks/useConnectionListeners';
import { useChannel } from 'ably/react';
import { useState } from 'react';
import {
  ANSWER_KEY,
  CHANNEL_KEY,
} from '../hooks/signaling/config';
import { useIceCandidate } from '../hooks/useIceCandidate';
import { useSignaling } from '../hooks/signaling/useSignaling';
import { TMessages, TMessage } from '../config/types';

export const useLocalConnection = () => {
  const {
    connection,
    statusHandlers,
    onLog,
    onUpdateStatusRecord,
  } = useProjector();

  const [messages, updateMessages] = useState<TMessages>(
    [],
  );

  const handleSignal = useSignaling({
    connection,
    onLog,
  });

  const { channel } = useChannel(
    CHANNEL_KEY,
    (message: TMessage) => {
      if (message.name === ANSWER_KEY) {
        onLog('👂 answer received...');
        const answer: RTCSessionDescriptionInit =
          JSON.parse(message.data.answer);
        connection.setRemoteDescription(answer);
      } else {
        handleSignal(message);
      }
      updateMessages((prev) => [...prev, message]);
    },
  );

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
  };

  const handleIceCandidate = useIceCandidate(channel);

  const handleNegotiationNeeded = (event: Event) => {
    console.log('🤝 ⚠️ negotiation needed');
    console.log(event);
  };

  const handleIceCandidateError = (event: Event) => {
    console.log('⚠️ ice candidate error');
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
