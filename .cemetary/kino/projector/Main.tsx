import { Connection } from './connection';
import { Logs } from './logs';
import { Status } from './status';
import { Shell } from '../components/Shell';
import { Stream } from './stream';
import { useLocalChannel } from './useLocalChannel';
import { useLocalConnection } from './useLocalConnection';

export const Main = () => {
  useLocalChannel();
  useLocalConnection();

  return (
    <Shell
      rows={[
        <Stream />,
        <Connection />,
        <Status />,
        <Logs />,
      ]}
    />
  );
};
