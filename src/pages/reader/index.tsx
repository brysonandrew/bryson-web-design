import { Variables } from '@css/Variables';
import { Provider } from './context/Provider';
import { Main } from './Main';

import '@css/reset.css';
import '@css/globals.css';
import 'virtual:uno.css';

export const Reader = () => {
  return (
    <>
      <Variables />
      <Provider>
        <Main />
      </Provider>
    </>
  );
};
