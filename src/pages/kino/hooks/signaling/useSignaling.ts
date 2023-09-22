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
            const cancelled = 'CANCELLED ' + OFFER_KEY;
            console.log(cancelled);
            onLog(cancelled);
            break;
          }

          onLog('offer received...');
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
            const cancelled = 'CANCELLED ' + ANSWER_KEY;
            console.log(cancelled);
            onLog(cancelled);
            break;
          }
          onLog('👂 answer received...');
          const answer: RTCSessionDescriptionInit =
            JSON.parse(message.data[ANSWER_KEY]);
          connection.setRemoteDescription(answer);
          break;
        }

        case CANDIDATE_KEY: {
          const candidate: RTCIceCandidateInit = JSON.parse(
            message.data[CANDIDATE_KEY],
          );
          if (connection.remoteDescription) {
            onLog('🤝 candidate added...');
            connection.addIceCandidate(candidate);
          } else {
            onLog(
              '🤝 candidate failed as description is null...',
            );
          }

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
