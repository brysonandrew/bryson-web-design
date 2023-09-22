import { useProjector } from '@pages/kino/projector/context';
import { Button } from '@pages/kino/components/Button';
import { useConnect } from './useConnect';

export const Connect = () => {
  const {
    statusRecord: { channelState },
  } = useProjector();
  const isDisabled = false; //channelState === 'open'
  const { isLoading, handler } = useConnect();

  return (
    <Button
      disabled={isDisabled}
      isLoading={isLoading}
      onClick={handler}
    >
      Connect
    </Button>
  );
};
