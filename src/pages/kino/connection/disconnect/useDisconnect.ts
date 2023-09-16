import { useKino } from '../../context';

export const useDisconnect = () => {
  const {
    sendChannel,
    localConnection,
    remoteConnection,
    receiveChannel,
    onLog,
  } = useKino();

  const handler = async () => {
    onLog('disconnecting...');
    try {
      sendChannel.close();
      if (receiveChannel) {
        receiveChannel.close();
      }
      localConnection.close();
      remoteConnection.close();
    } catch (error) {
      onLog('error disconnecting');
      console.error(error);
    } finally {
      onLog('disconnected');
    }
  };

  return handler;
};
