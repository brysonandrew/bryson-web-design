import { P2 } from '@components/space/P2';
import { useRemoteConnection } from './useRemoteConnection';
import { Header } from '../components/Header';
import { Messages } from './components/Messages';
import { useKino } from '../context';

export const Screen = () => {
  const { remoteState } = useKino();
  useRemoteConnection();
  return (
    <div>
      <Header left='screen' right={remoteState} />
      <P2 />
      <Messages />
    </div>
  );
};
