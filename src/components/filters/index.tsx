import { Morph } from '@components/background/morph';
import { Pattern } from '@components/background/pattern';
import { FilterShell } from './FilterShell';
import { useScrollControl } from '@hooks/scroll/useScrollControl';
import { Filter as Aura, AURA_ID } from './aura/Filter';

export const Filters = () => {
  useScrollControl();
  return (
    <FilterShell>
      <Aura id={AURA_ID} intensity={10} />
      <Pattern />
      <Morph />
    </FilterShell>
  );
};
