import { Logs as _Logs } from '@pages/_workshop/kino/components/logs';
import { useScreen } from '../context';

export const Logs = () => {
  const { logs } = useScreen();
  return <_Logs logs={logs} />;
};
