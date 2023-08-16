import { Morph } from '@components/background/morph';
import { Pattern } from '@components/background/pattern';
import { POOL_ID, Pool } from '@components/effects/pool';
import { FilterShell } from './FilterShell';
import { useScrollControl } from '@hooks/scroll/useScrollControl';

export const Filters = () => {
  useScrollControl();
  return (
    <FilterShell>
      <Pool id={POOL_ID} intensity={10} />
      <Pattern />
      <Morph />
    </FilterShell>
  );
};
