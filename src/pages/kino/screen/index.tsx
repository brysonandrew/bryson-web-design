import { Variables } from '@css/Variables';
import { Provider } from './context/Provider';
import { Main } from './Main';
import { AblyProvider } from 'ably/react';
import { useClient } from '../hooks/signaling/useClient';

import 'webrtc-adapter';
import '@css/globals.css';
import 'virtual:uno.css';

export const Screen = () => {
  const client = useClient();

  return (
    <AblyProvider client={client}>
      <Variables />
      <Provider>
        <Main />
      </Provider>
    </AblyProvider>
  );
};
