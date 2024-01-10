import { Provider } from './context/Provider';
import { Variables } from '@css/Variables';
import { Main } from './Main';
import { AblyProvider } from 'ably/react';
import { useClient } from '../hooks/signaling/useClient';

import 'webrtc-adapter';
import '@css/globals.css';
import 'virtual:uno.css';

export const Projector = () => {
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
