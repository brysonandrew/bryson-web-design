import { P2 } from '@components/space/P2';
import { Message } from './message';
import { Title } from '../common/Title';
import { useLocalConnection } from './useLocalConnection';

export const Audience = () => {
  const localState = useLocalConnection();
console.log(localState)
  return (
    <div>
      <div className='row-space'>
        <Title>audience</Title>
        <samp>{localState}</samp>
      </div>
      <P2 />
      <Message />
    </div>
  );
};
