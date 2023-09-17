import { useEffect } from 'react';
import {
  ANSWER_KEY,
  CANDIDATE_KEY,
  DISCONNECT_KEY,
  OFFER_KEY,
} from './config';
import { TLogHandler } from '@pages/kino/config/types';

type TConfig = {
  signaling: BroadcastChannel;
  connection: RTCPeerConnection;
  onLog: TLogHandler
};
export const useSignaling = ({
  signaling,
  connection,
  onLog
}: TConfig) => {
  useEffect(() => {
    signaling.onmessage = (event) => {
      console.log('MESSAGE ');
      console.log(event);
      try {
        switch (event.data.type) {
          case OFFER_KEY:
            onLog("offer received...")
            const resolve = async () => {
              const offer: RTCSessionDescriptionInit =
                JSON.parse(event.data.offer);
              await connection.setRemoteDescription(offer);
              const answer: RTCSessionDescriptionInit =
                await connection.createAnswer();
              console.log(answer);
              signaling.postMessage({
                type: ANSWER_KEY,
                answer: JSON.stringify(answer),
              });
              connection.setLocalDescription(answer);
            };
            resolve();
            break;
          case ANSWER_KEY:
            onLog("answer received...")
            const answer: RTCSessionDescriptionInit =
              JSON.parse(event.data.answer);

            console.log(answer);
            connection.setRemoteDescription(answer);
            break;
          case CANDIDATE_KEY:
            onLog("candidate received...")
            const candidate: RTCIceCandidateInit =
              JSON.parse(event.data.candidate);
            console.log(candidate);
            connection.addIceCandidate(candidate);
            break;
          case DISCONNECT_KEY:

          default:
            console.log('unhandled', event);
            break;
        }
      } catch (error) {
        console.error(error);
      }
    };
  }, []);
};
