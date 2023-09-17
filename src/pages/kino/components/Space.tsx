import { P4 } from '@components/space/P4';
import { FC } from 'react';
import { Line } from './Line';

export const Space: FC = () => {
  return (
    <>
      <P4 />
      <Line />
      <P4 />
    </>
  );
};
