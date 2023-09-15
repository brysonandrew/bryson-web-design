import { Button } from '@pages/kino/common/Button';
import { useKino } from '../../../context';
import { useDisconnectPeers } from './useDisconnectPeers';

export const Disconnect = () => {
  const { localState } = useKino();
  const handleDisconnectPeers = useDisconnectPeers();

  return (
    <Button
      disabled={localState !== 'open'}
      onClick={handleDisconnectPeers}
    >
      <pre>Disconnect</pre>
    </Button>
  );
};
