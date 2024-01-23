import { useProjector } from './context';
import { useSignaling } from '../hooks/signaling/useSignaling';
import {
  ANSWER_KEY,
  CHANNEL_KEY,
} from '../hooks/signaling/config';
import { useChannel } from 'ably/react';
import { TMessage } from '@brysonandrew/color/config/types';

export const useLocalChannel = () => {
  const { connection, onLog } = useProjector();

  const handleSignal = useSignaling({
    connection,
    onLog,
  });

  useChannel(CHANNEL_KEY, async (message: TMessage) => {
    console.log(message);
    if (message.name === ANSWER_KEY) {
      const resolve = async () => {
        onLog('👂 answer received...');
        const answer: RTCSessionDescriptionInit =
          JSON.parse(message.data[ANSWER_KEY]);
        console.log(answer);
        await connection.setRemoteDescription(answer);
      };
      await resolve();
    } else {
      handleSignal(message);
    }
  });
};
