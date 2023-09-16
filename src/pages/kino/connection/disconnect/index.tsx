import { Button } from '@pages/kino/components/Button';
import { useDisconnect } from './useDisconnect';
import { useProjector } from '@pages/kino/context/projector';

export const Disconnect = () => {
  const {
    statusRecord: { remoteChannelState },
  } = useProjector();
  const { isLoading, handler } = useDisconnect();

  return (
    <Button
      isLoading={isLoading}
      disabled={remoteChannelState !== 'open'}
      onClick={handler}
    >
      Disconnect
    </Button>
  );
};
