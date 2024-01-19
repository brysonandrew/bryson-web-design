import { useProjector } from '@pages/_workshop/kino/projector/context';
import { Button } from '@pages/_workshop/kino/components/Button';
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
