import { Button } from '@pages/kino/components/Button';
import { useKino } from '../../context';
import { useDisconnectPeers } from './useDisconnectPeers';

export const Disconnect = () => {
  const { remoteState } = useKino();
  const handleDisconnectPeers = useDisconnectPeers();

  return (
    <Button
      disabled={remoteState !== 'open'}
      onClick={handleDisconnectPeers}
    >
      <>Disconnect</>
    </Button>
  );
};
