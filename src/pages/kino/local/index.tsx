import { P2 } from '@components/space/P2';
import { StatusRow } from '../components/StatusRow';
import { Subtitle } from '../components/Subtitle';
import { useLocalConnection } from './useLocalConnection';
import { Stream } from './stream';
import { Status } from '../components/status';
import { useSendChannel } from './useSendChannel';

export const Local = () => {
  useLocalConnection();
  useSendChannel();
  return (
    <div className='row-space'>
      <Subtitle>LOCAL</Subtitle>
      <Stream />
      <Status variant='local' />
    </div>
  );
};
