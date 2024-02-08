import {
  TPartialGlowConfigOptions,
  resolveGlowProps,
} from '@brysonandrew/filter-animate/utils/glow';
import { FilterAnimate } from '@brysonandrew/filter-animate';
import { FC } from 'react';

export type TGlowProps = TPartialGlowConfigOptions;
export const Glow: FC<TGlowProps> = ({
  children,
  ...options
}) => {
  return (
    <FilterAnimate {...resolveGlowProps(options)}>
      {children}
    </FilterAnimate>
  );
};
