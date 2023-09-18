import { Connection } from './connection';
import { Logs } from './logs';
import { useLocalConnection } from './useLocalConnection';
import { Status } from './status';
import { Shell } from '../components/Shell';

export const Main = () => {
  useLocalConnection();
  return (
    <Shell rows={[<Connection />, <Status />, <Logs />]} />
  );
};
