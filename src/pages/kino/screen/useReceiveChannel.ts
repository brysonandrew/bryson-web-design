import { useScreen } from './context';

export const useReceiveChannel = () => {
  const { onUpdatePartialStatusRecord, onLog } =
    useScreen();
  const initiate = (event: RTCDataChannelEvent) => {
    onLog('🚀 channel initiating...');

    const receiveChannel: RTCDataChannel = event.channel;

    receiveChannel.onbufferedamountlow = (event) => {
      onLog('channel buffered amount low...');
      console.log(event);
    };
    receiveChannel.onclose = (event) => {
      onLog('close channel...');
      console.log(event);
    };
    receiveChannel.onclosing = (event) => {
      onLog('closing channel...');
      console.log(event);
    };
    receiveChannel.onopen = (event) => {
      onLog('open channel...');
      console.log(event);
    };
    receiveChannel.onerror = (event) => {
      onLog('channel error...');
      console.log(event);
    };
    onUpdatePartialStatusRecord({
      channelState: receiveChannel.readyState,
    });
  };

  return initiate;
};
