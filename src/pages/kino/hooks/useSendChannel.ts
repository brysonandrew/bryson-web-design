import { VOIDOP } from '@constants/functions';
import { TLogHandler } from '../config/types';
import { useChannelListeners } from './useChannelListeners';

type TConfig = {
  channel: RTCDataChannel;
  onUpdateStatusRecord: () => void;
  onLog: TLogHandler;
};
export const useSendChannel = ({
  channel,
  onUpdateStatusRecord,
  onLog = VOIDOP,
}: TConfig) => {
  const handleMessage = (event: MessageEvent) => {
    onLog('💬 send channel message');
    console.log(event);
  };

  const handleError = (event: Event) => {
    console.log('⚠ send channel error');
    console.log(event);
  };

  useChannelListeners({
    channel,
    onSendChannelStatusChange: onUpdateStatusRecord,
    onMessage: handleMessage,
    onError: handleError,
  });
};
