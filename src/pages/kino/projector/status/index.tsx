import { Subtitle } from '../../components/Subtitle';
import { Stream } from '../stream';
import { Status as _Status } from '../../components/status';
import { useProjector } from '../context';

export const Status = () => {
  const { statusRecord } = useProjector();

  return (
    <div className='row-space'>
      <Subtitle>STATUS</Subtitle>
      <Stream />
      <_Status statusRecord={statusRecord} />
    </div>
  );
};
