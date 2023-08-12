import { Glow } from '@components/filter-animate/Glow';
import { Metal } from '.';
import { FC } from 'react';
import { MetalDarkest } from './MetalDarkest';
import { MetalDark } from './MetalDark';
import { TPartialGlowConfigOptions } from '@utils/effects/glow';
import { TClassValueProps } from '@t/index';

type TProps = {
  isDarkest?: boolean;
} & TPartialGlowConfigOptions &
  TClassValueProps;
export const MetalGlow: FC<TProps> = ({
  isDarkest,
  drop,
  classValue,
  ...rest
}) => {
  const Root = isDarkest ? MetalDarkest : MetalDark;
  return (
    <Glow
      drop={drop ?? 2}
      {...rest}
      classValue={classValue}
    >
      <Metal Root={Root} classValue={classValue} />
    </Glow>
  );
};
