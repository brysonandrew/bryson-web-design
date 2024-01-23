import { OFFER_KEY } from '@pages/kino/hooks/signaling/config';
import { useProjector } from '@pages/kino/projector/context';
import { TError } from '@t/index';
import { useState } from 'react';
import { resolveErrorMessage } from '@brysonandrew/color/utils/resolveErrorMessage';

export const useConnect = () => {
  const [isLoading, setLoading] = useState(false);
  const { signaling, connection, onLog } = useProjector();

  const handler = async () => {
    setLoading(true);
    onLog('establishing connection...');
    try {
      onLog('creating offer...');
      const offer = await connection.createOffer();
      onLog('setting offer to local description...');
      signaling.postMessage({
        type: OFFER_KEY,
        offer: JSON.stringify(offer),
      });
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
