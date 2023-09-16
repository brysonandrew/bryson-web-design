import { useProjector } from '../context/projector';
import { useChannelListeners } from '../hooks/useChannelListeners';

export const useSendChannel = () => {
  const { sendChannel, onUpdateStatusRecord, onLog } =
    useProjector();

  const handleMessage = (event: MessageEvent) => {
    onLog('💬 send channel message');
    console.log(event);
  };

  const handleError = (event: Event) => {
    console.log('⚠ send channel error');
    console.log(event);
  };

  useChannelListeners({
    channel: sendChannel,
    onSendChannelStatusChange: onUpdateStatusRecord,
    onMessage: handleMessage,
    onError: handleError,
  });
};
