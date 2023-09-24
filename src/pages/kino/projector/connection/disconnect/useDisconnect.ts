import { useState } from 'react';
import { useProjector } from '../../context';
import { DISCONNECT_KEY } from '@pages/kino/hooks/signaling/config';
import { resolveErrorMessage } from '@pages/kino/utils/resolveErrorMessage';

export const useDisconnect = () => {
  const [isLoading, setLoading] = useState(false);
  const { connection, onLog, channel } = useProjector();

  const handler = async () => {
    onLog('disconnecting...');
    setLoading(true);
    try {
      await channel.publish(DISCONNECT_KEY, {
        type: DISCONNECT_KEY,
      });
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
