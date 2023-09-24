import { Video } from './Video';
import { Shell } from '../components/Shell';
import { Status } from './status';
import { Logs } from './logs';
import { useRemoteChannel } from './useRemoteChannel';
import { useRemoteConnection } from './useRemoteConnection';

export const Main = () => {
  useRemoteChannel();
  useRemoteConnection();

  return <Shell rows={[<Video />, <Status />, <Logs />]} />;
};
