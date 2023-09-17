import { Provider } from './context/Provider';
import { Variables } from '@css/Variables';
import { useLocalConnection } from './useLocalConnection';
import { Main } from './Main';

import '@css/reset.css';
import '@css/globals.css';
import 'virtual:uno.css';

export const Projector = () => {
  useLocalConnection();

  return (
    <>
      <Variables />
      <Provider>
        <Main />
      </Provider>
    </>
  );
};
