import { useEffect } from 'react';
import {
  ANSWER_KEY,
  CANDIDATE_KEY,
  DISCONNECT_KEY,
  OFFER_KEY,
} from './config';

type TConfig = {
  signaling: BroadcastChannel;
  connection: RTCPeerConnection;
};
export const useSignaling = ({
  signaling,
  connection,
}: TConfig) => {
  useEffect(() => {
    signaling.onmessage = (event) => {
      console.log('MESSAGE ');
      console.log(event);
      try {
        switch (event.data.type) {
          case OFFER_KEY:
            const resolve = async () => {
              const offer: RTCSessionDescriptionInit =
                event.data;
              await connection.setRemoteDescription(offer);
              const answer: RTCSessionDescriptionInit =
                await connection.createAnswer();
              signaling.postMessage({
                type: ANSWER_KEY,
                sdp: answer.sdp,
              });
              connection.setLocalDescription(answer);
            };
            resolve();
            break;
          case ANSWER_KEY:
            const answer: RTCSessionDescriptionInit =
              event.data;
            connection.setRemoteDescription(answer);
            break;
          case CANDIDATE_KEY:
            const candidate: RTCIceCandidateInit =
              event.data;
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

  return signaling;
};
