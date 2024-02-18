import {
  resolveGlowProps,
  TGlowConfig,
} from '@brysonandrew/filter-animate/utils/glow';
import { FilterAnimate } from '@brysonandrew/filter-animate';
import { FC } from 'react';

export type TGlowProps = TGlowConfig;
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
