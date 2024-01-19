import { P1 } from '@brysonandrew/lib/components/layout/space/P1';
import { FadeDown } from '@brysonandrew/lib/components/layout/vertical-fade/FadeDown';
import { Subtitle } from '../Subtitle';
import { TLogsContext } from '@pages/_workshop/kino/config/types';
import { FC } from 'react';

type TProps = Pick<TLogsContext, 'logs'>;
export const Logs: FC<TProps> = ({ logs }) => {
  return (
    <div className='relative overflow-auto bg-black'>
      <div className='sticky top-0 p-1'>
        <FadeDown classValue='h-full' />
        <Subtitle classValue='relative z-20'>Logs</Subtitle>
        <P1 />
      </div>
      <ul>
        {logs.map(([id, text]) => (
          <li key={id}>
            <samp>
              <kbd className='text-gray-1'>
                [{id.slice(0, 3)}…{id.slice(-3)}]
              </kbd>{' '}
              {text}
            </samp>
          </li>
        ))}
      </ul>
    </div>
  );
};
