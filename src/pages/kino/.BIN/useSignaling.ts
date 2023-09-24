import { useEffect } from 'react';
import {
  ANSWER_KEY,
  CANDIDATE_KEY,
  DISCONNECT_KEY,
  OFFER_KEY,
} from '../hooks/signaling/config';
import { TLogHandler } from '@pages/kino/config/types';
import { resolveErrorMessage } from '../utils/resolveErrorMessage';

type TConfig = {
  signaling: BroadcastChannel;
  connection: RTCPeerConnection;
  onLog: TLogHandler;
};
export const useSignaling = ({
  signaling,
  connection,
  onLog,
}: TConfig) => {
  useEffect(() => {
    signaling.onmessage = (event) => {
      try {
        switch (event.data.type) {
          case OFFER_KEY:
            onLog('offer received...');
            const resolve = async () => {
              const offer: RTCSessionDescriptionInit =
                JSON.parse(event.data.offer);
              await connection.setRemoteDescription(offer);
              onLog('answering offer...');
              const answer: RTCSessionDescriptionInit =
                await connection.createAnswer();
              signaling.postMessage({
                type: ANSWER_KEY,
                answer: JSON.stringify(answer),
              });
              connection.setLocalDescription(answer);
            };
            resolve();
            break;
          case ANSWER_KEY:
            onLog('answer received...');
            const answer: RTCSessionDescriptionInit =
              JSON.parse(event.data.answer);
            connection.setRemoteDescription(answer);
            break;
          case CANDIDATE_KEY:
            onLog('candidate received...');
            const candidate: RTCIceCandidateInit =
              JSON.parse(event.data.candidate);
            connection.addIceCandidate(candidate);
            break;
          case DISCONNECT_KEY:
            connection.close();
            break;
          default:
            console.log('unhandled', event);
            break;
        }
      } catch (error) {
        resolveErrorMessage(error, onLog);

        console.error(error);
      }
    };
  }, []);
};
