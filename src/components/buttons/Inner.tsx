import { MetalGlow } from '@components/metal/MetalGlow';
import { TIconComponent } from '@t/icons';
import { FC } from 'react';
import { IconGlow } from './IconGlow';

type TProps = {
  Icon: TIconComponent;
};
export const Inner: FC<TProps> = ({ Icon }) => {
  return (
    <>
      <MetalGlow />
      <IconGlow Icon={Icon} />
    </>
  );
};
