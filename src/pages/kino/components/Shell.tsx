import { P24Y } from '@components/space/P24Y';
import { Line } from './Line';
import { P4 } from '@components/space/P4';
import { P8 } from '@components/space/P8';
import { FC, Fragment } from 'react';
import { Space } from './Space';

type TProps = { rows: JSX.Element[] };
export const Shell: FC<TProps> = ({ rows }) => {
  return (
    <div className='text-md'>
      <P8 />
      <div className='column'>
        {rows.map((row, index) => (
          <Fragment key={`${index}`}>
            {index !== 0 && <Space />}
            <div className='w-3/4'>{row}</div>
          </Fragment>
        ))}
      </div>
      <P4 />
      <Line />
      <P24Y />
    </div>
  );
};
