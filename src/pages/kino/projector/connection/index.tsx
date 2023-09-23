import { Row } from '@pages/kino/components/Row';
import { Connect } from './connect';
import { Disconnect } from './disconnect';
import { P4 } from '@components/space/P4';

export const Connection = () => (
  <Row
    title='CONNECTION'
    content={
      <div className='row justify-start'>
        <Connect />
        <P4 />
        <Disconnect />
      </div>
    }
  />
);
