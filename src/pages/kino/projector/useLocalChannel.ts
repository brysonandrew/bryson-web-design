import { useProjector } from './context';
import { useSignaling } from '../hooks/signaling/useSignaling';
import {
  ANSWER_KEY,
  CHANNEL_KEY,
} from '../hooks/signaling/config';
import { useChannelStateListener } from 'ably/react';
import { TMessage } from '../config/types';

export const useLocalChannel = () => {
  const { connection, onLog } = useProjector();

  const handleSignal = useSignaling({
    connection,
    onLog,
  });

  useChannelStateListener(
    CHANNEL_KEY,
    (message: TMessage) => {
      if (message.name === ANSWER_KEY) {
        const resolve = async () => {
          onLog('👂 answer received...');
          const answer: RTCSessionDescriptionInit =
            JSON.parse(message.data[ANSWER_KEY]);
          await connection.setRemoteDescription(answer);
        };
        resolve();
      } else {
        handleSignal(message);
      }
    },
  );
};
