import { Morph } from '@components/background/morph';
import { Pattern } from '@components/background/pattern';
import { FilterShell } from './FilterShell';
import { Filter as Aura, AURA_ID } from './aura/Filter';

export const Filters = () => {
  return (
    <FilterShell>
      <Aura id={AURA_ID} intensity={10} />
      <Pattern />
      <Morph />
    </FilterShell>
  );
};
