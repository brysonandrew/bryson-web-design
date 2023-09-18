import { VOIDOP } from '@constants/functions';
import { TLogHandler } from '../config/types';
import { useChannelListeners } from './useChannelListeners';

type TConfig = {
  channel: RTCDataChannel | null;
  onUpdateStatusRecord: () => void;
  onLog: TLogHandler;
};
export const useChannel = ({
  channel,
  onUpdateStatusRecord,
  onLog = VOIDOP,
}: TConfig) => {
  const handleMessage = (event: MessageEvent) => {
    onLog('💬 channel message');
    console.log(event);
  };

  const handleError = (event: Event) => {
    console.log('⚠ channel error');
    console.log(event);
  };

  useChannelListeners({
    channel,
    onChannelStatusChange: onUpdateStatusRecord,
    onMessage: handleMessage,
    onError: handleError,
  });
};
