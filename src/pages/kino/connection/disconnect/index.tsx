import { Button } from '@pages/kino/components/Button';
import { useKino } from '../../context';
import { useDisconnect } from './useDisconnect';

export const Disconnect = () => {
  const {
    statusRecord: { remoteChannelState },
  } = useKino();
  const handleDisconnect = useDisconnect();

  return (
    <Button
      disabled={remoteChannelState !== 'open'}
      onClick={handleDisconnect}
    >
      Disconnect
    </Button>
  );
};
