import { Types } from 'ably';
import {
  ANSWER_KEY,
  CANDIDATE_KEY,
  DISCONNECT_KEY,
  OFFER_KEY,
} from './config';
import {
  TLogHandler,
  TMessage,
  TSignalingType,
} from '@pages/kino/config/types';

type TConfig = {
  channel: Types.RealtimeChannelPromise;
  connection: RTCPeerConnection;
  onLog: TLogHandler;
};
export const useSignaling = ({
  channel,
  connection,
  onLog,
}: TConfig) => {
  const handler = (
    message: TMessage,
    keys: TSignalingType[],
  ) => {
    try {
      switch (message.name) {
        case OFFER_KEY: {
          if (!keys.includes(OFFER_KEY)) {
            console.log('CANCELLED ' + OFFER_KEY);
            break;
          }
          onLog('offer received...');
          console.log(OFFER_KEY);
          console.log(message.data);

          const resolve = async () => {
            const offer: RTCSessionDescriptionInit =
              JSON.parse(message.data[OFFER_KEY]);
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
          resolve();
          break;
        }

        case ANSWER_KEY: {
          if (!keys.includes(ANSWER_KEY)) {
            console.log('CANCELLED ' + ANSWER_KEY);
            break;
          }
          onLog('👂 answer received...');
          console.log(ANSWER_KEY);
          console.log(message.data);
          const answer: RTCSessionDescriptionInit =
            JSON.parse(message.data[ANSWER_KEY]);
          connection.setRemoteDescription(answer);
        }

        case CANDIDATE_KEY: {
          console.log(CANDIDATE_KEY);
          console.log(message.data);
          onLog('🤝 candidate received...');
          const candidate: RTCIceCandidateInit = JSON.parse(
            message.data[CANDIDATE_KEY],
          );
          connection.addIceCandidate(candidate);
          break;
        }

        case DISCONNECT_KEY: {
          connection.close();
          break;
        }

        default: {
          onLog(`⚠️ unhandled message ${message.name}`);
          onLog(JSON.stringify(message));
          console.log('unhandled', message);
          break;
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return handler;
};
