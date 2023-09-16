import { Subtitle } from '../components/Subtitle';
import { Connect } from './connect';
import { Disconnect } from './disconnect';
import { P4 } from '@components/space/P4';

export const Connection = () => (
  <div className='row-space'>
    <Subtitle>CONNECTION</Subtitle>
    <div className='row justify-start'>
      <Connect />
      <P4 />
      <Disconnect />
    </div>
  </div>
);
