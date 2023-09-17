import { Variables } from '@css/Variables';
import { Provider } from './context/Provider';
import { Video } from './Video';
import { useRemoteConnection } from './useRemoteConnection';

import '@css/reset.css';
import '@css/globals.css';
import 'virtual:uno.css';

export const Screen = () => {
  useRemoteConnection();

  return (
    <>
      <Variables />
      <Provider>
        <Video />
      </Provider>
    </>
  );
};
