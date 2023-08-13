import { Glow } from '@components/filter-animate/Glow';
import { Metal } from '.';
import { FC } from 'react';
import { MetalDarkest } from './MetalDarkest';
import { MetalDark } from './MetalDark';
import { TPartialGlowConfigOptions } from '@utils/effects/glow';
import { TClassValueProps } from '@t/index';
import { useContext } from '@state/Context';

type TProps = {
  isDarkest?: boolean;
} & TPartialGlowConfigOptions &
  TClassValueProps;
export const MetalGlow: FC<TProps> = ({
  isDarkest,
  drop,
  color,
  classValue,
  ...rest
}) => {
  const Root = isDarkest ? MetalDarkest : MetalDark;
  const {
    darkMode: { isDarkMode },
  } = useContext();
  return (
    <Glow
      drop={drop ?? 2}
      color={color ?? (isDarkMode ? 'teal' : 'gray-3')}
      classValue={classValue}
      {...rest}
    >
      <Metal Root={Root} classValue={classValue} />
    </Glow>
  );
};
