import { useScreen } from './context';
import { useSignaling } from '../hooks/signaling/useSignaling';
import {
  useChannel,
  useChannelStateListener,
} from 'ably/react';
import {
  ANSWER_KEY,
  CHANNEL_KEY,
  OFFER_KEY,
} from '../hooks/signaling/config';
import { TMessage } from '../config/types';

export const useRemoteChannel = () => {
  const { connection, onLog, channel } = useScreen();

  const handleSignal = useSignaling({
    connection,
    onLog,
  });
  useChannel(CHANNEL_KEY, async (message: TMessage) => {
    console.log(message);
    if (message.name === OFFER_KEY) {
      onLog('offer received...');
      const resolve = async () => {
        const offer: RTCSessionDescriptionInit = JSON.parse(
          message.data[OFFER_KEY],
        );
        await connection.setRemoteDescription(offer);
        onLog('answering offer...');

        const answer: RTCSessionDescriptionInit =
          await connection.createAnswer();
        onLog('setting answer to remote...');
        await channel.publish(ANSWER_KEY, {
          type: ANSWER_KEY,
          [ANSWER_KEY]: JSON.stringify(answer),
        });
        onLog('setting answer to local...');
        await connection.setLocalDescription(answer);
      };
      await resolve();
    } else {
      handleSignal(message);
    }
  });
};
