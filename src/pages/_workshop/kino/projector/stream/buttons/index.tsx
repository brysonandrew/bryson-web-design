import { P2 } from '@lib/components/layout/space/P2';
import { Start } from './Start';
import { Stop } from './Stop';

export const Buttons = () => {
  return (
    <div className='row'>
      <Start />
      <P2 />
      <Stop />
    </div>
  );
};
