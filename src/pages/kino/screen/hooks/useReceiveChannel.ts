import { useKino } from '../../context';

export const useReceiveChannel = () => {
  const { onUpdateReceiveChannel, onUpdateRemoteState } =
    useKino();

  const handler = (event: RTCDataChannelEvent) => {
    const handleReceiveMessage = (event: MessageEvent) => {
      console.log(event.data);
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
    receiveChannel.onclosing =
      handleReceiveChannelStatusChange;
    receiveChannel.onerror = (e: Event) => {
      console.log(e, 'receive channel error');
    };
  };

  return handler;
};
