import { Button } from '@pages/kino/components/Button';
import { useKino } from '../../context';
import { useConnect } from './useConnect';

export const Connect = () => {
  const { remoteState } = useKino();
  const handleConnect = useConnect();
 
  return (
    <Button
      disabled={remoteState === 'open'}
      onClick={handleConnect}
    >
      <>Connect</>
    </Button>
  );
};
