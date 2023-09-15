import { Button } from '@pages/kino/common/Button';
import { useKino } from '../../../context';
import { useConnect } from './useConnect';

export const Connect = () => {
  const { localState } = useKino();
  const handleConnect = useConnect();
 
  return (
    <Button
      disabled={localState === 'open'}
      onClick={handleConnect}
    >
      <pre>Connect</pre>
    </Button>
  );
};
