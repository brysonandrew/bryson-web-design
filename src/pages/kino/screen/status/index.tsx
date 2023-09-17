import { Subtitle } from '../../components/Subtitle';
import { Status as _Status } from '../../components/status';
import { useScreen } from '../context';

export const Status = () => {
  const { statusRecord } = useScreen();

  return (
    <div className='row-space'>
      <Subtitle>STATUS</Subtitle>
      <_Status statusRecord={statusRecord} />
    </div>
  );
}; 
