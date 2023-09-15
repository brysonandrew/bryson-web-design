import { useState } from 'react';
import { useKino } from '../context';

export const useReceiveChannel = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const { onUpdateReceiveChannel, onUpdateRemoteState } =
    useKino();

  const handler = (event: RTCDataChannelEvent) => {
    console.log('HANDLE RECEIVE MESSAGE');

    const handleReceiveMessage = (event: MessageEvent) => {
      setMessages((prev) => [...prev, event.data]);
    };

    const handleReceiveChannelStatusChange = () => {
      if (receiveChannel) {
        onUpdateRemoteState(receiveChannel.readyState);
        console.log(
          `Receive channel's status has changed to ${receiveChannel.readyState}`,
        );
      }
    };

    const receiveChannel = event.channel;
    receiveChannel.onmessage = handleReceiveMessage;
    receiveChannel.onopen =
      handleReceiveChannelStatusChange;
    receiveChannel.onclose =
      handleReceiveChannelStatusChange;
    onUpdateReceiveChannel(receiveChannel);
  };

  return { messages, handler };
};
