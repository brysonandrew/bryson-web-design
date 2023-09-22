import { useConnectionListeners } from '../hooks/useConnectionListeners';
import { useReceiveChannel } from './useReceiveChannel';
import { useScreen } from './context';
import { useChannel } from 'ably/react';
import {
  ANSWER_KEY,
  CHANNEL_KEY,
  OFFER_KEY,
} from '../hooks/signaling/config';
import { useIceCandidate } from '../hooks/useIceCandidate';
import { TMessage } from '../config/types';
import { useSignaling } from '../hooks/signaling/useSignaling';

export const useRemoteConnection = () => {
  const { connection, statusHandlers, onLog, videoRef } =
    useScreen();

  const handleSignaling = useSignaling({
    connection,
    onLog,
  });

  const { channel } = useChannel(
    CHANNEL_KEY,
    (message: TMessage) => {
      if (message.name === OFFER_KEY) {
        onLog('offer received...');
        const resolve = async () => {
          const offer: RTCSessionDescriptionInit =
            JSON.parse(message.data.offer);
          await connection.setRemoteDescription(offer);
          onLog('answering offer...');
          const answer: RTCSessionDescriptionInit =
            await connection.createAnswer();
          channel.publish(ANSWER_KEY, {
            type: ANSWER_KEY,
            answer: JSON.stringify(answer),
          });
          connection.setLocalDescription(answer);
        };
        resolve();
      } else {
        handleSignaling(message);
      }
    },
  );

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
