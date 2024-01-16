import { Glow } from '@lib/animation/components/filter-animate/Glow';
import { TPartialGlowConfigOptions } from '@lib/animation/components/filter-animate/utils/glow';
import { TIconComponent } from '@lib/icons/type';
import { FC } from 'react';

type TProps = TPartialGlowConfigOptions & {
  Icon: TIconComponent;
};
export const IconGlow: FC<TProps> = ({
  Icon,
  ...glowProps
}) => {
  return (
    <Glow drop={4} {...glowProps}>
      <Icon classValue='relative' />
    </Glow>
  );
};
