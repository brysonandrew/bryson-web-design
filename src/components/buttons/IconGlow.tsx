import { Glow, TGlowProps } from '@components/glow';
import { TIconComponent } from '@t/icons';
import { FC } from 'react';

type TProps = TGlowProps & {
  Icon: TIconComponent;
};
export const IconGlow: FC<TProps> = ({
  Icon,
  ...glowProps
}) => {
  return (
    <Glow drop={4} color='white' {...glowProps}>
      <Icon classValue='relative w-9 h-9' />
    </Glow>
  );
};
