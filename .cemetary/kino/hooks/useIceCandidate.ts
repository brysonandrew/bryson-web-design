import { Types } from 'ably';
import { CANDIDATE_KEY } from './signaling/config';
import { TLogHandler } from '@brysonandrew/color/config/types';

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
    if (candidate) {
      onLog('adding ice candidate...');
      const message = {
        type: CANDIDATE_KEY,
        [CANDIDATE_KEY]: JSON.stringify(candidate),
      };
      await channel.publish(CANDIDATE_KEY, message);
    } else {
      onLog('no candidate from event');
      console.log(event);
    }
  };

  return handler;
};
