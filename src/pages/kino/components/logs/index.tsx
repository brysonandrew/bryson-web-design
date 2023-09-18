import { P1 } from '@components/space/P1';
import { FadeDown } from '@components/vertical-fade/FadeDown';
import { Subtitle } from '../Subtitle';
import { TLogsContext } from '@pages/kino/config/types';
import { FC } from 'react';

type TProps = Pick<TLogsContext, 'logs'>;
export const Logs: FC<TProps> = ({ logs }) => {
  return (
    <div className='relative h-44 overflow-auto'>
      <div className='sticky top-0 p-1'>
        <FadeDown classValue='h-full' />
        <Subtitle classValue='relative z-20'>Logs</Subtitle>
        <P1 />
      </div>
      <ul>
        {logs.map(([id, text]) => (
          <li key={id}>
            <samp>{text}</samp>
          </li>
        ))}
      </ul>
    </div>
  );
};
