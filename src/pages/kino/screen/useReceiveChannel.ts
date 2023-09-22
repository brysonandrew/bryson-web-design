import { useScreen } from './context';

export const useReceiveChannel = () => {
  const { videoRef, onUpdatePartialStatusRecord, onLog } =
    useScreen();
  const initiate = (event: RTCDataChannelEvent) => {
    onLog('🚀 channel initiating...');
    const receiveChannel: RTCDataChannel = event.channel;
    receiveChannel.onbufferedamountlow = console.log;
    receiveChannel.onclose = console.log;
    receiveChannel.onclosing = console.log;
    receiveChannel.onopen = console.log;
    receiveChannel.onerror = console.log;
    onUpdatePartialStatusRecord({
      channelState: receiveChannel.readyState,
    });
  };

  return initiate;
};
