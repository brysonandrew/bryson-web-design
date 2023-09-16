import { useState } from 'react';
import { useProjector } from '../../context/projector';

export const useDisconnect = () => {
  const [isLoading, setLoading] = useState(false);

  const {
    sendChannel,
    localConnection,
    remoteConnection,
    receiveChannel,
    onLog,
  } = useProjector();

  const handler = async () => {
    onLog('disconnecting...');
    setLoading(true);
    try {
      sendChannel.close();
      if (receiveChannel) {
        receiveChannel.close();
      }
      localConnection.close();
      remoteConnection.close();
    } catch (error) {
      onLog('⚠ error disconnecting');
      console.error(error);
    } finally {
      onLog('disconnected');
      setLoading(false);
    }
  };

  return { isLoading, handler };
};
