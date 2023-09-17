import { Button } from '@pages/kino/components/Button';
import { useDisconnect } from './useDisconnect';

export const Disconnect = () => {
  const { isLoading, handler } = useDisconnect();

  return (
    <Button isLoading={isLoading} onClick={handler}>
      Disconnect
    </Button>
  );
};
