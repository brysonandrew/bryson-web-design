import { Video } from './Video';
import { useRemoteConnection } from './useRemoteConnection';
import { Shell } from '../components/Shell';
import { Status } from './status';
import { Logs } from './logs';

export const Main = () => {
  useRemoteConnection();

  return <Shell rows={[<Video />, <Status />, <Logs />]} />;
};
   