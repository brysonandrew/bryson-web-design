import { useKino } from '../context';
import { useChannelListeners } from '../hooks/useChannelListeners';

export const useSendChannel = () => {
  const { sendChannel, onUpdateStatusRecord, onLog } =
    useKino();

  const handleMessage = (event: MessageEvent) => {
    onLog('send channel message');
    console.log(event);
  };

  const handleError = (event: Event) => {
    onLog('send channel error');
    console.log(event);
  };
  
  useChannelListeners({
    channel: sendChannel,
    onSendChannelStatusChange: onUpdateStatusRecord,
    onMessage: handleMessage,
    onError: handleError,
  });
};
