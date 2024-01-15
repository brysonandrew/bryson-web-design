import { Glow } from '@lib/animation/components/filter-animate/Glow';
import { TIconComponent } from '@lib/icons/icon';
import { TPartialGlowConfigOptions } from '@lib/animation/components/filter-animate/utils/glow';
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
