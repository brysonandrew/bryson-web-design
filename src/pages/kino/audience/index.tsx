import { Video } from './stream';
import { Header } from '../components/Header';

export const Audience = () => (
  <Header left={<Video />} variant='local' />
);
