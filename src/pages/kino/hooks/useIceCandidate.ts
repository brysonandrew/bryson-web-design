import { Types } from 'ably';
import { CANDIDATE_KEY } from './signaling/config';

export const useIceCandidate = (
  channel: Types.RealtimeChannelPromise,
) => {
  const handler = async (
    event: RTCPeerConnectionIceEvent,
  ) => {
    const candidate = event.candidate;
    if (!candidate) return;
    const message = {
      type: CANDIDATE_KEY,
      candidate: JSON.stringify(candidate),
      // sdpMid: candidate.sdpMid,
      // sdpMLineIndex: candidate.sdpMLineIndex
    };
    channel.publish(CANDIDATE_KEY, message);
  };
  return handler;
};
