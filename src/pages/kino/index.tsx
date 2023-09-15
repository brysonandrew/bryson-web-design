import { P24Y } from '@components/space/P24Y';
import { Audience } from './audience';
import { Screen } from './screen';
import { Provider } from './context/Provider';
import '@css/reset.css';
import '@css/globals.css';
import 'virtual:uno.css';
import { Variables } from '@css/Variables';
import { Connection } from './connection';
import { Line } from './components/Line';
import { P6 } from '@components/space/P6';
import { P8 } from '@components/space/P8';

export const Kino = () => (
  <div className='text-xl'>
    <Variables />
    <Provider>
      <P24Y /> 
      <div className='column'>
        <div className='w-3/4'>
          <Screen />
        </div>
        <P8 />
        <Line />
        <P6 />
        <div className='w-3/4'>
          <Connection />
        </div>
        <P6 />
        <Line />
        <P8 />
        <div className='w-3/4'>
          <Audience />
        </div>
      </div>
    </Provider>
  </div>
);
