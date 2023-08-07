import { Glow } from '@components/filter-animate/Glow';
import { Metal } from '.';
import { FC } from 'react';
import { MetalDarkest } from './MetalDarkest';
import { MetalDark } from './MetalDark';
import { TPartialGlowConfigOptions } from '@utils/effects/glow';

type TProps = {
  isDarkest?: boolean;
} & TPartialGlowConfigOptions;
export const MetalGlow: FC<TProps> = ({
  isDarkest,
  drop,
  ...rest
}) => {
  const Root = isDarkest ? MetalDarkest : MetalDark;
  return (
    <Glow drop={drop ?? 2} {...rest}>
      <Metal Root={Root} />
    </Glow>
  );
};
