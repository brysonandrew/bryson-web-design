import { VOIDOP } from '@constants/functions';
import {
  TLogHandler,
  TUpdateChannelHandler,
} from '../config/types';
import { useChannelListeners } from './useChannelListeners';

type TConfig = {
  channel: RTCDataChannel | null;
  onUpdateReceiveChannel: TUpdateChannelHandler;
  onUpdateStatusRecord: () => void;
  onLog?: TLogHandler;
};
export const useReceiveChannel = ({
  channel,
  onUpdateReceiveChannel,
  onUpdateStatusRecord,
  onLog = VOIDOP,
}: TConfig) => {
  const initiate = (event: RTCDataChannelEvent) => {
    onLog('🚀 receive channel initiating...');
    const receiveChannel: RTCDataChannel = event.channel;
    onUpdateReceiveChannel(receiveChannel);
  };

  const handleMessage = (event: MessageEvent) => {
    onLog('💬 receive channel message');
    console.log(event);
  };

  const handleError = (event: Event) => {
    onLog('⚠ receive channel error');
    console.log(event);
  };

  useChannelListeners({
    channel,
    onMessage: handleMessage,
    onSendChannelStatusChange: onUpdateStatusRecord,
    onError: handleError,
  });

  return initiate;
};
