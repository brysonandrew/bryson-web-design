import { Provider } from './context/Provider';
import { P24Y } from '@components/space/P24Y';
import { Variables } from '@css/Variables';
import { Line } from '../components/Line';
import { P4 } from '@components/space/P4';
import { P8 } from '@components/space/P8';
import { Connection } from './connection';
import { Status } from './status';
import { Logs } from './logs';

import '@css/reset.css';
import '@css/globals.css';
import 'virtual:uno.css';
import { useLocalConnection } from './useLocalConnection';

export const Projector = () => {
  useLocalConnection();

  return (
    <>
      <Variables />
      <Provider>
        <div className='text-md'>
          <P8 />
          <div className='column'>
            <div className='w-3/4'>
              <Connection />
            </div>
            <P4 />
            <Line />
            <P4 />
            <div className='w-3/4'>
              <Status />
            </div>
            <P4 />
            <Line />
            <P4 />
            <div className='w-3/4'>
              <Logs />
            </div>
          </div>
          <P4 />
          <Line />
          <P24Y />
        </div>
      </Provider>
    </>
  );
};
