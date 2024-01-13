import { Row } from '@pages/_workshop/kino/components/Row';
import { Connect } from './connect';
import { Disconnect } from './disconnect';
import { P4 } from '@lib/components/layout/space/P4';

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
