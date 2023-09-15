import { useEffect } from 'react';
import { useKino } from '../context';

export const useSendChannel = () => {
  const { sendChannel, onUpdateLocalState } = useKino();

  useEffect(() => {
    const handleSendChannelStatusChange = () => {
      console.log('handleSendChannelStatusChange');
      if (sendChannel) {
        const state = sendChannel.readyState;
        onUpdateLocalState(state);
      }
    };
    sendChannel.onopen = handleSendChannelStatusChange;
    sendChannel.onclose = handleSendChannelStatusChange;
  }, []);
};
