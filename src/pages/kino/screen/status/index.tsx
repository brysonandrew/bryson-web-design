import { Row } from '@pages/kino/components/Row';
import { Status as _Status } from '../../components/status';
import { useScreen } from '../context';

export const Status = () => {
  const { statusRecord } = useScreen();

  return (
    <Row
      title='STATUS'
      content={<_Status statusRecord={statusRecord} />}
    />
  );
};
