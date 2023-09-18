import { Logs as _Logs } from '@pages/kino/components/logs';
import { useProjector } from '../context';

export const Logs = () => {
  const { logs } = useProjector();
  return <_Logs logs={logs} />;
};
