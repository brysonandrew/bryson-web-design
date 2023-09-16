import { Connect } from './connect';
import { Disconnect } from './disconnect';
import { P4 } from '@components/space/P4';

export const Connection = () => (
  <div className='row justify-start w-full'>
    <Connect /> 
    <P4 />
    <Disconnect />
  </div>
);
