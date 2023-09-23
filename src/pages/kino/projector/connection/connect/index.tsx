import { useProjector } from '@pages/kino/projector/context';
import { Button } from '@pages/kino/components/Button';
import { useConnect } from './useConnect';

export const Connect = () => {
  const isDisabled = false;
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
