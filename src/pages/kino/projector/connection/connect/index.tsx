import { useProjector } from '@pages/kino/projector/context';
import { useConnect } from './useConnect';
import { Button } from '@pages/kino/components/Button';

export const Connect = () => {
  const {
    statusRecord: { channelState },
  } = useProjector();
  const { isLoading, handler } = useConnect();

  return (
    <Button
      disabled={channelState === 'open'}
      isLoading={isLoading}
      onClick={handler}
    >
      Connect
    </Button>
  );
};
