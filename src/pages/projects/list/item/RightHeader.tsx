import type { FC } from 'react';
import { P1 } from '@components/layout/space/P1';
import { P2 } from '@components/layout/space/P2';
import { Pricing } from './content/Pricing';
import { Time } from './content/Time';
import { TItem } from '@pages/projects/config/types';

type TProps = Pick<TItem, 'time' | 'pricing'>;
export const RightHeader: FC<TProps> = ({
  time,
  pricing,
}) => {
  return (
    <>
      <P1 />
      <Time time={time} />
      <P2 />
      <Pricing type={pricing} />
    </>
  );
};
