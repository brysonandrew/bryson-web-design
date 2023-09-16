import { Audience } from './audience';
import { Screen } from './screen';
import { Provider } from './context/Provider';
import { Variables } from '@css/Variables';
import { Connection } from './connection';
import { Line } from './components/Line';
import { P4 } from '@components/space/P4';
import { P8 } from '@components/space/P8';
import { Logs } from './logs';
import '@css/reset.css';
import '@css/globals.css';
import 'virtual:uno.css';
import { P24Y } from '@components/space/P24Y';

export const Kino = () => (
  <div className='text-md'>
    <Variables />
    <Provider>
      <P8 />
      <div className='column'>
        <div className='w-3/4'>
          <Screen />
        </div>
        <P4 />
        <Line />
        <P4 />
        <div className='w-3/4'>
          <Connection />
        </div>
        <P4 />
        <Line />
        <P4 />
        <div className='w-3/4'>
          <Audience />
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
    </Provider>
  </div>
);
