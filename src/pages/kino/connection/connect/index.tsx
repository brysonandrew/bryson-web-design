import { useProjector } from '@pages/kino/context/projector';
import { useConnect } from './useConnect';
import { Button } from '@pages/kino/components/Button';

export const Connect = () => {
  const {
    statusRecord: { remoteChannelState },
  } = useProjector();
  const { isLoading, handler } = useConnect();

  return (
    <Button
      disabled={remoteChannelState === 'open'}
      isLoading={isLoading}
      onClick={handler}
    >
      Connect
    </Button>
  );
};
