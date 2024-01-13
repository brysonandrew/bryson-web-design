import { P24Y } from '@lib/components/layout/space/P24Y';
import { Line } from './Line';
import { P4 } from '@lib/components/layout/space/P4';
import { P8 } from '@lib/components/layout/space/P8';
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
