import { Video } from './Video';
import { Provider as ScreenProvider } from '../context/screen/Provider';

export const Screen = () => {
  return (
    <ScreenProvider>
      <Video />
    </ScreenProvider>
  );
};
