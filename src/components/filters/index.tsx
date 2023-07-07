import { Morph } from '@components/background/morph';
import { Pattern } from '@components/background/pattern';
import { POOL_ID } from '@components/cursor';
import { Pool } from '@components/effects/pool';
import { FilterShell } from './FilterShell';
import { Displacement } from '../effects/displacement';
import { useScrollControl } from '@hooks/scroll/useScrollControl';
export const LOGO_SUFFIX = 'LOGO';
export const TITLE_SUFFIX = 'TITLE';
export const MUGSHOT_SUFFIX = 'MUGSHOT';

export const Filters = () => {
  useScrollControl();
  return (
    <FilterShell>
      <Pool id={POOL_ID} intensity={10} />
      <Pattern />
      <Morph />
      <Displacement />
    </FilterShell>
  );
};
