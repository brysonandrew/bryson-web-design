import { Types } from 'ably';
import { CANDIDATE_KEY } from './signaling/config';
import { TLogHandler } from '../config/types';

type TConfig = {
  channel: Types.RealtimeChannelPromise;
  onLog: TLogHandler;
};
export const useIceCandidate = ({
  channel,
  onLog,
}: TConfig) => {
  const handler = async (
    event: RTCPeerConnectionIceEvent,
  ) => {
    const candidate = event.candidate;
    if (!candidate) {
      onLog('no candidate from event');
      return;
    }
    onLog('adding ice candidate...');
    const message = {
      type: CANDIDATE_KEY,
      candidate: JSON.stringify(candidate),
    };
    channel.publish(CANDIDATE_KEY, message);
  };
  return handler;
};
