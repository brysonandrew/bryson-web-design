import { OFFER_KEY } from '@pages/_workshop/kino/hooks/signaling/config';
import { useProjector } from '@pages/_workshop/kino/projector/context';
import { resolveErrorMessage } from '@pages/_workshop/kino/utils/resolveErrorMessage';
import { TError } from '@brysonandrew/lib/types/dom';
import { useState } from 'react';

export const useConnect = () => {
  const [isLoading, setLoading] = useState(false);
  const { connection, onLog, channel } = useProjector();

  const handler = async () => {
    setLoading(true);
    onLog('establishing connection...');
    try {
      onLog('creating offer...');
      const offer = await connection.createOffer();
      console.log(offer);

      onLog('setting offer to remote...');
      await channel.publish(OFFER_KEY, {
        type: OFFER_KEY,
        [OFFER_KEY]: JSON.stringify(offer),
      });

      onLog('setting offer to local...');
      await connection.setLocalDescription(offer);
    } catch (error: TError) {
      onLog('⚠ connection failed');
      console.error(error);
      resolveErrorMessage(error, onLog);
    } finally {
      onLog('connection phase complete');
      setLoading(false);
    }
  };

  return { isLoading, handler };
};
