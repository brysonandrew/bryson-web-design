import { useProjector } from '../context/projector';
import { useChannelListeners } from '../hooks/useChannelListeners';

export const useReceiveChannel = () => {
  const {
    receiveChannel,
    onUpdateReceiveChannel,
    onUpdateStatusRecord,
    onLog,
  } = useProjector();

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
    channel: receiveChannel,
    onMessage: handleMessage,
    onSendChannelStatusChange: onUpdateStatusRecord,
    onError: handleError,
  });

  return initiate;
};
