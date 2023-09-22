import { Subtitle } from '../../components/Subtitle';
import { Status as _Status } from '../../components/status';
import { useProjector } from '../context';

export const Status = () => {
  const { statusRecord } = useProjector();

  return (
    <div className='row-space'>
      <Subtitle>STATUS</Subtitle>
      <_Status statusRecord={statusRecord} />
    </div>
  );
};
