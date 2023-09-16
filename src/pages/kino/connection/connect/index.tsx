import { Button } from '@pages/kino/components/Button';
import { useKino } from '../../context';
import { useConnect } from './useConnect';

export const Connect = () => {
  const {
    statusRecord: { remoteChannelState },
  } = useKino();
  const handleConnect = useConnect();

  return (
    <Button
      disabled={remoteChannelState === 'open'}
      onClick={handleConnect}
    >
      <>Connect</>
    </Button>
  );
};
