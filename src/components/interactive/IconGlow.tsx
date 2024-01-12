import { Glow } from '@components/animation/filter-animate/Glow';
import { TIconComponent } from '@t/icons';
import { TPartialGlowConfigOptions } from '@utils/effects/glow';
import { FC } from 'react';

type TProps = TPartialGlowConfigOptions & {
  Icon: TIconComponent;
};
export const IconGlow: FC<TProps> = ({
  Icon,
  ...glowProps
}) => {
  return (
    <Glow drop={4} color='white-9' {...glowProps}>
      <Icon classValue='relative' />
    </Glow>
  );
};
