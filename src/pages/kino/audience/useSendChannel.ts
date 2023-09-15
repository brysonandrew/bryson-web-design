import { useKino } from '../context';
import { useChannelListeners } from '../hooks/useChannelListeners';

export const useSendChannel = () => {
  const { sendChannel, onUpdateLocalState } = useKino();

  const handleSendChannelStatusChange = () => {
    if (sendChannel) {
      const state = sendChannel.readyState;
      onUpdateLocalState(state);
    }
  };
  const handleMessage = (event: MessageEvent) => {
    console.log(event, 'send channel message');
  };
  const handleError = (event: Event) => {
    console.log(event, 'send channel error');
  };
  useChannelListeners({
    channel: sendChannel,
    onSendChannelStatusChange:
      handleSendChannelStatusChange,
    onMessage: handleMessage,
    onError: handleError,
  });
};
