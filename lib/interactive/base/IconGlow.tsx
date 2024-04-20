import { TPartialGlowConfigOptions } from '@brysonandrew/motion-filter';
import { I, TIConfigProps } from '@brysonandrew/icons-i';
import { Glow } from '@brysonandrew/layout-effects';
import { FC } from 'react';

type TProps = TPartialGlowConfigOptions & TIConfigProps;
export const IconGlow: FC<TProps> = ({
  iconConfig,
  ...glowProps
}) => {
  return (
    <Glow drop={4} color='white' {...glowProps}>
      <I {...iconConfig} />
    </Glow>
  );
};
