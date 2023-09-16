import { useRemoteConnection } from './useRemoteConnection';
import { StatusRow } from '../components/StatusRow';
import { Subtitle } from '../components/Subtitle';

export const Remote = () => {
  useRemoteConnection();
  return (
    <StatusRow
      left={<Subtitle>REMOTE</Subtitle>}
      variant='remote'
    />
  ); 
};
