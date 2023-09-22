import { useProjector } from '@pages/kino/projector/context';
import { Button } from '@pages/kino/components/Button';
import { useConnect1 } from './useConnect1';

export const Connect = () => {
  const {
    statusRecord: { channelState },
  } = useProjector();
  const isDisabled = false; //channelState === 'open'
  const { isLoading, handler } = useConnect1();

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
