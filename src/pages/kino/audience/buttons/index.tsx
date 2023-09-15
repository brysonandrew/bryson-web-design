import { P1 } from '@components/space/P1';
import { Connect } from './connect';
import { Disconnect } from './disconnect';

export const Buttons = () => (
  <div className='row justify-around w-full'>
    <Connect />
    <P1 />
    <Disconnect />
  </div>
);
