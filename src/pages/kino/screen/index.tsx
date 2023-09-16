import { Header } from '../components/Header';
import { useRemoteConnection } from './useRemoteConnection';
import { Video } from './Video';

export const Screen = () => {
  useRemoteConnection();
  return <Header left={<Video />} variant='remote' />;
};
