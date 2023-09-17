import { Subtitle } from '../../components/Subtitle';
import { Stream } from '../stream';
import { Status as _Status } from '../../components/status';

export const Status = () => {
  return (
    <div className='row-space'>
      <Subtitle>LOCAL</Subtitle>
      <Stream />
      <_Status />
    </div>
  );
};
