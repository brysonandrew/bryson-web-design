import { CANDIDATE_KEY, DISCONNECT_KEY } from './config';
import {
  TLogHandler,
  TMessage,
} from '@pages/kino/config/types';
import { resolveErrorMessage } from '@pages/kino/utils/resolveErrorMessage';

type TConfig = {
  connection: RTCPeerConnection;
  onLog: TLogHandler;
};
export const useSignaling = ({
  connection,
  onLog,
}: TConfig) => {
  const handler = (message: TMessage) => {
    try {
      switch (message.name) {
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
      resolveErrorMessage(error, onLog);
      console.error(error);
    }
  };

  return handler;
};
