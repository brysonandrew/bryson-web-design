import { useChannelListeners } from '@pages/kino/hooks/useChannelListeners';
import { useKino } from '../context';

export const useReceiveChannel = () => {
  const {
    receiveChannel,
    onUpdateReceiveChannel,
    onUpdateStatusRecord,
  } = useKino();

  const handler = (event: RTCDataChannelEvent) => {
    const receiveChannel = event.channel;
    onUpdateReceiveChannel(receiveChannel);
  };

  const handleReceiveMessage = (event: MessageEvent) => {
    console.log(event.data);
  };

  const handleError = (event: Event) => {
    console.log(event);
  };

  useChannelListeners({
    channel: receiveChannel,
    onMessage: handleReceiveMessage,
    onSendChannelStatusChange: onUpdateStatusRecord,
    onError: handleError,
  });

  return handler;
};
