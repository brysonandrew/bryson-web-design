import { Provider as ProjectorProvider } from './context/projector/Provider';
import { P24Y } from '@components/space/P24Y';
import { Variables } from '@css/Variables';
import { Line } from './components/Line';
import { P4 } from '@components/space/P4';
import { P8 } from '@components/space/P8';
import { Screen } from './screen';
import { Connection } from './connection';
import { Remote } from './remote';
import { Local } from './local';
import { Logs } from './logs';

import '@css/reset.css';
import '@css/globals.css';
import 'virtual:uno.css';

export const Kino = () => (
  <ProjectorProvider>
    <div className='text-md'>
      <Variables />
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
          <Remote />
        </div>
        <P4 />
        <Line />
        <P4 />
        <div className='w-3/4'>
          <Local />
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
  </ProjectorProvider>
);
