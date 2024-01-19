import { Row } from '@pages/_workshop/kino/components/Row';
import { Status as _Status } from '../../components/status';
import { useProjector } from '../context';

export const Status = () => {
  const { statusRecord } = useProjector();

  return (
    <Row
      title='STATUS'
      content={<_Status statusRecord={statusRecord} />}
    />
  );
};
