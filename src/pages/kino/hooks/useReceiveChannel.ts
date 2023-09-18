import {
  TLogHandler,
  TStatusRecordContext,
  TUpdateChannelHandler,
} from '../config/types';

type TConfig = Pick<
  TStatusRecordContext,
  'onUpdatePartialStatusRecord'
> & {
  onUpdateReceiveChannel: TUpdateChannelHandler;
  onLog: TLogHandler;
};
export const useReceiveChannel = ({
  onUpdateReceiveChannel,
  onUpdatePartialStatusRecord,
  onLog,
}: TConfig) => {
  const initiate = (event: RTCDataChannelEvent) => {
    onLog('🚀 receive channel initiating...');
    const receiveChannel: RTCDataChannel = event.channel;
    onUpdateReceiveChannel(receiveChannel);
    onUpdatePartialStatusRecord({
      channelState: receiveChannel.readyState,
    });
  };

  return initiate;
};
