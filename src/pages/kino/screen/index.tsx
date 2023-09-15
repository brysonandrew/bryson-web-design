import { P2 } from '@components/space/P2';
import { Subtitle } from '../common/Subtitle';
import { Title } from '../common/Title';
import { useRemoteConnection } from './useRemoteConnection';

export const Screen = () => {
  const { remoteState, messages } = useRemoteConnection();
  return (
    <div>
      <div className='row-space'>
        <Title>Screen</Title>
        <samp>{remoteState}</samp>
      </div>
      <P2 />
      <div>
        <Subtitle>Messages received:</Subtitle>
        <ul>
          {messages.map((m, index) => (
            <li key={`${index}`}>{m}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
