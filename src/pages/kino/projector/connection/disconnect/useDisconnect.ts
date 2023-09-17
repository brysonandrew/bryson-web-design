import { useState } from 'react';
import { useProjector } from '../../context';
import { DISCONNECT_KEY } from '@pages/kino/hooks/signaling/config';

export const useDisconnect = () => {
  const [isLoading, setLoading] = useState(false);

  const {
    signaling,
    sendChannel,
    connection,
    onLog,
  } = useProjector();

  const handler = async () => {
    onLog('disconnecting...');
    setLoading(true);
    try {
      sendChannel.close();
      signaling.postMessage({type: DISCONNECT_KEY});
      connection.close();
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
