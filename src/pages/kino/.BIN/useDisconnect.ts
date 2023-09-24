import { useState } from 'react';
import { useProjector } from '../projector/context';
import { DISCONNECT_KEY } from '@pages/kino/hooks/signaling/config';
import { resolveErrorMessage } from '../utils/resolveErrorMessage';

export const useDisconnect = () => {
  const [isLoading, setLoading] = useState(false);
  const { signaling, sendChannel, connection, onLog } =
    useProjector();

  const handler = async () => {
    onLog('disconnecting...');
    setLoading(true);
    try {
      sendChannel.close();
      signaling.postMessage({ type: DISCONNECT_KEY });
      connection.close();
    } catch (error) {
      onLog('⚠ error disconnecting');
      console.error(error);
      resolveErrorMessage(error, onLog);
    } finally {
      onLog('disconnected');
      setLoading(false);
    }
  };

  return { isLoading, handler };
};
