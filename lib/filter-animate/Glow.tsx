import {
  TPartialGlowConfigOptions,
  resolveGlowProps,
} from '@brysonandrew/filter-animate/utils/glow';
import { FilterAnimate } from '.';
import { FC } from 'react';

export type TGlowProps = TPartialGlowConfigOptions;
export const Glow: FC<TGlowProps> = ({
  children,
  ...options
}) => {
  console.log(options.value);

  return (
    <FilterAnimate {...resolveGlowProps(options)}>
      {children}
    </FilterAnimate>
  );
};
