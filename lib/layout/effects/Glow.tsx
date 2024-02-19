import {
  resolveGlowProps,
  TGlowConfig,
} from '@brysonandrew/filter-animate/utils/glow';
import { FilterAnimate } from '@brysonandrew/filter-animate';
import { FC } from 'react';

export const Glow: FC<TGlowConfig> = ({
  children,
  ...options
}) => {
  return (
    <FilterAnimate {...resolveGlowProps(options)}>
      {children}
    </FilterAnimate>
  );
};
