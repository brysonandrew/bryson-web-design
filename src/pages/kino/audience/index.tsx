import { Video } from './stream';
import { useLocalConnection } from './useLocalConnection';
import { P4 } from '@components/space/P4';
import { Header } from '../components/Header';

export const Audience = () => {
  const localState = useLocalConnection();

  return (
    <div>
      <Header left='audience' right={localState} />
      <P4 />
      <Video />
    </div>
  );
};
