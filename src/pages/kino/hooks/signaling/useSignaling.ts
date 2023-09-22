import { CANDIDATE_KEY, DISCONNECT_KEY } from './config';
import {
  TLogHandler,
  TMessage,
} from '@pages/kino/config/types';

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
      switch (message.data.type) {
        case CANDIDATE_KEY:
          onLog('🤝 candidate received...');
          const candidate: RTCIceCandidateInit = JSON.parse(
            message.data.candidate,
          );
          connection.addIceCandidate(candidate);
          break;
        case DISCONNECT_KEY:
          connection.close();
          break;
        default:
          onLog("⚠️ unhandled message")
          console.log('unhandled', message);
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return handler;
};
