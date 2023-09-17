import { useProjector } from '@pages/kino/context/projector';
import { TError } from '@t/index';
import { useState } from 'react';

// const s = new SignalingChannel()

export const useConnect = () => {
  const [isLoading, setLoading] = useState(false);
  const { sendChannel, localConnection, remoteConnection, onLog } =
    useProjector();

  const handler = async () => {
    setLoading(true);
    onLog('establishing connection...');
    try {
      onLog('local creating offer...');
      const offer = await localConnection.createOffer();
      // onLog('■ DONE');
      onLog('local setting offer to local description...');
      await localConnection.setLocalDescription(offer);
      const localSessionDescription =
        localConnection.localDescription;
      if (!localSessionDescription) return null;
      onLog(
        'remote setting local description to remote description...',
      );
      //sendChannel.send(localSessionDescription)
      await remoteConnection.setRemoteDescription(
        localSessionDescription,
      );

      onLog('remote creating answer...');
      const answer = await remoteConnection.createAnswer();
      onLog(
        'remote setting answer to local description...',
      );
      await remoteConnection.setLocalDescription(answer);
      const remoteSessionDescription =
        remoteConnection.localDescription;
      if (!remoteSessionDescription) return null;
      onLog(
        'local setting remote description to remote description...',
      );
      await localConnection.setRemoteDescription(
        remoteSessionDescription,
      );
    } catch (error: TError) {
      onLog('⚠ connection failed');
      console.error(error);
    } finally {
      onLog('connected');
      setLoading(false);
    }
  };

  return { isLoading, handler };
};
